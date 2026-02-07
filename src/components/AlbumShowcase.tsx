'use client';

import { BentoCard } from './BentoGrid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function AlbumShowcase() {
    const openPlaylist = () => {
        window.open('https://open.spotify.com/playlist/7cbHisiHJS7xxAZiOa4tuz?si=da6a969ce43f4963', '_blank');
    };

    const tracks = [
        { id: 1, title: "Sparkle - Original Version", artist: "RADWIMPS" },
        { id: 2, title: "Himawari no Yakusoku", artist: "Motohiro Hata" },
        { id: 3, title: "Suzume", artist: "RADWIMPS, Toaka" },
        { id: 4, title: "Swim", artist: "Chase Atlantic" },
        { id: 5, title: "Kokoronashi", artist: "majiko" },
    ];

    return (
        <BentoCard colSpan={2} rowSpan={2} className="relative overflow-hidden group cursor-pointer border-[var(--border-gold)] hover:border-[var(--luxury-gold)] transition-all duration-500">
            <div onClick={openPlaylist} className="absolute inset-0 z-20" />

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-bg)] via-[var(--card-bg)] to-black/80 z-0" />

            <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start gap-6 mb-6">
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border border-[var(--border-gold)] group-hover:scale-105 transition-transform duration-500">
                        <Image
                            src="https://i.scdn.co/image/ab67616d0000b273b11c3ab5cb818192b7a61fdd"
                            alt="Playlist Cover"
                            fill
                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </div>

                    <div className="flex-1 pt-2">
                        <h3 className="text-xs font-bold text-[var(--luxury-gold)] uppercase tracking-widest mb-2">
                            Featured Playlist
                        </h3>
                        <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-[var(--luxury-gold)] transition-colors">
                            eclipse
                        </h2>
                        <p className="text-sm text-[var(--text-secondary)]">
                            nvm • alrzkyy
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#1db954] animate-pulse" />
                            <span className="text-xs font-medium text-[#1db954]">Spotify</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-end gap-2">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-[var(--luxury-gold)]/10 transition-colors group/track relative z-10"
                        >
                            <div className="flex items-center gap-3 overflow-hidden">
                                <span className="text-xs font-mono text-[var(--text-secondary)] w-4 text-center group-hover/track:text-[var(--luxury-gold)]">
                                    {track.id}
                                </span>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm font-medium text-white truncate group-hover/track:text-[var(--luxury-gold)] transition-colors">
                                        {track.title}
                                    </span>
                                    <span className="text-xs text-[var(--text-secondary)] truncate">
                                        {track.artist}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
}
