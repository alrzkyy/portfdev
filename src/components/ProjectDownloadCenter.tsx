'use client';

import { BentoCard } from './BentoGrid';
import { Download, ExternalLink, Package } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
    name: string;
    description: string;
    badge: 'Mobile App' | 'Project' | 'Web App';
    downloadUrl: string;
}

const projects: Project[] = [
    {
        name: 'FINSIGHT',
        description: 'AI-powered financial assistant for daily income and expense analysis.',
        badge: 'Mobile App',
        downloadUrl: 'https://sfl.gl/u41ih',
    },
    {
        name: 'Astraplan',
        description: 'Advanced study planning and productivity app with premium features.',
        badge: 'Mobile App',
        downloadUrl: 'https://sfl.gl/sOPS8Lb7', // Safelinku → Mediafire
    },
    // Add more projects here as needed
];

export default function ProjectDownloadCenter() {
    return (
        <BentoCard colSpan={1} className="h-full relative overflow-hidden group/center">
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                    <Package className="w-4 h-4 text-[var(--luxury-gold)]" />
                    <h3 className="text-xl font-bold gold-text-gradient">
                        Releases
                    </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)] opacity-60 uppercase tracking-widest">
                    Production Ready
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[var(--pure-black)] rounded-xl p-5 border border-[var(--border-gold)] hover:border-[var(--luxury-gold)] transition-all group relative overflow-hidden"
                    >
                        <div className="flex items-start justify-between mb-3 relative z-10">
                            <h4 className="text-lg font-bold text-white group-hover:text-[var(--luxury-gold)] transition-colors">{project.name}</h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--luxury-gold)]/10 text-[var(--luxury-gold)] border border-[var(--luxury-gold)]/20 uppercase tracking-tighter">
                                {project.badge}
                            </span>
                        </div>

                        <p className="text-xs text-[var(--text-secondary)] mb-5 opacity-70 leading-relaxed min-h-[32px] relative z-10">
                            {project.description}
                        </p>

                        <a
                            href={project.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg gold-gradient text-black font-bold text-sm hover:gold-glow transition-all active:scale-95 relative z-10"
                        >
                            <Download className="w-4 h-4" />
                            Download Build
                            <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>

                        {/* Background Decor */}
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[var(--luxury-gold)]/5 rounded-full blur-2xl group-hover:bg-[var(--luxury-gold)]/10 transition-colors" />
                    </motion.div>
                ))}
            </div>

            {/* Empty State / Bottom Text */}
            <div className="mt-6 pt-4 border-t border-[var(--border-gold)]/10">
                <p className="text-[10px] text-center text-[var(--text-secondary)] opacity-40 italic">
                    More releases coming soon...
                </p>
            </div>
        </BentoCard>
    );
}
