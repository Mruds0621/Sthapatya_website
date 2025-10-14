import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building2, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@sthapatyaconsultants.com",
      link: "mailto:info@sthapatyaconsultants.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 (022) 1234-5678",
      link: "tel:+910221234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mumbai, Maharashtra",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 9AM-6PM",
      link: "#",
    },
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "Headquarters, Mumbai, Maharashtra",
      phone: "+91 (022) 1234-5678",
    },
    {
      city: "Thane",
      address: "Regional Office, Thane, Maharashtra",
      phone: "+91 (022) 2345-6789",
    },
    {
      city: "Pune",
      address: "Branch Office, Pune, Maharashtra",
      phone: "+91 (020) 3456-7890",
    },
    {
      city: "Amravati",
      address: "Branch Office, Amravati, Maharashtra",
      phone: "+91 (0721) 4567-8901",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#4f46e5]/5 to-white pt-20 pb-8 px-4 mt-6">
      <div className="max-w-7xl w-full mx-auto space-y-8">
        
        {/* Top Row: Get In Touch (Left) + Our Offices (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Get In Touch Header + Contact Info Cards */}
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
                <MessageSquare size={18} />
                <span className="text-sm" style={{ fontWeight: 600 }}>Let's Connect</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl text-[#1e3a8a] mb-3"
                style={{ fontWeight: 700 }}
              >
                Get In Touch
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-[#2563eb]"
              >
                Ready to Transform Your ULB? We're Here to Help
              </motion.p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-2xl p-4 text-center shadow-lg"
                >
                  <info.icon className="text-white mx-auto mb-2" size={24} />
                  <p className="text-xs text-white/90 mb-1">{info.title}</p>
                  <p className="text-xs text-white" style={{ fontWeight: 600 }}>{info.content}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Our Offices */}
          <div className="space-y-6">
            {/* Our Offices Header */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl text-[#1e3a8a] mb-4" style={{ fontWeight: 600 }}>
                Our Offices
              </h2>
              <p className="text-[#2563eb]">
                Visit us at any of our locations across Maharashtra
              </p>
            </motion.div>

            {/* Office Cards - 2 per row */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Building2 className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#1e3a8a] mb-2" style={{ fontWeight: 600 }}>
                        {office.city}
                      </h3>
                      <div className="space-y-1.5">
                        <div className="flex items-start gap-2">
                          <MapPin size={14} className="text-[#4f46e5] mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-[#2563eb]">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} className="text-[#4f46e5] flex-shrink-0" />
                          <span className="text-xs text-[#2563eb]">{office.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Row: Send Us a Message Form (Left) + Let's Work Together + Trust Badge (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white border-2 border-[#4f46e5]/20 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-xl text-[#1e3a8a] mb-4" style={{ fontWeight: 600 }}>
              Send Us a Message
            </h2>
            <p className="text-sm text-[#2563eb] mb-5">
              Fill out the form and we'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#1e3a8a] mb-2" style={{ fontWeight: 600 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-[#4f46e5]/20 rounded-xl focus:border-[#4f46e5] focus:outline-none transition-all bg-white text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-[#1e3a8a] mb-2" style={{ fontWeight: 600 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-[#4f46e5]/20 rounded-xl focus:border-[#4f46e5] focus:outline-none transition-all bg-white text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-[#1e3a8a] mb-2" style={{ fontWeight: 600 }}>
                  Organization
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-[#4f46e5]/20 rounded-xl focus:border-[#4f46e5] focus:outline-none transition-all bg-white text-sm"
                  placeholder="Your Organization"
                />
              </div>

              <div>
                <label className="block text-sm text-[#1e3a8a] mb-2" style={{ fontWeight: 600 }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-[#4f46e5]/20 rounded-xl focus:border-[#4f46e5] focus:outline-none transition-all bg-white resize-none text-sm"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-white rounded-xl shadow-lg"
                style={{ fontWeight: 600 }}
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Let's Work Together + Trust Badge */}
          <div className="space-y-6">
            {/* Let's Work Together + Quick Contact Info - Merged */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] p-6 shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              />

              <div className="relative z-10">
                <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 700 }}>
                  Let's Work Together
                </h3>
                
                <p className="text-white/90 mb-5 leading-relaxed">
                  Join 100+ Urban Local Bodies that trust us for property tax management 
                  and governance solutions.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#1e3a8a] rounded-xl shadow-lg text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    <Phone size={16} />
                    <span>Call Us</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl shadow-lg text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    <Mail size={16} />
                    <span>Email Us</span>
                  </motion.button>
                </div>

                {/* Quick Contact Info Section */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <h4 className="text-white mb-3" style={{ fontWeight: 600 }}>
                    Quick Contact Info
                  </h4>
                  <div className="space-y-2">
                    {[
                      { label: "Response Time", value: "Within 24 hours" },
                      { label: "Support", value: "Mon-Sat, 9AM-6PM" },
                      { label: "Languages", value: "English, Hindi, Marathi" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-white/20 last:border-0">
                        <span className="text-sm text-white/80">{item.label}</span>
                        <span className="text-sm text-white" style={{ fontWeight: 600 }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Badge - Standalone Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] p-5 shadow-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-white" size={28} />
                  <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>
                    Trusted by 100+ ULBs
                  </h3>
                </div>
                <p className="text-white/90 text-sm">
                  Join Maharashtra's leading municipal corporations who trust Sthapatya Consultants.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
