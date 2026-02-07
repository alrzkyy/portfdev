'use client';

import { BentoCard } from './BentoGrid';
import { Star, GitFork, ExternalLink } from 'lucide-react';
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
        url: 'https://github.com/alrzkyy',
        language: 'TypeScript',
    },
    {
        name: 'astraplan',
        description: 'Advanced study planning and productivity application',
        stars: 8,
        forks: 2,
        url: 'https://github.com/alrzkyy',
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
        fetch('https://api.github.com/users/alrzkyy/repos?sort=stars&per_page=3')
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
                // Use fallback repos on error
                console.log('Using fallback repositories');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <BentoCard colSpan={2}>
            <div className="mb-4">
                <h3 className="text-xl font-bold gold-text-gradient mb-1">
                    GitHub Repositories
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                    Top projects and contributions
                </p>
            </div>

            <div className={`grid gap-4 ${repos.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                {repos.map((repo, index) => (
                    <motion.a
                        key={repo.name}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col h-full p-4 rounded-lg bg-[var(--pure-black)] border border-[var(--border-gold)] hover:border-[var(--luxury-gold)] hover:gold-glow transition-all group"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-lg font-bold text-white group-hover:text-[var(--luxury-gold)] transition-colors truncate">
                                        {repo.name}
                                    </h4>
                                    <ExternalLink className="w-4 h-4 flex-shrink-0 text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-2 min-h-[40px]">
                                    {repo.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <span className="text-xs px-2 py-1 rounded-full bg-[var(--luxury-gold)]/10 text-[var(--luxury-gold)]">
                                {repo.language}
                            </span>
                            <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                                <Star className="w-3.5 h-3.5" />
                                <span className="text-xs">{repo.stars}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                                <GitFork className="w-3.5 h-3.5" />
                                <span className="text-xs">{repo.forks}</span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </BentoCard>
    );
}
