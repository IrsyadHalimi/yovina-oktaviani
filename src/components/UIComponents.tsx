import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
  id: string;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ title, issuer, year, icon: Icon, id }) => {
  return (
    <motion.div
      id={id}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-panel p-6 flex flex-col items-start gap-4 transition-all hover:bg-white/10 hover:border-safety-green/30 group"
    >
      <div className="p-3 bg-safety-green/10 rounded-lg group-hover:bg-safety-green/20 transition-colors">
        <Icon className="w-6 h-6 text-safety-green" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-lg text-white mb-1 group-hover:text-safety-green transition-colors uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-400 font-medium">{issuer}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-white/5 w-full flex justify-between items-center">
        <span className="text-xs font-mono text-safety-green/60">{year}</span>
        <div className="w-2 h-2 rounded-full bg-safety-green/40 animate-pulse" />
      </div>
    </motion.div>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number }) => {
  return (
    <div className="mb-12 relative">
      <span className="font-mono text-safety-green/40 text-xs mb-2 block tracking-widest">{number} // MODULE</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-4 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-safety-green mt-6" />
    </div>
  );
};
