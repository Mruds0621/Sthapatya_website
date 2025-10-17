import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { HomeSidebar } from "./HomeSidebar";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, TrendingUp, Building2, Users, Briefcase, Mail, Phone, Clock, Linkedin, Twitter, Globe, Home, Newspaper, FileText, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MaharashtraMapSimple } from "./MaharashtraMapSimple";
import { DistrictStatsBox } from "./DistrictStatsBox";
import { CountCard } from "./CountCard";
import { AnimatedButton } from "./AnimatedButton";
import { ServiceFlower } from "./ServiceFlower";
import {InteractiveKmlMap} from "./InteractiveKmlMap"
import { districtData } from "./districtData"
// Optimized Service Slideshow Component
function ServiceSlideshow() {
  const services = [
    {
      name: "Water Management",
      image: "/image_data/Website_Hero_Section/Water.jpg",
      direction: "right"
    },
    {
      name: "Trade License",
      image: "/image_data/Website_Hero_Section/Trade-license.jpg",
      direction: "down"
    },
    {
      name: "MPMS",
      image: "/image_data/Website_Hero_Section/MPMS.jpg",
      direction: "left"
    },
    {
      name: "Property Tax Management",
      image: "/image_data/Website_Hero_Section/property_tax.jpg",
      direction: "up"
    },
    {
      name: "Asset Management",
      image: "/image_data/Website_Hero_Section/asset.jpg",
      direction: "right"
    },
    {
      name: "Data Analysis",
      image: "/image_data/Website_Hero_Section/data_analysis.jpg",
      direction: "down"
    },
    {
      name: "Integrated Software & Mobile Apps",
      image: "/image_data/Website_Hero_Section/softwares.jpg",
      direction: "left"
    },
    {
      name: "GIS Mapping",
      image: "/image_data/Website_Hero_Section/GIS_mapping.jpg",
      direction: "up"
    },
    {
      name: "ELU-PLU City Mapping",
      image: "/image_data/Website_Hero_Section/ELU_PLU.jpg",
      direction: "right"
    },
    {
      name: "Blockchain Document management",
      image: "/image_data/Website_Hero_Section/blockchain.jpg",
      direction: "up"
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % services.length;
    const img = new Image();
    img.src = services[nextIndex].image;
  }, [currentIndex, services]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentIndex];

  const getAnimationProps = (direction: string) => {
    const animations = {
      right: {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 }
      },
      left: {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 }
      },
      up: {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 }
      },
      down: {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 }
      }
    };
    return animations[direction as keyof typeof animations] || animations.right;
  };

  const animationProps = getAnimationProps(currentService.direction);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#3C467B]">
      <motion.div
        key={currentIndex}
        initial={animationProps.initial}
        animate={animationProps.animate}
        exit={animationProps.exit}
        transition={{ 
          duration: 0.8, 
          ease: [0.4, 0, 0.2, 1]
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={currentService.image}
          alt={currentService.name}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-5 py-2 rounded-lg border border-white/30 z-20"
        >
          <p className="text-white">{currentService.name}</p>
        </motion.div>
      </motion.div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-20">
        {services.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-white' 
                : 'w-1 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
type DistrictKey = keyof typeof districtData;
// About Section Component with District Selection
function AboutSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {

  const [selectedDistrict, setSelectedDistrict] = useState<DistrictKey>("THANE");
  return (
    <section id="about" className="py-4 px-4 bg-white">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="text-4xl md:text-5xl text-[#1e3a8a] mb-2">Who We Are</h2>
            <p className="text-lg text-[#2563eb] max-w-4xl mx-auto leading-relaxed">
                          Transforming Governance Through Data, Technology & Dedication. 25 Years of Trusted Municipal Innovation. 
                          From Ground Reality to Digital Clarity."Smart Systems. Smarter Cities.”
                          Building the Future of Urban Administration.

            </p>
          </motion.div>
          
          {/* All elements in one horizontal line */}
          <div className="grid md:grid-cols-3 gap-4 items-stretch mb-3"  style={{ marginLeft: "10%", marginRight: "7%" }}>
            {/* Left: Interactive Map */}
            {/* <MaharashtraMapSimple 
              selectedDistrict={selectedDistrict}
              onDistrictClick={setSelectedDistrict}
            /> */}
            <InteractiveKmlMap
          kmlFile="/mh.kml"
          onDistrictClick={(key) => setSelectedDistrict(key as DistrictKey)}
          selectedDistrict={selectedDistrict} // optional if you want hover style by selection
          councils={[]}
           
        />
            {/* Middle: Stats Box */}
            <DistrictStatsBox selectedDistrict={selectedDistrict} />
            
            {/* Right: Count Cards - 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 content-center">
              <CountCard
                icon={Building2}
                count={100}
                suffix="+"
                label="Urban Local Bodies"
                delay={0}
              />
              <CountCard
                icon={MapPin}
                count={50}
                suffix="L+"
                label="Properties Surveyed"
                delay={0.1}
              />
              <CountCard
                icon={Award}
                count={25}
                suffix="+"
                label="Years of Excellence"
                delay={0.2}
              />
              <CountCard
                icon={Users}
                count={200}
                suffix="+"
                label="Team Members"
                delay={0.3}
              />
            </div>
          </div>

          {/* Button on the left */}
          <div className="text-left" style={{ marginLeft: "15%" }}>
            <Link to="/about">
              <AnimatedButton
                variant="secondary"
                icon={<ArrowRight size={18} />}
                className="px-6 py-3"
              >
                Learn More About Us
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const sections = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "services", name: "Services" },
    { id: "clients", name: "Clients" },
    { id: "journey", name: "Journey" },
    { id: "career", name: "Career" },
    { id: "contact", name: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      const currentSection = sectionElements.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative">
      <HomeSidebar
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Hero Section - Compact */}
      <motion.section
        id="hero"
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] animate-gradient" />
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>
        
        {/* Animated Slideshow Background */}
        <ServiceSlideshow />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 mb-3"
            >
              <p className="text-white/90">Serving Maharashtra for 25+ Years</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl text-white mb-3"
            >
              Sthapatya Consultants Pvt. Ltd.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed"
            >
              Leading Municipal Service Provider for GIS-Based Property Tax Survey & IT Solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-5 py-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/30 shadow-xl"
              >
                <p className="text-3xl text-white mb-1">100+</p>
                <p className="text-sm text-white/90">Municipal Councils</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-5 py-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/30 shadow-xl"
              >
                <p className="text-3xl text-white mb-1">8+</p>
                <p className="text-sm text-white/90">Municipal Corporations</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-5 py-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/30 shadow-xl"
              >
                <p className="text-3xl text-white mb-1">50L+</p>
                <p className="text-sm text-white/90">Properties Surveyed</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-5 py-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/30 shadow-xl"
              >
                <p className="text-3xl text-white mb-1">25+</p>
                <p className="text-sm text-white/90">Years Experience</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <AnimatedButton
                variant="primary"
                onClick={() => scrollToSection("about")}
                icon={<ArrowRight size={20} />}
              >
                Explore Our Work
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Preview */}
      <AboutSection scrollToSection={scrollToSection} />

      {/* Services Preview - Compact */}
      <section id="services" className="bg-gradient-to-b from-white to-[#4f46e5]/5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Flower Component with integrated right panel - Full width */}
          <ServiceFlower />

          <div className="text-center pb-4 px-8">
            <Link to="/services">
              <AnimatedButton
                variant="secondary"
                icon={<ArrowRight size={18} />}
                className="px-8 py-3"
              >
                Explore All Services
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Clients Section - Compact */}
      <section id="clients" className="py-4 px-4 bg-gradient-to-b from-white to-[#4f46e5]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-4">
              <h2 className="text-4xl md:text-5xl text-[#1e3a8a] mb-2" style={{ fontWeight: 700 }}>Our Clients</h2>
              
              <p className="text-lg text-[#2563eb] max-w-3xl mx-auto leading-relaxed">
                Trusted by 100+ Municipal Councils and 8+ Municipal Corporations across Maharashtra 
                for delivering excellence in property tax management and GIS-based surveying solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                { name: "Thane Municipal Corporation", abbr: "TMC", color: "#1e3a8a" },
                { name: "Panvel Municipal Corporation", abbr: "PMC", color: "#2563eb" },
                { name: "Pimpri-Chinchwad Municipal Corporation", abbr: "PCMC", color: "#4f46e5" },
                { name: "Nashik Municipal Corporation", abbr: "NMC", color: "#6366f1" },
                { name: "Nagpur Municipal Corporation", abbr: "NMC", color: "#1e3a8a" },
                { name: "Pune Municipal Corporation", abbr: "PMC", color: "#2563eb" },
                { name: "Mumbai Suburban District", abbr: "MSD", color: "#4f46e5" },
                { name: "Raigad District Council", abbr: "RDC", color: "#6366f1" }
              ].map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -8, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)" }}
                  className="p-4 bg-white border-2 border-[#4f46e5]/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[140px]"
                >
                  {/* Municipal Logo/Emblem - Smaller */}
                  <div className="mb-2 relative">
                    <svg width="55" height="55" viewBox="0 0 100 100" className="drop-shadow-lg">
                      <defs>
                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: client.color, stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.8 }} />
                        </linearGradient>
                        <filter id={`shadow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                          <feOffset dx="0" dy="2" result="offsetblur"/>
                          <feComponentTransfer>
                            <feFuncA type="linear" slope="0.3"/>
                          </feComponentTransfer>
                          <feMerge>
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Outer Circle */}
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="48" 
                        fill="none" 
                        stroke={`url(#grad-${index})`} 
                        strokeWidth="3"
                        filter={`url(#shadow-${index})`}
                      />
                      
                      {/* Inner Circle */}
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="38" 
                        fill={`url(#grad-${index})`}
                        opacity="0.15"
                      />
                      
                      {/* Municipal Building Icon */}
                      <g transform="translate(50, 50)" fill={client.color}>
                        {/* Base */}
                        <rect x="-18" y="8" width="36" height="4" rx="1" />
                        {/* Pillars */}
                        <rect x="-16" y="-4" width="6" height="12" rx="1" />
                        <rect x="-3" y="-4" width="6" height="12" rx="1" />
                        <rect x="10" y="-4" width="6" height="12" rx="1" />
                        {/* Roof */}
                        <path d="M -20 -4 L 0 -16 L 20 -4 Z" opacity="0.9" />
                        {/* Flag */}
                        <rect x="-1" y="-22" width="2" height="8" />
                        <path d="M 1 -22 L 8 -19 L 1 -16 Z" fill="#F59E0B" />
                      </g>
                      
                      {/* Decorative Stars */}
                      <g fill="#F59E0B">
                        <path d="M 50 8 L 51.5 11 L 55 11 L 52 13 L 53 16 L 50 14 L 47 16 L 48 13 L 45 11 L 48.5 11 Z" opacity="0.8" />
                      </g>
                    </svg>
                  </div>
                  
                  {/* Client Name */}
                  <p className="text-[#1e3a8a] text-xs leading-tight" style={{ fontWeight: 600 }}>
                    {client.name}
                  </p>
                  
                  {/* Abbreviation Badge */}
                  <div 
                    className="mt-2 px-2 py-1 rounded-full text-xs text-white"
                    style={{ background: `linear-gradient(135deg, ${client.color}, #F59E0B)` }}
                  >
                    {client.abbr}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Banner - Compact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] p-6 text-center shadow-2xl"
            >
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl text-white mb-2">Making a Real Impact</h3>
                <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
                  Our comprehensive IT solutions have transformed property tax collection across Maharashtra, 
                  streamlining processes for millions of citizens and helping municipalities optimize revenue
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="text-white">
                    <div className="text-3xl mb-1">₹1000+ Cr</div>
                    <div className="text-sm text-white/80">Revenue Processed</div>
                  </div>
                  <div className="text-white">
                    <div className="text-3xl mb-1">50L+</div>
                    <div className="text-sm text-white/80">Properties Digitized</div>
                  </div>
                  <div className="text-white">
                    <div className="text-3xl mb-1">100%</div>
                    <div className="text-sm text-white/80">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Preview - More Compact */}
      <section id="journey" className="py-4 px-4 bg-gradient-to-b from-white to-[#4f46e5]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#1e3a8a] mb-6 text-center">Our Journey</h2>

            <div className="relative px-4 md:px-8">
              {/* Horizontal Zigzag Path */}
              <div className="relative">
                {/* SVG Path Line */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ height: '400px' }}>
                  <motion.path
                    d="M 50 100 Q 150 50, 250 100 T 450 100 Q 550 50, 650 100 T 850 100 Q 950 50, 1050 100 T 1250 100"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>

                {/* Journey Milestones - More Compact */}
                <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-3">
                  {[
                    { year: "2000", title: "Foundation", desc: "Started with a vision to transform urban governance in Maharashtra", position: "top" },
                    { year: "2005", title: "First Success", desc: "Completed first major municipal corporation GIS survey project", position: "bottom" },
                    { year: "2010", title: "Expansion", desc: "Reached 50+ Municipal Councils across Maharashtra", position: "top" },
                    { year: "2015", title: "Innovation", desc: "Introduced comprehensive property tax management software", position: "bottom" },
                    { year: "2020", title: "Digital Growth", desc: "Launched web & mobile-based payment solutions", position: "top" },
                    { year: "2025", title: "Today", desc: "Leading provider with 100+ ULBs, 8+ Corporations and 50L+ properties surveyed", position: "bottom" },
                  ].map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: milestone.position === "top" ? -50 : 50, scale: 0.5 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        delay: index * 0.2,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100
                      }}
                      className={`flex flex-col items-center ${
                        milestone.position === "top" ? "pt-4 pb-20" : "pt-20 pb-4"
                      }`}
                    >
                      {/* Connector Line to Path */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: milestone.position === "top" ? "50px" : "50px" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                        className={`w-0.5 bg-gradient-to-b from-[#4f46e5] to-transparent ${
                          milestone.position === "top" ? "order-2 mt-2" : "order-1 mb-2"
                        }`}
                      />

                      {/* Content Card */}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`${milestone.position === "top" ? "order-1" : "order-2"} relative`}
                      >
                        {/* Circle with Year - Smaller */}
                        <motion.div
                          initial={{ rotate: -180 }}
                          whileInView={{ rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                          className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-2"
                        >
                          {/* Outer Glow Ring */}
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                            className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] rounded-full blur-md"
                          />
                          
                          {/* Main Circle */}
                          <div className="relative w-full h-full bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                            <span className="text-white text-sm md:text-base">{milestone.year}</span>
                          </div>
                        </motion.div>

                        {/* Title & Description - Smaller */}
                        <div className="text-center max-w-[160px]">
                          <h3 className="text-sm md:text-base text-[#1e3a8a] mb-1">{milestone.title}</h3>
                          <p className="text-xs text-[#2563eb]/80">{milestone.desc}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-4">
                <Link to="/journey">
                  <AnimatedButton
                    variant="secondary"
                    icon={<ArrowRight size={18} />}
                    className="px-6 py-3"
                  >
                    View Full Journey
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Preview - Compact */}
      <section id="career" className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#1e3a8a] mb-4 text-center">Join Our Team</h2>

            <div className="grid md:grid-cols-2 gap-5 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[240px] rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src="/image_data/Team_photo/team.jpg"
                  alt="Career"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-5"
              >
                <p className="text-lg text-[#2563eb]">
                  Be part of India's leading urban governance solutions provider. 
                  We're always looking for talented individuals passionate about 
                  transforming cities.
                </p>
                <div className="flex items-center gap-4">
                  <Briefcase className="text-[#4f46e5]" size={24} />
                  <p className="text-[#1e3a8a]">Multiple positions available across departments</p>
                </div>
                <Link to="/career">
                  <AnimatedButton
                    variant="secondary"
                    icon={<ArrowRight size={18} />}
                    className="mt-4 px-6 py-3"
                  >
                    View Openings
                  </AnimatedButton>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview - Compact */}
      <section id="contact" className="py-4 px-4 bg-gradient-to-b from-[#1e3a8a] to-[#4f46e5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl mb-2 text-center">Get In Touch</h2>
            <p className="text-base text-white/90 mb-4 max-w-2xl mx-auto text-center">
              Visit us at any of our office locations or reach out to discuss how we can help transform your urban governance.
            </p>

            {/* Office Cards with Circular Images - More Compact */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                 {
                  name: "Amaravati Office",
                      image: "/image_data/Our_Offices/Amravati_office.jpg",
                  address: "4, Swapnashri Colony, Siddhivinayak Nagar, Ashiyad Square,Shegaon Road, Amravati, Maharashtra, India 444604"
                },
                {
                  name: "Pune Office",
                    image: "/image_data/Our_Offices/Pune_Office.jpeg",
                    address: "303,3rd floor,18 high street,baner pashan link road,Baner, Pune, Maharashtra, India 411045"
                },
                {
                  name: "Panvel Office",
                    image: "/image_data/Our_Offices/Panvel_office.jpeg",
                  address: "Andheri East, Mumbai, Maharashtra 400069"
                },              
                {
                    name: "Thane Office",
                    image: "/image_data/Our_Offices/Thane_office.jpeg",
                    address: "1101, Lodha Supremus, Lodha Business District 2 Off Kolshet Road, Thane- West, Maharashtra, India 400607"
                }
              ].map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center"
                >
                  {/* Circular Image - Smaller */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-4 border-white shadow-xl">
                    <ImageWithFallback
                      src={office.image}
                      alt={office.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Office Name */}
                  <h3 className="text-base mb-2">{office.name}</h3>
                  
                  {/* Address - Properly Wrapped */}
                  <p className="text-xs text-white/80 text-center px-2 leading-relaxed max-w-[180px]">
                    {office.address}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Information & Quick Links - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left: Contact Info - Vertical Stack */}
                <div className="space-y-4">
                  <h3 className="text-2xl mb-2">Contact Information</h3>
                  
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70 mb-1">Email Us</p>
                      <a 
                        href="mailto:info@sthapatyaconsultants.com" 
                        className="text-white hover:text-[#f59e0b] transition-colors text-sm"
                      >
                        support@sthapatya.in
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70 mb-1">Call Us</p>
                      <a 
                          href="tel: 1800 833 2700" 
                        className="text-white hover:text-[#f59e0b] transition-colors text-sm"
                      >
                       1800 833 2700, 0721-2970300
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70 mb-1">Business Hours</p>
                      <p className="text-white text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/80 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-2xl mb-2">Quick Links</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Home, label: "About Us", to: "/about" },
                      { icon: Briefcase, label: "Services", to: "/services" },
                      { icon: FileText, label: "Projects", to: "/projects" },
                      { icon: Users, label: "Careers", to: "/career" },
                    ].map((link, idx) => (
                      <Link key={idx} to={link.to}>
                        <motion.div
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer"
                        >
                          <link.icon size={18} className="text-[#f59e0b]" />
                          <span className="text-sm">{link.label}</span>
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <p className="text-sm text-white/70 mb-2">Follow Us</p>
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.1, y: -3 }}
                        href="#"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, y: -3 }}
                        href="#"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                      >
                        <Twitter size={18} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, y: -3 }}
                        href="#"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                      >
                        <Globe size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center mt-4"
            >
              <Link to="/contact">
                <AnimatedButton
                  variant="primary"
                  icon={<Mail size={18} />}
                  className="px-8 py-3 bg-white text-[#1e3a8a] hover:bg-white/90"
                >
                  Send Us a Message
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
