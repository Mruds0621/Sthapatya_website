import { motion } from "motion/react";
import { 
  Building2, 
  Droplet, 
  Map, 
  BarChart3, 
  MapPin, 
  FileCheck,
  Package,
  Shield,
  Scan,
  CheckCircle2,
  Zap,
  Sparkles
} from "lucide-react";
import { useState } from "react";

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: Building2,
      title: "Property Tax Management",
      shortTitle: "Property Tax",
      description: "Comprehensive property tax assessment, collection, and revenue optimization",
      features: [
        "Property valuation & assessment",
        "Automated tax calculation",
        "Demand notice generation",
        "Revenue tracking",
        "Defaulter management"
      ],
      color: "from-[#2563eb] to-[#4f46e5]",
    },
    {
      icon: Droplet,
      title: "Water Tax Management",
      shortTitle: "Water Tax",
      description: "Efficient water billing and tax collection for sustainable resource management",
      features: [
        "Meter reading management",
        "Automated billing",
        "Consumption analytics",
        "Payment integration",
        "Supply monitoring"
      ],
      color: "from-[#0ea5e9] to-[#2563eb]",
    },
    {
      icon: Map,
      title: "ELU/PLU City Mapping",
      shortTitle: "Land Mapping",
      description: "Land Use mapping for urban planning and development",
      features: [
        "Land use classification",
        "Urban planning integration",
        "Development analysis",
        "GIS visualization",
        "Compliance tracking"
      ],
      color: "from-[#4f46e5] to-[#6366f1]",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      shortTitle: "Analytics",
      description: "Transform municipal data into actionable insights",
      features: [
        "Analytics dashboards",
        "Predictive modeling",
        "Revenue forecasting",
        "Performance metrics",
        "Custom reporting"
      ],
      color: "from-[#6366f1] to-[#8b5cf6]",
    },
    {
      icon: MapPin,
      title: "GIS Mapping",
      shortTitle: "GIS Mapping",
      description: "Advanced geospatial technology for accurate mapping",
      features: [
        "High-precision GPS",
        "Comprehensive database",
        "Real-time data collection",
        "Aerial integration",
        "Boundary digitization"
      ],
      color: "from-[#2563eb] to-[#0ea5e9]",
    },
    {
      icon: FileCheck,
      title: "Trade License",
      shortTitle: "Trade License",
      description: "Digital license management for business registration",
      features: [
        "Online application",
        "Automated workflow",
        "Renewal management",
        "Compliance monitoring",
        "Digital certificates"
      ],
      color: "from-[#4f46e5] to-[#2563eb]",
    },
    {
      icon: Package,
      title: "Asset Management",
      shortTitle: "Asset Mgmt",
      description: "Track and manage municipal infrastructure assets",
      features: [
        "Asset inventory",
        "Maintenance scheduling",
        "Depreciation tracking",
        "Condition monitoring",
        "Lifecycle analysis"
      ],
      color: "from-[#1e3a8a] to-[#2563eb]",
    },
    {
      icon: Shield,
      title: "Blockchain Documents",
      shortTitle: "Blockchain",
      description: "Secure document storage using blockchain technology",
      features: [
        "Immutable storage",
        "Digital signatures",
        "Audit trails",
        "Access control",
        "Certificate auth"
      ],
      color: "from-[#6366f1] to-[#4f46e5]",
    },
    {
      icon: Scan,
      title: "Scanning & Digitization",
      shortTitle: "Digitization",
      description: "Convert physical records into searchable digital archives",
      features: [
        "High-speed scanning",
        "OCR recognition",
        "Digital archives",
        "Metadata tagging",
        "Cloud storage"
      ],
      color: "from-[#2563eb] to-[#6366f1]",
    },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#4f46e5]/5 to-white pt-20 pb-8 px-4 mt-6">
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-8">
          {/* Row 1: Header */}
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
              <Zap size={18} />
              <span className="text-sm" style={{ fontWeight: 600 }}>Comprehensive Urban Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl text-[#1e3a8a] mb-3"
              style={{ fontWeight: 700 }}
            >
              Our Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-[#2563eb]"
            >
              Complete Suite of Urban Governance Solutions
            </motion.p>
          </motion.div>

          {/* Row 2: All Services (9) ↔ Service Categories */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Service Selector Grid - 3x3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-4 shadow-lg"
            >
              <p className="text-sm text-[#1e3a8a] mb-3" style={{ fontWeight: 600 }}>
                All Services (9)
              </p>
              <div className="grid grid-cols-3 gap-2">
                {services.map((service, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedService(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className={`relative p-3 rounded-xl transition-all ${
                      selectedService === idx
                        ? "bg-gradient-to-br from-[#2563eb] to-[#4f46e5] text-white shadow-md"
                        : "bg-[#4f46e5]/10 text-[#2563eb] hover:bg-[#4f46e5]/20"
                    }`}
                  >
                    <service.icon className="mx-auto mb-1" size={24} />
                    <p className="text-xs" style={{ fontWeight: 600 }}>
                      {service.shortTitle}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Service Categories - Point-wise */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-5 shadow-lg"
            >
              <h2 className="text-xl text-[#1e3a8a] mb-4" style={{ fontWeight: 600 }}>
                Service Categories
              </h2>
              
              <div className="space-y-3">
                {[
                  { title: "Revenue Management", services: ["Property Tax", "Water Tax"], icon: Building2, color: "#2563eb" },
                  { title: "Mapping & GIS", services: ["GIS Mapping", "Land Mapping"], icon: MapPin, color: "#4f46e5" },
                  { title: "Digital Services", services: ["Trade License", "Blockchain"], icon: Shield, color: "#6366f1" },
                  { title: "Data Analysis", services: ["Analytics", "Insights", "Reports"], icon: BarChart3, color: "#8b5cf6" },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ 
                        background: `linear-gradient(135deg, ${category.color}, ${category.color}cc)` 
                      }}
                    >
                      <category.icon size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#1e3a8a] mb-1" style={{ fontWeight: 600 }}>
                        • {category.title}
                      </p>
                      <p className="text-xs text-[#2563eb]">
                        {category.services.join(" • ")}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Row 3: Featured Service Card ↔ Complete Solutions */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Featured Service Card */}
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${services[selectedService].color} p-8 shadow-2xl`}
            >
              {/* Animated background */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      {(() => {
                        const ServiceIconComponent = services[selectedService].icon;
                        return <ServiceIconComponent className="text-white" size={28} />;
                      })()}
                    </div>
                    <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 700 }}>
                      {services[selectedService].title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {services[selectedService].description}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm border border-white/30">
                    0{selectedService + 1}
                  </span>
                </div>

                <div className="space-y-2 mt-6">
                  <p className="text-sm text-white/90 mb-3" style={{ fontWeight: 600 }}>
                    Key Features
                  </p>
                  {services[selectedService].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} className="text-white flex-shrink-0" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* All Services Compact List - Scrollable (Show 5, scroll for more) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl text-[#1e3a8a] mb-4" style={{ fontWeight: 600 }}>
                Complete Solutions
              </h2>
              
              <div className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-5 shadow-lg">
                <div className="max-h-[340px] overflow-y-auto pr-2 scrollable-clients space-y-2">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedService(index)}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                        selectedService === index
                          ? "bg-gradient-to-r from-[#4f46e5]/20 to-[#6366f1]/10 border-l-4 border-[#4f46e5]"
                          : "hover:bg-[#4f46e5]/5"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        selectedService === index 
                          ? "bg-gradient-to-br from-[#2563eb] to-[#4f46e5]"
                          : "bg-[#4f46e5]/10"
                      }`}>
                        <service.icon 
                          size={18} 
                          className={selectedService === index ? "text-white" : "text-[#4f46e5]"} 
                        />
                      </div>
                      <span className={`text-sm ${
                        selectedService === index 
                          ? "text-[#1e3a8a]" 
                          : "text-[#2563eb]"
                      }`} style={{ fontWeight: selectedService === index ? 600 : 500 }}>
                        {service.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 4: Technology Stack + Seamless Integration */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-5 shadow-lg"
            >
              <h3 className="text-lg text-[#1e3a8a] mb-3" style={{ fontWeight: 600 }}>
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Cloud Platform",
                  "Mobile Apps",
                  "Web Portal",
                  "API Integration",
                  "Real-time Data",
                  "Advanced Analytics",
                  "Secure Storage",
                  "24/7 Support",
                ].map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                  >
                    <CheckCircle2 size={14} className="text-[#4f46e5]" />
                    <span className="text-sm text-[#2563eb]">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Seamless Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] p-6 shadow-2xl"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-[#fbbf24]" size={24} />
                  <h3 className="text-lg text-white" style={{ fontWeight: 600 }}>
                    Seamless Integration
                  </h3>
                </div>
                
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  Our solutions integrate seamlessly with IGR, Aaple Sarkar Portal, 
                  and other government platforms for complete digital transformation.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["IGR Portal", "Aaple Sarkar", "State Systems", "Payment Gateway"].map((platform, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20">
                      <CheckCircle2 size={14} className="text-[#fbbf24]" />
                      <span className="text-xs text-white">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
