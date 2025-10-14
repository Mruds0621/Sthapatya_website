import { motion } from "motion/react";
import { Calendar, MapPin, Award, TrendingUp, Building, Target, Zap, Rocket } from "lucide-react";

export function JourneyPage() {
  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      desc: "Vision to transform urban governance",
      icon: Building,
      stats: "5 ULBs",
    },
    {
      year: "2012",
      title: "GIS Integration",
      desc: "Advanced mapping technology",
      icon: MapPin,
      stats: "20+ ULBs",
    },
    {
      year: "2015",
      title: "Major Expansion",
      desc: "Thane & major corporations",
      icon: TrendingUp,
      stats: "50+ ULBs",
    },
    {
      year: "2018",
      title: "Tech Innovation",
      desc: "Mobile apps & cloud systems",
      icon: Award,
      stats: "25L+ Properties",
    },
    {
      year: "2020",
      title: "Recognition",
      desc: "Maharashtra's leading provider",
      icon: Award,
      stats: "75+ ULBs",
    },
    {
      year: "2023",
      title: "Market Leader",
      desc: "Industry leadership achieved",
      icon: Rocket,
      stats: "100+ ULBs",
    },
  ];

  const futureGoals = [
    { icon: Target, label: "Target ULBs", value: "150+", delay: 0.6 },
    { icon: Building, label: "Properties", value: "1 Cr+", delay: 0.7 },
    { icon: Zap, label: "Smart Cities", value: "25+", delay: 0.8 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#4f46e5]/5 to-white pt-20 pb-8 px-4 mt-6">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-white rounded-full mb-4 shadow-lg"
              >
                <Calendar size={20} />
                <span className="text-sm" style={{ fontWeight: 600 }}>25+ Years of Excellence</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl text-[#1e3a8a] mb-3"
                style={{ fontWeight: 700 }}
              >
                Our Journey
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-[#2563eb]"
              >
                From Vision to Market Leadership
              </motion.p>
            </div>

            {/* Compact Timeline */}
            <div className="relative space-y-3">
              {/* Vertical Line */}
              <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#2563eb] via-[#4f46e5] to-[#6366f1]" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="relative flex items-start gap-4 pl-10 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-full border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <milestone.icon size={14} className="text-white" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className="absolute inset-0 bg-[#4f46e5] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border-2 border-[#4f46e5]/20 rounded-xl p-4 shadow-md hover:shadow-xl transition-all group-hover:border-[#4f46e5]/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-white rounded-full text-xs" style={{ fontWeight: 600 }}>
                        {milestone.year}
                      </span>
                      <span className="px-3 py-1 bg-[#f59e0b]/10 text-[#f59e0b] rounded-full text-xs" style={{ fontWeight: 600 }}>
                        {milestone.stats}
                      </span>
                    </div>
                    <h3 className="text-lg text-[#1e3a8a] mb-1" style={{ fontWeight: 600 }}>
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#2563eb]">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Future Vision & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Hero Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] p-8 shadow-2xl"
            >
              {/* Animated background elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90]
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-[#6366f1]/20 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white mb-4 border border-white/30"
                >
                  <Rocket size={20} />
                  <span className="text-sm" style={{ fontWeight: 600 }}>The Road Ahead</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl md:text-4xl text-white mb-4"
                  style={{ fontWeight: 700 }}
                >
                  Future Vision 2025
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-white/90 leading-relaxed mb-6"
                >
                  Empowering urban local bodies with cutting-edge technology 
                  and unparalleled service quality across India.
                </motion.p>

                {/* Future Goals Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {futureGoals.map((goal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: goal.delay }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20 group hover:bg-white/20 transition-all"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-xl flex items-center justify-center"
                      >
                        <goal.icon className="text-white" size={24} />
                      </motion.div>
                      <p className="text-2xl text-white mb-1" style={{ fontWeight: 700 }}>{goal.value}</p>
                      <p className="text-xs text-white/80">{goal.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Current Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { label: "Municipal Councils", value: "100+", color: "from-[#2563eb] to-[#4f46e5]" },
                { label: "Properties Surveyed", value: "50L+", color: "from-[#4f46e5] to-[#6366f1]" },
                { label: "Years Experience", value: "25+", color: "from-[#f59e0b] to-[#fbbf24]" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-center shadow-lg`}
                >
                  <p className="text-2xl text-white mb-1" style={{ fontWeight: 700 }}>{stat.value}</p>
                  <p className="text-xs text-white/90">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl text-[#1e3a8a] mb-3" style={{ fontWeight: 600 }}>
                Our Commitment
              </h3>
              <p className="text-[#2563eb] leading-relaxed mb-4">
                Continuous innovation in GIS-based property tax solutions, 
                ensuring efficient governance and superior service delivery 
                for urban local bodies across Maharashtra and beyond.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#f59e0b]" style={{ fontWeight: 600 }}>
                <Award size={16} />
                <span>Maharashtra's #1 Urban Governance Solutions Provider</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
