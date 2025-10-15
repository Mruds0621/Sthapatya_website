import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Building2, Droplet, Map, BarChart3, MapPin, FileCheck, Package, Shield, Scan } from "lucide-react";
import logoImage from "figma:asset/b74eab0ef35e86ffde0d926152fbed317cec38b1.png";
import measuringTapeFlower from "figma:asset/b13a83b5d029e2e2aa6a839554617f84a51050ec.png";

interface Service {
    icon: any;
    title: string;
    description: string;
    features: string[];
    color: string;
}

const services: Service[] = [
    {
        icon: Building2,
        title: "Property Tax Management",
        description: "Comprehensive property tax assessment and collection optimization for Urban Local Bodies",
        features: ["Digital Assessment", "Auto-calculation", "Online Payment", "Compliance Reports"],
        color: "#2563eb"
    },
    {
        icon: Droplet,
        title: "Water Tax Management",
        description: "Efficient water billing and tax collection system for sustainable resource management",
        features: ["Smart Metering", "Consumption Tracking", "Billing Automation", "Revenue Optimization"],
        color: "#1e3a8a"
    },
    {
        icon: Map,
        title: "ELU/PLU City Mapping",
        description: "Land use mapping for urban planning and development with GIS integration",
        features: ["Land Use Analysis", "Zoning Maps", "Planning Support", "Regulation Compliance"],
        color: "#4f46e5"
    },
    {
        icon: BarChart3,
        title: "Data Analysis",
        description: "Transform municipal data into actionable insights for better decision-making",
        features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "Performance Metrics"],
        color: "#6366f1"
    },
    {
        icon: MapPin,
        title: "GIS Mapping",
        description: "Advanced geospatial information systems for comprehensive urban mapping",
        features: ["Spatial Analysis", "3D Mapping", "Asset Tracking", "Location Intelligence"],
        color: "#2563eb"
    },
    {
        icon: FileCheck,
        title: "Trade License Management",
        description: "Digital license management system for streamlined business operations",
        features: ["Online Applications", "Automated Approvals", "Renewal Tracking", "Digital Records"],
        color: "#1e3a8a"
    },
    {
        icon: Package,
        title: "Municipal Asset Management",
        description: "Comprehensive asset tracking and optimization for municipal infrastructure",
        features: ["Asset Registry", "Maintenance Scheduling", "Lifecycle Management", "Cost Optimization"],
        color: "#4f46e5"
    },
    {
        icon: Shield,
        title: "Blockchain Document Management",
        description: "Secure, tamper-proof document storage using blockchain technology",
        features: ["Immutable Records", "Secure Storage", "Audit Trail", "Digital Verification"],
        color: "#6366f1"
    }
];

export function ServiceFlower() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [flowerRotation, setFlowerRotation] = useState(0);
    const [currentPetalIndex, setCurrentPetalIndex] = useState(0);
    const [baseRotation, setBaseRotation] = useState(0);

    const petalCount = services.length;
    const angleStep = 360 / petalCount;

    // Continuous rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setBaseRotation(prev => prev + 0.1); // Slow continuous rotation
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex items-center h-[700px]">
                {/* Left: Flower Structure - Center + Petals */}
                <div className="relative w-[1000px] h-[1000px] -ml-[500px] flex-shrink-0">

                    {/* Rotating Flower Container - Continuous Clockwise Rotation */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: baseRotation + flowerRotation }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            mass: 0.8
                        }}
                    >
                        {/* Flower Petals - Radiating outward from center - CLOCKWISE ROTATION */}
                        {services.map((service, index) => {
                            // Start from top (270° = 12 o'clock) and rotate clockwise
                            // Each petal rotates by angleStep (45°) in clockwise direction
                            const angle = 270 + (angleStep * index);
                            const Icon = service.icon;
                            const isSelected = selectedService?.title === service.title;
                            const isHovered = hoveredIndex === index;

                            // Handle click to rotate flower and center this petal
                            const handlePetalClick = () => {
                                setSelectedService(service);

                                // Calculate how many steps clockwise from current position to target
                                let stepsToRotate = index - currentPetalIndex;
                                if (stepsToRotate < 0) {
                                    stepsToRotate += petalCount; // Wrap around to make it clockwise
                                }

                                // Add to current rotation (always clockwise)
                                const rotationIncrement = angleStep * stepsToRotate;
                                setFlowerRotation(prev => prev + rotationIncrement);
                                setCurrentPetalIndex(index);
                            };

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 cursor-pointer"
                                    style={{
                                        transformOrigin: 'center',
                                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                                        zIndex: isSelected || isHovered ? 50 : 30,
                                    }}
                                >
                                    {/* Petal - Ellipse/Oval shape radiating from center */}
                                    <motion.div
                                        className="relative"
                                        style={{
                                            width: '220px',
                                            height: '140px',
                                            marginTop: '-360px', // Position petal away from center - adjusted for larger center
                                        }}
                                        whileHover={{
                                            scale: 1.12,
                                            marginTop: '-380px',
                                        }}
                                        animate={{
                                            scale: isSelected ? 1.08 : 1,
                                            marginTop: isSelected ? '-375px' : '-360px',
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25
                                        }}
                                        onClick={handlePetalClick}
                                        onHoverStart={() => setHoveredIndex(index)}
                                        onHoverEnd={() => setHoveredIndex(null)}
                                    >
                                        {/* Counter-rotate content to keep it upright - also counter the flower rotation */}
                                        <div
                                            style={{
                                                transform: `rotate(${-angle - baseRotation - flowerRotation}deg)`,
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        >
                                            {/* Glow effect */}
                                            <motion.div
                                                className="absolute -inset-6 rounded-full blur-2xl"
                                                animate={{
                                                    opacity: isSelected || isHovered ? 0.5 : 0,
                                                }}
                                                style={{
                                                    background: `radial-gradient(ellipse, ${service.color}, transparent)`,
                                                }}
                                            />

                                            {/* Petal SVG - Beautiful flower petal shape */}
                                            <svg
                                                width="220"
                                                height="140"
                                                viewBox="0 0 220 140"
                                                className="absolute inset-0"
                                                style={{
                                                    filter: isSelected || isHovered
                                                        ? `drop-shadow(0 15px 35px ${service.color}80)`
                                                        : 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.25))',
                                                }}
                                            >
                                                <defs>
                                                    {/* Gradient for petal */}
                                                    <radialGradient id={`petalGrad${index}`} cx="50%" cy="50%">
                                                        <stop offset="0%" style={{ stopColor: service.color, stopOpacity: 1 }} />
                                                        <stop offset="70%" style={{ stopColor: service.color, stopOpacity: 0.95 }} />
                                                        <stop offset="100%" style={{ stopColor: service.color, stopOpacity: 0.85 }} />
                                                    </radialGradient>

                                                    {/* Shine gradient */}
                                                    <radialGradient id={`petalShine${index}`} cx="30%" cy="30%">
                                                        <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.5 }} />
                                                        <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 0.2 }} />
                                                        <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                                                    </radialGradient>

                                                    {/* Border gradient */}
                                                    <linearGradient id={`borderGrad${index}`}>
                                                        <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 0.8 }} />
                                                        <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.4 }} />
                                                    </linearGradient>
                                                </defs>

                                                {/* Petal shape - Rounded oval/ellipse */}
                                                <ellipse
                                                    cx="110"
                                                    cy="70"
                                                    rx="105"
                                                    ry="65"
                                                    fill={`url(#petalGrad${index})`}
                                                    stroke={isSelected ? '#F59E0B' : 'rgba(255, 255, 255, 0.3)'}
                                                    strokeWidth={isSelected ? '4' : '2'}
                                                />

                                                {/* Shine overlay */}
                                                <ellipse
                                                    cx="110"
                                                    cy="70"
                                                    rx="105"
                                                    ry="65"
                                                    fill={`url(#petalShine${index})`}
                                                />

                                                {/* Center vein line */}
                                                <line
                                                    x1="110"
                                                    y1="10"
                                                    x2="110"
                                                    y2="130"
                                                    stroke="rgba(255, 255, 255, 0.2)"
                                                    strokeWidth="2"
                                                />
                                            </svg>

                                            {/* Content on petal */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
                                                {/* Icon */}
                                                <motion.div
                                                    className="mb-2"
                                                    whileHover={{ rotate: 360, scale: 1.15 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <Icon size={44} className="drop-shadow-lg" strokeWidth={2.5} />
                                                </motion.div>

                                                {/* Service Title */}
                                                <h4
                                                    className="text-sm leading-tight drop-shadow-lg text-center px-4 max-w-[180px]"
                                                    style={{ fontWeight: 600 }}
                                                >
                                                    {service.title}
                                                </h4>

                                                {/* Hover indicator */}
                                                <motion.div
                                                    className="mt-1 text-xs"
                                                    animate={{
                                                        opacity: isHovered ? 1 : 0,
                                                    }}
                                                >
                                                    ✦
                                                </motion.div>
                                            </div>

                                            {/* Selection pulse effect */}
                                            {isSelected && (
                                                <svg
                                                    width="220"
                                                    height="140"
                                                    viewBox="0 0 220 140"
                                                    className="absolute inset-0 pointer-events-none"
                                                >
                                                    <motion.ellipse
                                                        cx="110"
                                                        cy="70"
                                                        rx="105"
                                                        ry="65"
                                                        fill="none"
                                                        stroke="#F59E0B"
                                                        strokeWidth="5"
                                                        animate={{
                                                            opacity: [0.4, 0.8, 0.4],
                                                            strokeWidth: [4, 6, 4],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Flower Center - Round circle at the center - SIMPLIFIED */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center overflow-visible z-60"
                        style={{
                            width: '200px',
                            height: '200px',
                            boxShadow: '0 10px 40px rgba(37, 99, 235, 0.3)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Continuously Rotating Measuring Tape Flower - ENLARGED */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                            <img
                                src={measuringTapeFlower}
                                alt="Measuring Tape Flower"
                                className="animate-smooth-rotate"
                                style={{
                                    width: '200%',
                                    height: '200%',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>

                        {/* Sthapatya Logo - Static in Center - SMALLER */}
                        <div className="relative z-10 w-[60%] h-[60%] flex items-center justify-center">
                            <img
                                src={logoImage}
                                alt="Sthapatya Consultants"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Background decorative glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, #4f46e5, transparent 70%)',
                        }}
                    />
                </div>

                {/* Right: Service Information Panel */}
                <motion.div
                    key={selectedService?.title || 'overview'}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1 pl-12 pr-8 py-8"
                >
                    {selectedService ? (
                        <>
                            {/* Service Details */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-5">
                                    <motion.div
                                        className="p-5 rounded-2xl"
                                        style={{
                                            background: `linear-gradient(135deg, ${selectedService.color}30, ${selectedService.color}15)`,
                                            border: `3px solid ${selectedService.color}40`,
                                        }}
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                    >
                                        <selectedService.icon
                                            size={52}
                                            style={{ color: selectedService.color }}
                                            strokeWidth={2}
                                        />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl text-[#1e3a8a] mb-2" style={{ fontWeight: 600 }}>
                                            {selectedService.title}
                                        </h3>
                                        <div
                                            className="h-1.5 w-24 rounded-full"
                                            style={{
                                                background: `linear-gradient(90deg, ${selectedService.color}, #F59E0B)`
                                            }}
                                        />
                                    </div>
                                </div>

                                <p className="text-lg text-[#2563eb] leading-relaxed">
                                    {selectedService.description}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="space-y-4 mt-8">
                                <h4 className="text-xl text-[#1e3a8a]" style={{ fontWeight: 600 }}>
                                    Key Features
                                </h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {selectedService.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                            whileHover={{ x: 10, scale: 1.02 }}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all max-w-lg"
                                            style={{
                                                borderLeft: `4px solid ${selectedService.color}`,
                                                border: '2px solid #4f46e520',
                                            }}
                                        >
                                            <div
                                                className="w-4 h-4 rounded-full flex-shrink-0 shadow-md"
                                                style={{
                                                    background: `linear-gradient(135deg, ${selectedService.color}, #F59E0B)`
                                                }}
                                            />
                                            <span className="text-[#2563eb] text-base">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Back button */}
                            <motion.button
                                onClick={() => setSelectedService(null)}
                                className="mt-8 px-8 py-4 rounded-2xl text-white transition-all shadow-lg"
                                style={{
                                    background: `linear-gradient(135deg, ${selectedService.color}, #F59E0B)`
                                }}
                                whileHover={{ scale: 1.05, x: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ← Back to all services
                            </motion.button>
                        </>
                    ) : (
                        <>
                            {/* Default Overview */}
                            <div className="space-y-4">
                                <h3 className="text-3xl text-[#1e3a8a]" style={{ fontWeight: 600 }}>
                                    Our Comprehensive Services
                                </h3>
                                <p className="text-lg text-[#2563eb] leading-relaxed">
                                    We have developed a comprehensive Software System Mainframe for Property Tax that includes
                                    web-based applications to establish data for Property Tax Survey, Assessment, and Collection.
                                    Our solutions support E-payment, counter-based CFC payment, and Door-to-door Mobile/POS based payments.
                                </p>
                            </div>

                            {/* All Service Names - Simple List */}
                            <div className="mt-6">
                                <ul className="space-y-2">
                                    {services.map((service, index) => {
                                        const Icon = service.icon;
                                        return (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + index * 0.05 }}
                                                className="flex items-center gap-2 text-[#2563eb] hover:text-[#1e3a8a] transition-colors"
                                            >
                                                <Icon size={16} style={{ color: service.color }} strokeWidth={2} className="flex-shrink-0" />
                                                <span>{service.title}</span>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Instruction */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8 p-6 rounded-2xl shadow-lg"
                                style={{
                                    background: 'linear-gradient(135deg, #1e3a8a15, #4f46e515)',
                                    border: '2px solid #F59E0B40',
                                }}
                            >
                                <p className="text-base text-[#1e3a8a] text-center" style={{ fontWeight: 500 }}>
                                    🌸 Click on any petal to explore our services in detail
                                </p>
                            </motion.div>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
