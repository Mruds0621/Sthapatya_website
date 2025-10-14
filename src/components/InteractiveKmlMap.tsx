import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";



interface District {
  points: string;
  name: string;
  isVisible: boolean;
  isEnabled: boolean;
}

interface CouncilData {
  id: string;
  name: string;
  region: string;
  properties: string | number;
  residential: number;
  commercial: number;
  industrial: number;
  demand: string;
  area: string;
  description: string;
  majorProjects: string[];
}

interface InteractiveKmlMapProps {
  kmlFile: string;
  onDistrictClick?: (districtKey: string) => void;
  councils: CouncilData[];
  selectedDistrict?: string; // <-- add this
   className?: string;

}

// Map KML district names to your keys in districtData
const nameToKey = (raw: string) => {
  const cleaned = raw.toLowerCase().replace(/\s*district\s*$/i, "").trim();
  // If any special cases, map here:
  const map: Record<string, string> = {
    "raigad": "panvel", // example if you want raigad click to show Panvel card
    // add others only if needed
  };
  return map[cleaned] ?? cleaned;
};
// map various KML names/variants to your keys in districtData
const normalizeDistrictKey = (raw: string): string => {
  const n = raw.trim().toLowerCase();

  // common aliases from KML -> your keys
  if (n.includes("THANE")) return "THANE";
  if (n.includes("mumbai")) return "mumbai";
  if (n.includes("bombay")) return "mumbai";
  if (n.includes("pune")) return "pune";
  if (n.includes("nashik") || n.includes("nasik")) return "nashik";
  if (n.includes("nagpur")) return "nagpur";
  if (n.includes("raigad") || n.includes("panvel")) return "panvel";

  return n; // fallback; DistrictStatsBox will guard if unmapped
};

export function InteractiveKmlMap({ kmlFile, onDistrictClick, councils, selectedDistrict,}: InteractiveKmlMapProps) {
  const [paths, setPaths] = useState<District[]>([]);
  const [viewBox, setViewBox] = useState("0 0 100 100");
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    fetch(kmlFile)
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const placemarks = Array.from(xml.getElementsByTagName("Placemark"));
        const newPaths: District[] = [];
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        placemarks.forEach((placemark) => {
          const name = placemark.getElementsByTagName("name")[0]?.textContent || "Unknown";

          const multiGeometry = placemark.getElementsByTagName("MultiGeometry")[0];
          let coordElements: Element[] = [];

          if (multiGeometry) {
            coordElements = Array.from(multiGeometry.getElementsByTagName("coordinates"));
          } else {
            const coordTag = placemark.getElementsByTagName("coordinates")[0];
            if (coordTag) coordElements = [coordTag];
          }

          coordElements.forEach((coordTag) => {
            const coordText = coordTag.textContent?.trim() || "";
            if (!coordText) return;

            let points = coordText
              .split(/\s+/)
              .map((c) => {
                const [lng, lat] = c.split(",").map(Number);
                if (!isNaN(lng) && !isNaN(lat)) {
                  if (lng < minX) minX = lng;
                  if (lat < minY) minY = lat;
                  if (lng > maxX) maxX = lng;
                  if (lat > maxY) maxY = lat;
                  // flip Y for SVG
                  return `${lng},${-lat}`;
                }
                return "";
              })
              .filter(Boolean)
              .join(" ");

            if (points) {
              const pointArray = points.split(" ");
              if (pointArray.length > 1 && pointArray[0] !== pointArray[pointArray.length - 1]) {
                points += " " + pointArray[0];
              }
              newPaths.push({ points, name, isVisible: true, isEnabled: true });
            }
          });
        });

        if (newPaths.length > 0) {
          setPaths(newPaths);
          const paddingX = (maxX - minX) * 0.02;
          const paddingY = (maxY - minY) * 0.02;
          setViewBox(`${minX - paddingX} ${-maxY - paddingY} ${maxX - minX + 2 * paddingX} ${maxY - minY + 2 * paddingY}`);
        }
      })
      .catch((err) => console.error("Error loading KML:", err));
  }, [kmlFile]);
  const handleDistrictClick = (district: District) => {
    if (district.isEnabled && onDistrictClick) {
      const matchingCouncil = councils.find(
        (council) =>
          council.name.toLowerCase().includes(district.name.toLowerCase()) ||
          district.name.toLowerCase().includes(council.name.toLowerCase())
      );

      if (matchingCouncil) {
        onDistrictClick(matchingCouncil.id);
      } else {
        onDistrictClick(district.name);
      }
    }
  };

  const getCouncilStats = (districtName: string) => {
    return councils.find(
      (council) =>
        council.name.toLowerCase().includes(districtName.toLowerCase()) ||
        districtName.toLowerCase().includes(council.name.toLowerCase())
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const stats = hoveredDistrict ? getCouncilStats(hoveredDistrict) : null;
  return (
     <div className="w-full relative" onMouseMove={handleMouseMove}>
    <svg viewBox={viewBox} className="w-full">
      {paths.map((p, i) => {
        if (!p.isVisible) return null;

        const isHovered = hoveredDistrict === p.name;
        const isSelected =
          selectedDistrict && nameToKey(p.name) === selectedDistrict.toLowerCase();

        return (
          <polygon
            key={i}
            points={p.points}
            fill={isSelected ? "#22D3EE" : isHovered ? "#fbb9b6" : "#f3f3f3"}
            stroke={isSelected ? "#0F766E" : "#95231c"}
            strokeWidth={isSelected ? "0.08" : isHovered ? "0.05" : "0.02"}
            onClick={() => handleDistrictClick(p)}
            onMouseEnter={() => setHoveredDistrict(p.name)}
            onMouseLeave={() => setHoveredDistrict(null)}
            className="cursor-pointer transition-all duration-200"
            style={{
              filter: isHovered
                ? "drop-shadow(0 0 5px rgba(149, 35, 28, 0.5))"
                : "none",
            }}
          />
        );
      })}
    </svg>

    {/* Tooltip */}
    <AnimatePresence>
      {hoveredDistrict && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute bg-white text-gray-800 px-3 py-2 rounded-lg pointer-events-none z-50 shadow-xl border border-gray-200"
          style={{
            top: `${mousePosition.y + 10}px`,
            left: `${mousePosition.x + 10}px`,
          }}
        >
          <h4 className="text-red-700 font-semibold text-sm">
            {hoveredDistrict}
          </h4>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
}
