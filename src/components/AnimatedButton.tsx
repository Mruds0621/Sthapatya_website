import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient" | "glass";
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function AnimatedButton({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "",
  icon,
  iconPosition = "right"
}: AnimatedButtonProps) {
  
  const variants = {
    primary: "relative overflow-hidden px-8 py-4 bg-white text-[#1e3a8a] rounded-xl group",
    secondary: "relative overflow-hidden px-8 py-4 bg-[#4f46e5] text-white rounded-xl group",
    outline: "relative overflow-hidden px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl group",
    gradient: "relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] text-white rounded-xl group",
    glass: "relative overflow-hidden px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl group"
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${variants[variant]} ${className} inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl`}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: variant === "primary" 
            ? "linear-gradient(45deg, #1e3a8a, #4f46e5, #1e3a8a)" 
            : "linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1), rgba(255,255,255,0.3))",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 3s ease infinite",
          padding: "2px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude"
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {icon && iconPosition === "left" && (
          <motion.span
            className="inline-block"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.span>
        )}
        
        <span className="relative">
          {children}
          {/* Text underline effect */}
          <motion.span
            className="absolute bottom-0 left-0 h-[2px] bg-current"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </span>
        
        {icon && iconPosition === "right" && (
          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.span>
        )}
      </span>

      {/* Ripple effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ scale: 0, opacity: 0.5 }}
        whileHover={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
        }}
      />
    </motion.button>
  );
}

// Add CSS animation for gradient border
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  `;
  document.head.appendChild(style);
}
