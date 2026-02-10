'use client';

import { BentoCard } from './BentoGrid';
import { siInstagram, siFacebook, siGithub, siDiscord, siTelegram, siMyanimelist } from 'simple-icons';
import { motion } from 'framer-motion';

interface SocialLink {
    name: string;
    url: string;
    icon: string;
    color: string;
}

const socialLinks: SocialLink[] = [
    {
        name: 'Instagram',
        url: 'https://instagram.com/alrzkyy11_',
        icon: siInstagram.path,
        color: '#E4405F',
    },
    {
        name: 'Telegram',
        url: 'https://t.me/alkermann',
        icon: siTelegram.path,
        color: '#26A5E4',
    },
    {
        name: 'Facebook',
        url: 'https://web.facebook.com/ryuu.v23/',
        icon: siFacebook.path,
        color: '#1877F2',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/alrzkyy',
        icon: siGithub.path,
        color: '#FFFFFF',
    },
    {
        name: 'Discord',
        url: 'https://discord.com/users/1263675928085659774',
        icon: siDiscord.path,
        color: '#5865F2',
    },
    {
        name: 'MyAnimeList',
        url: 'https://myanimelist.net/profile/alrzkyy',
        icon: siMyanimelist.path,
        color: '#2E51A2',
    },
];

export default function QuickLinks() {
    return (
        <BentoCard className="flex flex-col">
            <h3 className="text-xs font-bold text-[var(--text-secondary)] opacity-50 mb-6 uppercase tracking-[0.2em]">
                Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4 flex-1">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-[var(--pure-black)] border border-[var(--border-gold)] hover:border-[var(--luxury-gold)] hover:gold-glow transition-all group relative overflow-hidden"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                            style={{ fill: 'var(--luxury-gold)' }}
                        >
                            <path d={link.icon} />
                        </svg>
                        <span className="text-[10px] font-bold text-[var(--text-secondary)] group-hover:text-[var(--luxury-gold)] transition-colors uppercase tracking-widest">
                            {link.name}
                        </span>

                        {/* Subtle background glow on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                            style={{ background: `radial-gradient(circle at center, ${link.color}, transparent 70%)` }}
                        />
                    </motion.a>
                ))}
            </div>
        </BentoCard>
    );
}
