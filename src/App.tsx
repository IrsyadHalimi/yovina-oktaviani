/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldPlus, 
  ShieldCheck, 
  Orbit, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  Mail, 
  Linkedin, 
  MapPin, 
  FileText,
  Menu,
  X,
  ChevronRight,
  HardHat,
  Microscope,
  Cpu
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { SpaceBackground } from './components/SpaceBackground';
import { CertificationCard, SectionHeader } from './components/UIComponents';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-safety-green selection:text-white overflow-x-hidden">
      <SpaceBackground />
      
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-space-deep/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-safety-green flex items-center justify-center rounded-sm">
              <ShieldPlus className="text-black w-6 h-6 outline-none" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tighter text-white uppercase italic">HSE</span>
              <span className="font-mono text-xs text-safety-green block -mt-1 font-bold">MANAGEMENT SYSTEMS SPECIALIST</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-mono text-slate-400 hover:text-safety-green transition-colors tracking-widest uppercase font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-space-deep/95 flex flex-col items-center justify-center gap-8 md:hidden p-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-white hover:text-safety-green"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative pt-32">
        {/* Hero Section */}
        <section id="profile" className="px-6 py-20 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-[60%]"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-12 h-[1px] bg-safety-green" />
                <span className="font-mono text-safety-green tracking-[0.3em] text-xs uppercase font-bold">Safe Operations / Cosmic Precision</span>
              </div>
              <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-green to-green-200">Resilience</span> <br />
                at Scale.
              </h1>
              <p className="text-lg md:text-xl text-slate-400 font-light mb-10 max-w-xl leading-relaxed">
                Dedicated HSE Management System Specialist with 8+ years of expertise in integrating global safety standards within complex industrial ecosystems. 
                <span className="block mt-4 text-slate-300 italic border-l-2 border-safety-green pl-4">Merging technical precision with a visionary approach to safety culture.</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-safety-green text-black font-display font-bold uppercase tracking-widest text-sm rounded-none flex items-center gap-2 group shadow-2xl shadow-safety-green/20"
                >
                  Consultation
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <div className="flex items-center gap-4 px-6 border border-white/10 glass-panel">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-space-deep flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-safety-green" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-slate-400 tracking-tighter uppercase">50+ PROJECTS AUDITED</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-[40%] relative"
            >
              <div className="absolute -inset-4 bg-safety-green/20 blur-3xl rounded-full" />
              <div className="relative z-10 glass-panel p-2 rounded-sm overflow-hidden aspect-[3/4] group">
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-space-deep to-transparent z-10" />
                <img 
                  src="/assets/img/yovina.jpeg" 
                  alt="Professional HSE Specialist" 
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-safety-green px-3 py-1 inline-block mb-2">
                    <span className="font-mono text-[10px] font-bold text-black uppercase">Yovina Oktaviani</span>
                  </div>
                  <p className="text-white font-mono text-[8px] uppercase tracking-widest opacity-60">Verified Specialist ID: HSE-0922</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 z-20">
                   <Orbit className="w-8 h-8 text-safety-green/50 animate-spin-slow" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="px-6 py-32 bg-white/[0.02] border-y border-white/5 safety-stripes">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              number="01"
              title="Technical Expertise"
              subtitle="Comprehensive management system development and implementation across multidimensional industrial landscapes."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Microscope,
                  title: "System Integration",
                  desc: "Development and migration of ISO 45001:2018 and ISO 14001:2015 frameworks with local regulatory requirements (SMK3)."
                },
                {
                  icon: Cpu,
                  title: "Digital HSE",
                  desc: "Implementation of IoT-driven safety tracking systems and digital audit visualization for real-time risk intelligence."
                },
                {
                  icon: HardHat,
                  title: "Crisis Resilience",
                  desc: "Mastering Emergency Response Preparedness (ERP) and Business Continuity Management in high-hazard environments."
                }
              ].map((skill, idx) => (
                <motion.div 
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-8 border-l-4 border-l-safety-green"
                >
                  <skill.icon className="w-10 h-10 text-safety-green mb-6" />
                  <h3 className="font-display font-bold text-xl text-white mb-4 uppercase">{skill.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="px-6 py-32 max-w-7xl mx-auto">
          <SectionHeader 
            number="02"
            title="Strategic Certifications"
            subtitle="Global credentials validating mastery in health, safety, and organizational environment systems."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificationCard 
              id="cert-1"
              title="NEBOSH IGC"
              issuer="Health and Safety at Work"
              year="2021"
              icon={Award}
            />
            <CertificationCard 
              id="cert-2"
              title="ISO 45001 Lead Auditor"
              issuer="Bureau Veritas"
              year="2020"
              icon={CheckCircle2}
            />
            <CertificationCard 
              id="cert-3"
              title="AK3 Umum"
              issuer="Kemnaker RI"
              year="2018"
              icon={ShieldCheck}
            />
            <CertificationCard 
              id="cert-4"
              title="Hazard Analysis (HIRA)"
              issuer="International Safety Board"
              year="2022"
              icon={Microscope}
            />
            <CertificationCard 
              id="cert-5"
              title="Emergency Response"
              issuer="National Safety Council"
              year="2019"
              icon={Orbit}
            />
            <CertificationCard 
              id="cert-6"
              title="Sustainable HSE"
              issuer="Green Environment Org"
              year="2023"
              icon={Sparkles}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 py-32 bg-space-deep bg-cover relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-safety-green/10 rounded-full blur-[120px] -z-10" />
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              number="03"
              title="Mission Log"
              subtitle="A journey through safety engineering and organizational transformation."
            />
            <div className="space-y-12">
              {[
                {
                  company: "PT. Global Industrial Solutions",
                  role: "Head of HSE Management System",
                  period: "2021 - PRESENT",
                  achievements: ["Successfully integrated 12 remote sites into a unified ISO 45001 framework", "Reduced incident rate by 45% through predictive behavioral safety models"]
                },
                {
                  company: "Apex Oil & Gas Exploration",
                  role: "Senior Safety Auditor",
                  period: "2018 - 2021",
                  achievements: ["Conducted 200+ internal and external compliance audits", "Implemented digital safety reporting system reducing lead time by 60%"]
                },
                {
                  company: "ConstructCo Infrastructure",
                  role: "Safety Engineering Specialist",
                  period: "2015 - 2018",
                  achievements: ["Managed ERP for high-rise projects with 1000+ personnel", "Awarded 'Safety Innovator of the Year' in 2017"]
                }
              ].map((job, idx) => (
                <motion.div 
                  key={job.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-white/5 pb-12 last:border-0"
                >
                  <div className="md:w-1/3">
                    <span className="font-mono text-safety-green text-sm font-bold block mb-2">{job.period}</span>
                    <h3 className="font-display text-2xl font-bold text-white uppercase leading-tight mb-2">{job.company}</h3>
                    <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">{job.role}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="space-y-4">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-400 font-light">
                          <ChevronRight className="w-5 h-5 text-safety-green shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-32 max-w-7xl mx-auto">
          <div className="glass-panel p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-safety-green/10 transform rotate-45 translate-x-32 -translate-y-32 transition-transform group-hover:translate-x-28 group-hover:-translate-y-28" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeader 
                  number="04"
                  title="Connect"
                  subtitle="Ready to elevate your organization's safety ecosystem to a cosmic standard."
                />
                <div className="space-y-6 mt-12">
                  <a href="mailto:oktavianiyovina@hse.systems" className="flex items-center gap-4 text-slate-300 hover:text-safety-green transition-colors group">
                    <div className="w-12 h-12 rounded-none glass-panel flex items-center justify-center group-hover:border-safety-green">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase font-bold">Signal (Email)</p>
                      <p className="font-display font-medium text-lg">sarah@hse.systems</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-slate-300 group">
                    <div className="w-12 h-12 rounded-none glass-panel flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase font-bold">Base Location</p>
                      <p className="font-display font-medium text-lg">Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    {[Linkedin, FileText].map((Icon, i) => (
                      <motion.a 
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        href="#"
                        className="w-12 h-12 glass-panel flex items-center justify-center text-slate-400 hover:text-safety-green hover:border-safety-green transition-all"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 md:p-12 border-t-4 border-t-safety-green">
                <form className="space-y-6">
                  <div>
                    <label className="block font-mono text-[10px] text-slate-500 uppercase font-bold mb-2">Identifier (Name)</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-safety-green focus:outline-none transition-colors text-white" />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-slate-500 uppercase font-bold mb-2">Contact Frequency (Email)</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-safety-green focus:outline-none transition-colors text-white" />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-slate-500 uppercase font-bold mb-2">Transmission (Message)</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 focus:border-safety-green focus:outline-none transition-colors text-white" />
                  </div>
                  <button className="w-full py-4 bg-safety-green text-black font-display font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-xl shadow-safety-green/20">
                    Send Transmission
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 grayscale opacity-50">
            <div className="w-8 h-8 bg-slate-600 flex items-center justify-center rounded-sm">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tighter text-white uppercase italic">HSE</span>
          </div>
          <p className="font-mono text-[10px] text-slate-600 tracking-widest uppercase">
            © 2026 YOVINA OKTAVIANI // COSMIC SAFETY PROTOCOL ACTIVATED
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Legal', 'Systems'].map(text => (
              <a key={text} href="#" className="font-mono text-[10px] text-slate-500 hover:text-safety-green transition-colors uppercase tracking-widest">{text}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
