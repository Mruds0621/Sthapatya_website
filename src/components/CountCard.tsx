import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface CountCardProps {
  icon: LucideIcon;
  count: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function CountCard({ icon: Icon, count, suffix = "", label, delay = 0 }: CountCardProps) {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = count / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setDisplayCount(Math.min(Math.round(increment * currentStep), count));
      } else {
        clearInterval(timer);
        setDisplayCount(count);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="relative group"
    >
      <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#1e3a8a]/20 overflow-hidden">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-[#1e3a8a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 text-center space-y-3">
          {/* Icon */}
          <motion.div
            animate={{ 
              rotate: isInView ? [0, 5, -5, 0] : 0,
              scale: isInView ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="inline-flex p-3 bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] rounded-xl"
          >
            <Icon size={28} className="text-white" />
          </motion.div>

          {/* Count */}
          <div>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.1 }}
              className="text-4xl bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] bg-clip-text text-transparent"
            >
              {displayCount.toLocaleString()}{suffix}
            </motion.div>
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            className="text-sm text-[#06B6D4]"
          >
            {label}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
