import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, TrendingUp, Heart, Award, Users, Rocket, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

export function CareerPage() {
  const [selectedPosition, setSelectedPosition] = useState(0);

  const benefits = [
    { icon: TrendingUp, title: "Growth", desc: "Career advancement" },
    { icon: Heart, title: "Balance", desc: "Flexible hours" },
    { icon: Award, title: "Recognition", desc: "Performance rewards" },
    { icon: Users, title: "Team", desc: "Great culture" },
  ];

  const positions = [
    {
      title: "GIS Specialist",
      department: "Technology",
      location: "Mumbai, Maharashtra",
      type: "Full Time",
      experience: "2-4 years",
      description: "Work on cutting-edge GIS technology and mapping solutions for urban governance",
      responsibilities: [
        "GIS mapping & analysis",
        "Spatial data management",
        "Field survey support",
        "Report generation",
      ],
    },
    {
      title: "Field Survey Executive",
      department: "Field Operations",
      location: "Multiple Locations",
      type: "Full Time",
      experience: "0-2 years",
      description: "Conduct property surveys and data collection across Urban Local Bodies",
      responsibilities: [
        "Property surveys",
        "Data collection",
        "Field reporting",
        "Quality assurance",
      ],
    },
    {
      title: "Data Analyst",
      department: "Technology",
      location: "Pune, Maharashtra",
      type: "Full Time",
      experience: "1-3 years",
      description: "Analyze municipal data and create insights for better governance",
      responsibilities: [
        "Data analysis",
        "Dashboard creation",
        "Insights generation",
        "Reporting",
      ],
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "Thane, Maharashtra",
      type: "Full Time",
      experience: "5-8 years",
      description: "Lead and manage large-scale municipal corporation projects",
      responsibilities: [
        "Project planning",
        "Team management",
        "Client coordination",
        "Delivery excellence",
      ],
    },
    {
      title: "Mobile App Developer",
      department: "Technology",
      location: "Mumbai, Maharashtra",
      type: "Full Time",
      experience: "2-5 years",
      description: "Develop innovative mobile solutions for field operations",
      responsibilities: [
        "App development",
        "UI/UX design",
        "API integration",
        "Testing & deployment",
      ],
    },
    {
      title: "Customer Support",
      department: "Support",
      location: "Nashik, Maharashtra",
      type: "Full Time",
      experience: "1-3 years",
      description: "Provide technical support to ULB clients",
      responsibilities: [
        "Client support",
        "Issue resolution",
        "Documentation",
        "Training delivery",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#4f46e5]/5 to-white pt-20 pb-8 px-4 mt-6">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Career Info */}
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
                <Rocket size={18} />
                <span className="text-sm" style={{ fontWeight: 600 }}>Join Our Growing Team</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl text-[#1e3a8a] mb-3"
                style={{ fontWeight: 700 }}
              >
                Build Your Career
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-[#2563eb]"
              >
                Be Part of India's Leading Urban Governance Provider
              </motion.p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-4 gap-3"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-2xl p-4 text-center shadow-lg"
                >
                  <benefit.icon className="text-white mx-auto mb-2" size={24} />
                  <p className="text-xs text-white mb-1" style={{ fontWeight: 600 }}>{benefit.title}</p>
                  <p className="text-xs text-white/80">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Position Selector */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-4 shadow-lg"
            >
              <p className="text-sm text-[#1e3a8a] mb-3" style={{ fontWeight: 600 }}>
                Open Positions ({positions.length})
              </p>
              <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                {positions.map((position, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedPosition(idx)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.05 }}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      selectedPosition === idx
                        ? "bg-gradient-to-r from-[#4f46e5]/20 to-[#6366f1]/10 border-l-4 border-[#4f46e5]"
                        : "hover:bg-[#4f46e5]/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="text-sm text-[#1e3a8a] mb-1" style={{ fontWeight: 600 }}>
                          {position.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-[#2563eb]">
                          <MapPin size={12} />
                          <span>{position.location}</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-[#4f46e5]/10 text-[#4f46e5] rounded-full text-xs" style={{ fontWeight: 600 }}>
                        {position.type}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quick Apply CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] p-6 shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"
              />

              <div className="relative z-10">
                <Star className="text-white mb-3" size={32} />
                <h3 className="text-xl text-white mb-2" style={{ fontWeight: 700 }}>
                  Don't See Your Role?
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Send us your resume and we'll contact you when suitable positions open.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#1e3a8a] rounded-xl shadow-lg text-sm"
                  style={{ fontWeight: 600 }}
                >
                  <span>Send Resume</span>
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Selected Position Details */}
          <div className="space-y-6">
            {/* Featured Position Card */}
            <motion.div
              key={selectedPosition}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] p-6 shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl text-white mb-1" style={{ fontWeight: 700 }}>
                      {positions[selectedPosition].title}
                    </h2>
                    <p className="text-white/90 mb-3">
                      {positions[selectedPosition].department}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                    <div className="flex items-center gap-2 mb-0.5">
                      <MapPin size={14} className="text-white/80" />
                      <p className="text-xs text-white/80">Location</p>
                    </div>
                    <p className="text-xs text-white" style={{ fontWeight: 600 }}>
                      {positions[selectedPosition].location}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                    <div className="flex items-center gap-2 mb-0.5">
                      <Clock size={14} className="text-white/80" />
                      <p className="text-xs text-white/80">Experience</p>
                    </div>
                    <p className="text-xs text-white" style={{ fontWeight: 600 }}>
                      {positions[selectedPosition].experience}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm text-white mb-2" style={{ fontWeight: 600 }}>
                    About the Role
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {positions[selectedPosition].description}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm text-white mb-2" style={{ fontWeight: 600 }}>
                    Key Responsibilities
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {positions[selectedPosition].responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full" />
                        <span className="text-xs text-white/90">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#1e3a8a] rounded-xl shadow-lg text-sm"
                  style={{ fontWeight: 600 }}
                >
                  <span>Apply for This Position</span>
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>

            {/* Why Join Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl text-[#1e3a8a] mb-4" style={{ fontWeight: 600 }}>
                Why Join Sthapatya?
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Users, text: "Work with 100+ ULBs across Maharashtra" },
                  { icon: TrendingUp, text: "Continuous learning & growth opportunities" },
                  { icon: Award, text: "Performance-based rewards & recognition" },
                  { icon: Heart, text: "Employee wellness & work-life balance" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-white" />
                    </div>
                    <p className="text-sm text-[#2563eb]">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
