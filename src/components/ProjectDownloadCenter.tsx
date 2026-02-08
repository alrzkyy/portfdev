'use client';

import { BentoCard } from './BentoGrid';
import { Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
    name: string;
    description: string;
    badge: 'Mobile App' | 'Project' | 'Web App';
    downloadUrl: string;
}

const projects: Project[] = [
    {
        name: 'Astraplan',
        description: 'Advanced study planning and productivity app',
        badge: 'Mobile App',
        downloadUrl: 'https://sfl.gl/sOPS8Lb7', // Safelinku → Mediafire
    },
    // Add more projects here as needed
];

export default function ProjectDownloadCenter() {
    return (
        <BentoCard colSpan={1} className="h-fit">
            <div className="mb-4">
                <h3 className="text-xl font-bold gold-text-gradient mb-1">
                    Download
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                    Latest projects
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[var(--pure-black)] rounded-lg p-4 border border-[var(--border-gold)] hover:border-[var(--luxury-gold)] transition-all group"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-bold text-white">{project.name}</h4>
                            <span className="text-xs px-2 py-1 rounded-full bg-[var(--luxury-gold)]/20 text-[var(--luxury-gold)]">
                                {project.badge}
                            </span>
                        </div>

                        <p className="text-sm text-[var(--text-secondary)] mb-4">
                            {project.description}
                        </p>

                        <a
                            href={project.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg gold-gradient text-black font-semibold text-sm hover:gold-glow transition-all group-hover:scale-[1.02]"
                        >
                            <Download className="w-4 h-4" />
                            Download
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </BentoCard>
    );
}
