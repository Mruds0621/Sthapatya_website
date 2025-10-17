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
                "We specialize in comprehensive property tax assessment using advanced technologies.",
                "Our approach includes GIS-based door-to-door surveys, drone mapping, and intelligent software tools.",
                "With 25+ years of experience in the field, we deliver reliable and data-driven results.",
                "We help municipal bodies identify and unlock hidden revenue potential.",
                "Our solutions promote tax equity and transparency across all properties.",
                "We enable citizens to be integrated into the formal taxation system, enhancing compliance and governance."
            ],
            color: "from-[#2563eb] to-[#4f46e5]",
        },
        {
            icon: Droplet,
            title: "Water Tax Management",
            shortTitle: "Water Tax",
            description: "Efficient water billing and tax collection for sustainable resource management",
            features: [
                "We provide end-to-end solutions — from field surveys to digital billing integration.",
                "Our systems help municipal councils track, monitor, and recover water usage efficiently.",
                "We use data-backed tools to enhance operational accuracy and decision-making.",
                "The solution ensures transparency in water tax collection and management.",
                "It supports early leak detection through data insights and monitoring.",
                "We help build citizen trust in water tax operations through accountability and efficiency."
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
                "End-to-end GIS solutions with base maps, ward boundaries, and utility overlays.",
                "Property mapping and urban dashboards for better planning.",
                "Drone surveys and DGPS tools ensure high data accuracy.",
                "AI-driven segmentation converts data into actionable insights.",
                "Empowers data-based urban governance and decision-making."
            ],
            color: "from-[#2563eb] to-[#0ea5e9]",
        },
        {
            icon: FileCheck,
            title: "Trade License",
            shortTitle: "Trade License",
            description: "Digital license management for business registration",
            features: [
                "QR-based registrations and renewals for trade licenses.",
                "Mobile app integration for easy access and updates.",
                "Geo-tagged verification ensures authenticity and accuracy.",
                "Smart solutions enhance revenue collection.",
                "Promote ease, transparency, and trust for local traders and industries."
            ],
            color: "from-[#4f46e5] to-[#2563eb]",
        },
        {
            icon: Package,
            title: "Asset Management",
            shortTitle: "Asset Mgmt",
            description: "Track and manage municipal infrastructure assets",
            features: [
                "Structured management of civic assets like markets, buildings, and plots.",
                "GIS-tagged inventory for accurate asset tracking.",
                "Lease and rent management modules for efficient operations.",
                "Legal integration to safeguard public properties.",
                "Helps ULBs protect, monitor, and monetize assets effectively."
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
        <div className="min-h-screen bg-gradient-to-br from-white via-[#4f46e5]/5 to-white pt-20 pb-8 px-4">
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

                    {/* Row 2: Left (All Services + Service Categories) ↔ Right (Featured Service Card) */}
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Left Column: All Services + Service Categories */}
                        <div className="space-y-8">
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
                                            className={`relative p-3 rounded-xl transition-all ${selectedService === idx
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
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
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
                                            transition={{ delay: 0.7 + index * 0.1 }}
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

                            {/* Technology Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
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
                                            transition={{ delay: 0.9 + index * 0.05 }}
                                        >
                                            <CheckCircle2 size={14} className="text-[#4f46e5]" />
                                            <span className="text-sm text-[#2563eb]">{tech}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Featured Service Card + Complete Solutions */}
                        <div className="space-y-4">
                            {/* Featured Service Card - Slightly Smaller */}
                            <motion.div
                                key={selectedService}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${services[selectedService].color} p-6 shadow-2xl`}
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
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-2 shadow-lg">
                                                {(() => {
                                                    const ServiceIconComponent = services[selectedService].icon;
                                                    return <ServiceIconComponent className="text-white" size={24} />;
                                                })()}
                                            </div>
                                            <h3 className="text-xl text-white mb-2" style={{ fontWeight: 700 }}>
                                                {services[selectedService].title}
                                            </h3>
                                            <p className="text-white/90 text-sm leading-relaxed italic">
                                                {services[selectedService].description}
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs border border-white/30">
                                            0{selectedService + 1}
                                        </span>
                                    </div>

                                    <div className="space-y-2 mt-4">
                                        <p className="text-xs text-white/90 mb-2" style={{ fontWeight: 600 }}>
                                            Key Features
                                        </p>
                                        {services[selectedService].features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-2"
                                            >
                                                <CheckCircle2 size={14} className="text-white flex-shrink-0 mt-0.5" />
                                                <span className="text-xs text-white/90 leading-relaxed">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Complete Solutions */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
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
                                                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${selectedService === index
                                                        ? "bg-gradient-to-r from-[#4f46e5]/20 to-[#6366f1]/10 border-l-4 border-[#4f46e5]"
                                                        : "hover:bg-[#4f46e5]/5"
                                                    }`}
                                            >
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedService === index
                                                        ? "bg-gradient-to-br from-[#2563eb] to-[#4f46e5]"
                                                        : "bg-[#4f46e5]/10"
                                                    }`}>
                                                    <service.icon
                                                        size={18}
                                                        className={selectedService === index ? "text-white" : "text-[#4f46e5]"}
                                                    />
                                                </div>
                                                <span className={`text-sm ${selectedService === index
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
                    </div>

                    {/* Seamless Integration - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
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

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {["IGR Portal", "Aaple Sarkar", "State Systems", "Payment Gateway"].map((platform, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-2 py-1.5 border border-white/20">
                                        <CheckCircle2 size={12} className="text-[#fbbf24] flex-shrink-0" />
                                        <span className="text-[11px] text-white">{platform}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
