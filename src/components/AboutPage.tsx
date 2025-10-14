import { motion } from "motion/react";
import { Target, Award, Users, TrendingUp, Sparkles, Building2, Globe, CheckCircle, Zap } from "lucide-react";

export function AboutPage() {
  const stats = [
    { number: "100+", label: "Urban Local Bodies", icon: Building2 },
    { number: "50L+", label: "Properties", icon: Globe },
    { number: "25+", label: "Years", icon: Award },
    { number: "500+", label: "Team", icon: Users },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      desc: "Revolutionize urban governance through technology",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Highest quality services across all projects",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Partner with ULBs to solve unique challenges",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      desc: "Cutting-edge technology solutions",
    },
  ];

  const achievements = [
    "100+ ULBs delivered",
    "50L+ properties mapped",
    "GIS mapping leader",
    "Real-time systems",
    "Mobile applications",
    "Aaple Sarkar integration",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#4f46e5]/5 to-white pt-20 px-4 mt-6">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Company Info */}
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
                <Sparkles size={18} />
                <span className="text-sm" style={{ fontWeight: 600 }}>Leading Urban Governance Provider</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl text-[#1e3a8a] mb-3"
                style={{ fontWeight: 700 }}
              >
                About Us
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-[#2563eb]"
              >
                Transforming Urban India Through Technology
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
                  <p className="text-2xl text-white mb-1" style={{ fontWeight: 700 }}>{stat.number}</p>
                  <p className="text-xs text-white/90">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Story Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl text-[#1e3a8a] mb-3" style={{ fontWeight: 600 }}>
                Building Tomorrow's Cities Today
              </h2>
              
              <div className="space-y-3 text-[#2563eb]">
                <p className="text-sm leading-relaxed">
                  Sthapatya Consultants Pvt. Ltd. is one of India's leading agencies in urban 
                  property tax management, GIS-based surveys, and municipal technology solutions.
                </p>
                <p className="text-sm leading-relaxed">
                  With a proven track record across 100+ Urban Local Bodies including Thane, 
                  Panvel, and Pimpri-Chinchwad Municipal Corporations, we've become the national 
                  benchmark for quality and reliability.
                </p>
                <p className="text-sm leading-relaxed">
                  Having surveyed over 50 lakh properties, we enable municipal councils to improve 
                  tax collection efficiency and enhance urban planning through precise geospatial data.
                </p>
              </div>
            </motion.div>

            {/* Achievement Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-5 shadow-lg"
            >
              <h3 className="text-lg text-[#1e3a8a] mb-3" style={{ fontWeight: 600 }}>
                Key Achievements
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="text-[#4f46e5] flex-shrink-0" size={16} />
                    <span className="text-sm text-[#2563eb]">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Values & Approach */}
          <div className="space-y-6">
            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl text-[#1e3a8a] mb-4" style={{ fontWeight: 600 }}>
                Our Core Values
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-xl flex items-center justify-center mb-3 shadow-md"
                    >
                      <value.icon className="text-white" size={22} />
                    </motion.div>
                    <h3 className="text-base text-[#1e3a8a] mb-2" style={{ fontWeight: 600 }}>
                      {value.title}
                    </h3>
                    <p className="text-xs text-[#2563eb] leading-relaxed">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Approach - 3 Steps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl text-[#1e3a8a] mb-4" style={{ fontWeight: 600 }}>
                Our Approach
              </h2>
              
              <div className="relative space-y-3">
                {/* Vertical connection line */}
                <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#2563eb] via-[#4f46e5] to-[#6366f1]" />
                
                {[
                  {
                    step: "01",
                    title: "Assessment",
                    desc: "Comprehensive property surveys using advanced GIS",
                  },
                  {
                    step: "02",
                    title: "Implementation",
                    desc: "Technology integration with real-time systems",
                  },
                  {
                    step: "03",
                    title: "Optimization",
                    desc: "Continuous monitoring and improvement",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="relative flex items-start gap-4 pl-12 group"
                  >
                    {/* Step number dot */}
                    <div className="absolute left-0 top-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform" style={{ fontWeight: 700, fontSize: '14px' }}>
                        {item.step}
                      </div>
                    </div>

                    <div className="flex-1 bg-white border-2 border-[#4f46e5]/20 rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                      <h3 className="text-base text-[#1e3a8a] mb-1" style={{ fontWeight: 600 }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#2563eb]">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Integration Info Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] p-6 shadow-2xl mt-8"
        >
          {/* Animated background */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-[#fbbf24]" size={24} />
              <h3 className="text-lg text-white" style={{ fontWeight: 600 }}>
                Integrated Solutions
              </h3>
            </div>
            
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Our platform integrates seamlessly with IGR and Aaple Sarkar Portal, 
              streamlining property tax management for ULBs and citizens alike.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#fbbf24]" style={{ fontWeight: 600 }}>
              <Award size={14} />
              <span>Maharashtra's #1 Urban Governance Provider</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
