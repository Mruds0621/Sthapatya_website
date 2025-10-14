import { motion } from "motion/react";
import { useState } from "react";

interface HomeSidebarProps {
  sections: { id: string; name: string }[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export function HomeSidebar({ sections, activeSection, onSectionClick }: HomeSidebarProps) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-center gap-3 cursor-pointer"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => onSectionClick(section.id)}
          >
            {/* Vertical Line */}
            <motion.div
              className={`w-0.5 transition-all ${
                activeSection === section.id
                  ? "h-12 bg-[#22D3EE]"
                  : "h-8 bg-[#14B8A6]"
              }`}
              animate={{
                height: activeSection === section.id ? 48 : hoveredSection === section.id ? 40 : 32,
                backgroundColor: activeSection === section.id ? "#22D3EE" : hoveredSection === section.id ? "#06B6D4" : "#14B8A6",
              }}
            />

            {/* Section Name - appears on hover */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: hoveredSection === section.id || activeSection === section.id ? 1 : 0,
                x: hoveredSection === section.id || activeSection === section.id ? 0 : -10,
              }}
              className={`absolute left-6 whitespace-nowrap px-3 py-1.5 rounded-md ${
                activeSection === section.id
                  ? "bg-[#4f46e5] text-white"
                  : "bg-white/95 text-[#1e3a8a] shadow-lg"
              }`}
            >
              {section.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}