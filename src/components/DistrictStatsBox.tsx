import { motion } from "motion/react";
import { Building2, MapPin, TrendingUp } from "lucide-react";

export interface DistrictData {
  name: string;
  municipalCorporation: string;
  totalCouncils: number;
  councilList: string[];
  propertiesSurveyed: string;
}

export const districtData: Record<string, DistrictData> = {
  THANE: {
    name: "THANE",
    municipalCorporation: "Thane Municipal Corporation",
    totalCouncils: 12,
    councilList: [
      "Thane East Ward 1",
      "Thane East Ward 2",
      "Thane West Ward 1",
      "Thane West Ward 2",
      "Kalwa-Mumbra",
      "Diva-Manpada",
      "Kopri-Pachpakhadi",
      "Naupada-Vartak Nagar",
      "Wagle Estate",
      "Majiwada-Manpada",
      "Ghodbunder Road",
      "Kasheli-Manpada"
    ],
    propertiesSurveyed: "15.2 Lakh"
  },
  mumbai: {
    name: "Mumbai",
    municipalCorporation: "Brihanmumbai Municipal Corporation",
    totalCouncils: 8,
    councilList: [
      "Mumbai City District",
      "Mumbai Suburban District",
      "Western Suburbs",
      "Eastern Suburbs",
      "South Mumbai",
      "Central Mumbai",
      "Island City",
      "Extended Suburbs"
    ],
    propertiesSurveyed: "10.5 Lakh"
  },
  PUNE: {
    name: "Pune",
    municipalCorporation: "Pune Municipal Corporation",
    totalCouncils: 15,
    councilList: [
      "Aundh-Baner",
      "Kothrud-Bavdhan",
      "Warje-Karve Nagar",
      "Kondhwa-Yewalewadi",
      "Hadapsar-Mundhwa",
      "Kharadi-Viman Nagar",
      "Shivajinagar",
      "Kasba Peth",
      "Bibvewadi-Katraj",
      "Dhankawadi-Sahakarnagar",
      "Parvati-Gultekdi",
      "Sinhagad Road",
      "Wakad-Hinjewadi",
      "Pimpri-Chinchwad East",
      "Pimpri-Chinchwad West"
    ],
    propertiesSurveyed: "12.8 Lakh"
  },
  NASHIK: {
    name: "Nashik",
    municipalCorporation: "Nashik Municipal Corporation",
    totalCouncils: 10,
    councilList: [
      "Nashik Road",
      "Satpur MIDC",
      "College Road",
      "Panchavati",
      "Gangapur Road",
      "Mumbai Naka",
      "Indira Nagar",
      "Old Nashik",
      "Adgaon",
      "Pathardi Phata"
    ],
    propertiesSurveyed: "8.3 Lakh"
  },
  NAGPUR: {
    name: "Nagpur",
    municipalCorporation: "Nagpur Municipal Corporation",
    totalCouncils: 9,
    councilList: [
      "Central Nagpur",
      "East Nagpur",
      "West Nagpur",
      "North Nagpur",
      "South Nagpur",
      "Dharampeth",
      "Sitabuldi",
      "Kalamna",
      "MIDC Area"
    ],
    propertiesSurveyed: "7.9 Lakh"
  },
  PANVEL: {
    name: "Raigad (Panvel)",
    municipalCorporation: "Panvel Municipal Corporation",
    totalCouncils: 7,
    councilList: [
      "Old Panvel",
      "New Panvel",
      "Khanda Colony",
      "Sector 1-10",
      "Sector 11-21",
      "Kalamboli",
      "Kamothe"
    ],
    propertiesSurveyed: "6.5 Lakh"
  },
   AMARAVATI: {
    name: "Amaravati",
    municipalCorporation: "Amaravati Municipal Corporation",
    totalCouncils: 7,
    councilList: [
      "Old Panvel",
      "New Panvel",
      "Khanda Colony",
      "Sector 1-10",
      "Sector 11-21",
      "Kalamboli",
      "Kamothe"
    ],
    propertiesSurveyed: "6.5 Lakh"
  }
};

interface DistrictStatsBoxProps {
  selectedDistrict: string;
}
/** Map various KML/click names to our keys in districtData */
function normalizeDistrictKey(raw: string): keyof typeof districtData | undefined {
  if (!raw) return undefined;
  const n = raw.trim().toLowerCase();

  if (n.includes("THANE")) return "THANE";
  if (n.includes("mumbai") || n.includes("bombay")) return "mumbai";
  if (n.includes("PUNE")) return "PUNE";
  if (n.includes("NASHIK") || n.includes("NASHIK")) return "NASHIK";
  if (n.includes("NAGPUR")) return "NAGPUR";
  if (n.includes("RAYGAD") || n.includes("RAYGAD")) return "RAYGAD";
    if (n.includes("AMARAVATI") || n.includes("AMARAVATI")) return "AMARAVATI";

  // If the raw value already exactly matches one of the keys, allow it.
  if (n in districtData) return n as keyof typeof districtData;

  return undefined;
}

export function DistrictStatsBox({ selectedDistrict }: DistrictStatsBoxProps) {
  const key = normalizeDistrictKey(selectedDistrict) ?? "THANE"; // safe default
  const district = districtData[selectedDistrict];

  if (!district) {
    // Graceful fallback – never crash
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="h-full"
      >
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] p-6 text-white rounded-2xl h-full flex items-center">
          <div>
            <p className="text-white/80 text-sm mb-1">Municipal Corporation</p>
            <h3 className="text-xl">Select a district on the map</h3>
            <p className="text-white/60 text-sm mt-1">
              (Received “{selectedDistrict}”, which isn’t mapped yet)
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="h-full"
    >
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] p-6 text-white shadow-xl h-full flex flex-col">
        <motion.div
          key={selectedDistrict}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow flex flex-col"
        >
          {/* Municipal Corporation Name */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} className="text-white/80" />
              <p className="text-sm text-white/70">Municipal Corporation</p>
            </div>
            <h3 className="text-xl">{district.municipalCorporation}</h3>
          </div>

          {/* Total Councils Count */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 p-4 bg-white/10 backdrop-blur-sm rounded"
          >
            <div className="flex items-center gap-3">
              <Building2 size={20} className="flex-shrink-0" />
              <div>
                <p className="text-sm text-white/70">Total Councils</p>
                <p className="text-2xl">{district.totalCouncils}</p>
              </div>
            </div>
          </motion.div>

          {/* Council List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 flex-grow"
          >
            <p className="text-sm text-white/70 mb-2">Council Names</p>
            <div className="bg-white/10 backdrop-blur-sm rounded p-3 max-h-48 overflow-y-auto custom-scrollbar">
              <ul className="space-y-1.5">
                {district.councilList.map((council, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="text-sm text-white/90 flex items-start gap-2"
                  >
                    <span className="text-white/50 mt-1">•</span>
                    <span>{council}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Total Properties Surveyed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 bg-white/10 backdrop-blur-sm rounded"
          >
            <div className="flex items-center gap-3">
              <TrendingUp size={20} className="flex-shrink-0" />
              <div>
                <p className="text-sm text-white/70">Total Properties Surveyed</p>
                <p className="text-2xl">{district.propertiesSurveyed}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </motion.div>
  );
}
