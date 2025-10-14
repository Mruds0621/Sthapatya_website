import { motion } from "motion/react";
import { MapPin, TrendingUp, Award, Building2, CheckCircle, ExternalLink } from "lucide-react";

export function ProjectsPage() {
  const stats = [
    { icon: Building2, label: "ULBs", value: "100+" },
    { icon: MapPin, label: "Properties", value: "50L+" },
    { icon: TrendingUp, label: "Revenue", value: "+35%" },
    { icon: Award, label: "Years", value: "25+" },
  ];

  const keyClients = [
    "Thane MC", "PCMC", "Panvel MC", "Nashik MC",
    "Nagpur MC", "Akola MC", "Amravati MC", "Jalgaon MC",
    "Dhule MC", "Baramati", "Chakan", "Wadagaon"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#4f46e5]/5 to-white pt-20 pb-8 px-4">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Project Showcase */}
          <div className="space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-white rounded-full mb-4 shadow-lg"
              >
                <Award size={18} />
                <span className="text-sm" style={{ fontWeight: 600 }}>100+ Successful Projects</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl text-[#1e3a8a] mb-3"
                style={{ fontWeight: 700 }}
              >
                Our Projects
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-[#2563eb]"
              >
                Transforming Urban Local Bodies Across Maharashtra
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-4 gap-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-2xl p-4 text-center shadow-lg"
                >
                  <stat.icon className="text-white mx-auto mb-2" size={24} />
                  <p className="text-2xl text-white mb-1" style={{ fontWeight: 700 }}>{stat.value}</p>
                  <p className="text-xs text-white/90">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Complete Solutions Delivered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-5 shadow-lg"
            >
              <h3 className="text-lg text-[#1e3a8a] mb-3" style={{ fontWeight: 600 }}>
                Complete Solutions Delivered
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "GIS Mapping",
                  "Property Survey",
                  "Tax Assessment",
                  "Mobile Apps",
                  "Cloud Platform",
                  "Data Analytics",
                  "Citizen Portal",
                  "Real-time Tracking",
                ].map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                  >
                    <CheckCircle size={14} className="text-[#4f46e5]" />
                    <span className="text-sm text-[#2563eb]">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] p-6 shadow-2xl"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"
              />

              <div className="relative z-10">
                <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 700 }}>
                  Ready to Transform Your ULB?
                </h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Join 100+ Urban Local Bodies that trust us for their property tax management needs.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1e3a8a] rounded-xl shadow-lg hover:shadow-xl transition-all"
                  style={{ fontWeight: 600 }}
                >
                  <span>Contact Us Today</span>
                  <ExternalLink size={18} />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Client List & Impact */}
          <div className="space-y-6">
            {/* All Clients Grid - Scrollable (Show 6, scroll for more) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl text-[#1e3a8a] mb-4" style={{ fontWeight: 600 }}>
                Our Prestigious Clients
              </h2>
              
              <div className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-6 shadow-lg">
                <div className="max-h-[280px] overflow-y-auto pr-2 scrollable-clients">
                  <div className="grid grid-cols-2 gap-3">
                    {keyClients.map((client, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#4f46e5]/5 to-[#6366f1]/5 rounded-xl border border-[#4f46e5]/10 hover:border-[#4f46e5]/30 transition-all"
                      >
                        <Building2 size={16} className="text-[#4f46e5] flex-shrink-0" />
                        <span className="text-sm text-[#1e3a8a]" style={{ fontWeight: 500 }}>{client}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Impact Metrics - Point-wise with Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-xl text-[#1e3a8a] mb-3" style={{ fontWeight: 600 }}>
                Our Impact
              </h2>
              
              <div className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-4 shadow-lg">
                <div className="space-y-2.5">
                  {[
                    { label: "Average Revenue Increase", value: "35%", icon: TrendingUp, color: "#2563eb" },
                    { label: "Assessment Time Reduction", value: "40%", icon: CheckCircle, color: "#4f46e5" },
                    { label: "Unassessed Properties Found", value: "25K+", icon: MapPin, color: "#6366f1" },
                    { label: "Citizens Impacted", value: "2 Cr+", icon: Award, color: "#f59e0b" },
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.7 + index * 0.15,
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className="flex items-start gap-2.5 group"
                    >
                      {/* Animated Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.7 + index * 0.15 + 0.2,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="flex-shrink-0"
                      >
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all"
                          style={{ 
                            background: `linear-gradient(135deg, ${metric.color}, ${metric.color}cc)` 
                          }}
                        >
                          <metric.icon size={16} className="text-white" />
                        </div>
                      </motion.div>

                      {/* Content with stagger animation */}
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + index * 0.15 + 0.3 }}
                          className="flex items-baseline justify-between gap-2"
                        >
                          <span className="text-sm text-[#1e3a8a]" style={{ fontWeight: 500 }}>
                            • {metric.label}
                          </span>
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 0.7 + index * 0.15 + 0.4,
                              type: "spring",
                              stiffness: 300
                            }}
                            className="text-lg"
                            style={{ 
                              fontWeight: 700,
                              background: `linear-gradient(135deg, ${metric.color}, ${metric.color}dd)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {metric.value}
                          </motion.span>
                        </motion.div>
                        
                        {/* Animated underline */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ 
                            delay: 0.7 + index * 0.15 + 0.5,
                            duration: 0.6,
                            ease: "easeOut"
                          }}
                          className="h-0.5 mt-1.5 rounded-full origin-left"
                          style={{ 
                            background: `linear-gradient(90deg, ${metric.color}40, transparent)` 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary stat at the bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4 pt-3 border-t-2 border-[#4f46e5]/10 text-center"
                >
                  <p className="text-xs text-[#64748b] mb-0.5">Total Impact Across</p>
                  <p className="text-sm text-[#1e3a8a]" style={{ fontWeight: 700 }}>
                    100+ Urban Local Bodies in Maharashtra
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
