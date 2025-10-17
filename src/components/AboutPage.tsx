import { motion } from "motion/react";
import { Target, Award, Users, TrendingUp, Sparkles, Building2, Globe, CheckCircle, Zap } from "lucide-react";

export function AboutPage() {
    const stats = [
        { number: "100+", label: "Urban Local Bodies", icon: Building2 },
        { number: "50L+", label: "Properties", icon: Globe },
        { number: "15+", label: "Years", icon: Award },
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#4f46e5]/5 to-white pt-32 pb-8 px-4">
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
                            <h2 className="text-[#1e3a8a] mb-3 whitespace-nowrap" style={{ fontWeight: 700, fontSize: '17px' }}>
                                Struggled with purpose. Grew with passion. Delivered with excellence.
                            </h2>

                            <div className="space-y-3">
                                <p className="text-[#1e3a8a] leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif', lineHeight: '1.8' }}>
                                    What began as small municipal projects has grown into a <span style={{ fontWeight: 700, color: '#4f46e5' }}>25+ year journey</span> across Maharashtra's leading civic bodies—<span style={{ fontWeight: 600 }}>Thane, Pimpri-Chinchwad, Mira-Bhayandar, Dhule, Akola, Jalna,</span> and more. <span style={{ fontWeight: 600, color: '#2563eb' }}>Sthapatya Consultants Pvt. Ltd.</span>, powered by <span style={{ fontWeight: 700, color: '#4f46e5' }}>800+ professionals</span>, strengthens municipal governance with GIS-driven property tax surveys and intelligent platforms for water tax, trade licenses, and asset management—built on technology, transparency, and teamwork.
                                </p>

                                <p className="text-[#2563eb] leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif', lineHeight: '1.8' }}>
                                    We have surveyed <span style={{ fontWeight: 700, color: '#1e3a8a' }}>50 lakh+ properties</span> and catalyzed <span style={{ fontWeight: 700, color: '#1e3a8a' }}>?7,000+ crore in revenue</span> for ULBs, combining ground-level dedication with GIS dashboards, drone surveys, data analytics, and robust in-house software. Our legal expertise ensures every implementation is compliant, accountable, and future-ready.
                                </p>

                                <p className="text-[#1e3a8a] leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif', lineHeight: '1.8' }}>
                                    Grateful for the faith that shaped our path, we remain committed to scalable, citizen-centric solutions that deliver measurable outcomes—<span style={{ fontWeight: 600, fontStyle: 'italic', color: '#4f46e5' }}>one city at a time</span>—proud to be <span style={{ fontWeight: 700, color: '#2563eb' }}>the only company in India</span> with impact at this scale and consistency.
                                </p>

                                {/* Slogan */}
                                <div className="pt-2">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 }}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-[#4f46e5] to-[#2563eb] rounded-full" />
                                        <p className="text-[#1e3a8a] italic" style={{ fontFamily: 'Georgia, serif', fontSize: '15px', fontWeight: 600 }}>
                                            Mapping governance. Powering growth. Scaling smart decisions.
                                        </p>
                                    </motion.div>
                                </div>
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

                        {/* Our Approach - 4 Steps */}
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
                                    {
                                        step: "04",
                                        title: "Support & Scale",
                                        desc: "Long-term maintenance and expansion capabilities",
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

                {/* Integration Info & Key Achievements - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] p-8 shadow-2xl mt-8"
                >
                    {/* Animated background effects */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -90, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity }}
                        className="absolute bottom-0 left-0 w-40 h-40 bg-[#fbbf24]/10 rounded-full blur-2xl"
                    />

                    <div className="relative z-10 grid md:grid-cols-2 gap-6">
                        {/* Left: Integrated Solutions */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="text-[#fbbf24]" size={28} />
                                <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                                    Integrated Solutions
                                </h3>
                            </div>

                            <p className="text-white/95 leading-relaxed mb-4">
                                Our platform integrates seamlessly with IGR and Aaple Sarkar Portal,
                                streamlining property tax management for ULBs and citizens alike. We deliver
                                comprehensive technology solutions that transform urban governance.
                            </p>

                            <div className="flex items-center gap-2 text-sm text-[#fbbf24] bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm inline-flex" style={{ fontWeight: 600 }}>
                                <Award size={18} />
                                <span>Maharashtra's #1 Urban Governance Provider</span>
                            </div>
                        </div>

                        {/* Right: Key Achievements */}
                        <div>
                            <h3 className="text-2xl text-white mb-4" style={{ fontWeight: 700 }}>
                                Key Achievements
                            </h3>

                            <div className="grid grid-cols-2 gap-3">
                                {achievements.map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.0 + index * 0.05 }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-all"
                                    >
                                        <CheckCircle className="text-[#fbbf24] flex-shrink-0" size={18} />
                                        <span className="text-sm text-white">{achievement}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
