'use client';

import { BentoCard } from './BentoGrid';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Repository {
    name: string;
    description: string;
    stars: number;
    forks: number;
    url: string;
    language: string;
}

const fallbackRepos: Repository[] = [
    {
        name: 'alrzkyy-portf',
        description: 'Personal portf dashboard versi awal',
        stars: 12,
        forks: 3,
        url: 'https://github.com/alrzkyy/alrzkyy-portf',
        language: 'TypeScript',
    },
    {
        name: 'astraplan',
        description: 'Advanced study planning and productivity application',
        stars: 8,
        forks: 2,
        url: 'https://github.com/alrzkyy/astraplan',
        language: 'Dart',
    },
    {
        name: 'finsight',
        description: 'AI-powered financial assistant for daily income and expense analysis.',
        stars: 15,
        forks: 4,
        url: 'https://github.com/alrzkyy/finsight',
        language: 'Dart',
    },
    {
        name: 'Astranesese',
        description: 'astraanesse berkembang sebagai aplikasi yang menggunakan fitur rtv untuk pengembangan skill berbahasa jepan ( coomingsoon )',
        stars: 5,
        forks: 1,
        url: 'https://github.com/alrzkyy',
        language: 'Dart',
    },
];

export default function GitHubRepos() {
    const [repos, setRepos] = useState<Repository[]>(fallbackRepos);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Attempt to fetch real repos from GitHub API
        fetch('https://api.github.com/users/alrzkyy/repos?sort=stars&per_page=6')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    const mappedRepos = data.map((repo: any) => ({
                        name: repo.name,
                        description: repo.description || 'No description available',
                        stars: repo.stargazers_count,
                        forks: repo.forks_count,
                        url: repo.html_url,
                        language: repo.language || 'Unknown',
                    }));
                    setRepos(mappedRepos);
                }
            })
            .catch(() => {
                console.log('Using fallback repositories');
            })
            .finally(() => {
                setTimeout(() => setLoading(false), 800); // Small delay for visual effect
            });
    }, []);

    return (
        <BentoCard colSpan={1} rowSpan={2} className="relative overflow-hidden">
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                    <Github className="w-4 h-4 text-[var(--luxury-gold)]" />
                    <h3 className="text-xl font-bold gold-text-gradient">
                        Github Repository
                    </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)] opacity-60 uppercase tracking-widest">
                    Featured Repositories
                </p>
            </div>

            <div className="grid gap-3 grid-cols-1 overflow-y-auto max-h-[800px] custom-scrollbar pr-1">
                {loading ? (
                    [1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-[100px] rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
                        </div>
                    ))
                ) : (
                    repos.map((repo, index) => (
                        <motion.a
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex flex-col h-full p-4 rounded-lg bg-[var(--pure-black)] border border-[var(--border-gold)] hover:border-[var(--luxury-gold)] hover:gold-glow transition-all group relative overflow-hidden"
                        >
                            <div className="flex items-start justify-between mb-2 relative z-10">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-bold text-white group-hover:text-[var(--luxury-gold)] transition-colors truncate">
                                            {repo.name}
                                        </h4>
                                        <ExternalLink className="w-3 h-3 flex-shrink-0 text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                                    </div>
                                    <p className="text-[10px] text-[var(--text-secondary)] mt-1 line-clamp-2 min-h-[28px] opacity-70">
                                        {repo.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-2 relative z-10">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--luxury-gold)]" />
                                    <span className="text-[9px] font-medium text-[var(--text-secondary)]">
                                        {repo.language}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 ml-auto">
                                    <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                                        <Star className="w-2.5 h-2.5 group-hover:text-yellow-400 transition-colors" />
                                        <span className="text-[9px]">{repo.stars}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                                        <GitFork className="w-2.5 h-2.5 group-hover:text-[#4ADE80] transition-colors" />
                                        <span className="text-[9px]">{repo.forks}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Ambient Light */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--luxury-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    ))
                )}
            </div>
        </BentoCard>
    );
}
