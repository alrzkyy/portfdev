'use client';

import { BentoCard } from './BentoGrid';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, Music2, Disc, Star } from 'lucide-react';
import { useState } from 'react';

export default function AlbumShowcase() {
    const [isHovered, setIsHovered] = useState(false);

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

    const playlistCover = "https://i.scdn.co/image/ab67616d0000b273b11c3ab5cb818192b7a61fdd";

    return (
        <BentoCard
            colSpan={2}
            rowSpan={2}
            className="relative overflow-hidden group border-[var(--border-gold)] hover:border-[var(--luxury-gold)] transition-all duration-500 !p-0"
        >
            {/* Background Image / Ambient Blur */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={playlistCover}
                    alt="Background Blur"
                    fill
                    className="object-cover blur-[80px] opacity-20 scale-150 rotate-12"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/40 to-black/80" />
            </div>

            <div
                className="relative z-10 h-full p-8 flex flex-col cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={openPlaylist}
            >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                    {/* Vinyl Record & Sleeve Container */}
                    <div className="relative w-48 h-48 flex-shrink-0 group/cover">
                        {/* Vinyl Record */}
                        <motion.div
                            animate={{
                                x: isHovered ? 40 : 0,
                                rotate: isHovered ? 360 : 0
                            }}
                            transition={{
                                x: { duration: 0.6, ease: "easeOut" },
                                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                            }}
                            className="absolute inset-0 w-full h-full rounded-full bg-[#121212] border-2 border-[#1a1a1a] shadow-2xl z-0 overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-40 bg-[repeating-radial-gradient(circle_at_center,#000,0px,#222_1px,#000_2px)]" />
                            <div className="absolute inset-0 m-auto w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center bg-black overflow-hidden">
                                <Image
                                    src={playlistCover}
                                    alt="Vinyl Label"
                                    width={48}
                                    height={48}
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute w-1.5 h-1.5 bg-gray-900 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Sleeve / Album Art */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative z-10 w-full h-full rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--border-gold)] group-hover/cover:border-[var(--luxury-gold)] transition-colors duration-500 bg-black"
                        >
                            <Image
                                src={playlistCover}
                                alt="Playlist Cover"
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-black/60 backdrop-blur-md p-4 rounded-full border border-[var(--luxury-gold)]/30 text-[var(--luxury-gold)]">
                                    <Play fill="currentColor" className="w-6 h-6 ml-0.5" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 pt-4 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col gap-1"
                        >
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                <span className="text-[10px] font-bold text-[var(--luxury-gold)] uppercase tracking-[0.3em] px-2 py-1 bg-[var(--luxury-gold)]/10 rounded-full border border-[var(--luxury-gold)]/20">
                                    Featured Collection
                                </span>
                            </div>
                            <h2 className="text-4xl font-black text-white mb-1 group-hover:text-[var(--luxury-gold)] transition-colors tracking-tight">
                                eclipse
                            </h2>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-[var(--text-secondary)]">
                                <span>nvm</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600" />
                                <span>alrzkyy</span>
                            </div>
                            <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
                                <div className="flex items-center gap-1.5 text-xs text-[#1db954] font-bold">
                                    <Music2 className="w-3.5 h-3.5" />
                                    Spotify
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-[var(--luxury-gold)] font-bold">
                                    <Disc className="w-3.5 h-3.5 animate-spin" />
                                    Vinyl Edition
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-1.5">
                    <p className="text-[10px] font-bold text-[var(--text-secondary)]/50 uppercase tracking-[0.2em] mb-2 pl-2">
                        Top Selection
                    </p>
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[var(--luxury-gold)]/5 border border-transparent hover:border-[var(--luxury-gold)]/20 transition-all group/track relative overflow-hidden"
                        >
                            {/* Hover Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--luxury-gold)]/5 to-transparent -translate-x-full group-hover/track:animate-shimmer" />

                            <div className="flex items-center gap-4 overflow-hidden relative z-10 w-full">
                                <span className="text-[10px] font-mono text-[var(--text-secondary)] w-5 text-center group-hover/track:text-[var(--luxury-gold)] transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="flex flex-col min-w-0 flex-1">
                                    <span className="text-sm font-bold text-white truncate group-hover/track:text-[var(--luxury-gold)] transition-colors">
                                        {track.title}
                                    </span>
                                    <span className="text-xs text-[var(--text-secondary)]/60 truncate group-hover/track:text-[var(--text-secondary)] transition-colors">
                                        {track.artist}
                                    </span>
                                </div>
                                <Play className="w-3.5 h-3.5 text-[var(--luxury-gold)] opacity-0 group-hover/track:opacity-100 transition-all -translate-x-2 group-hover/track:translate-x-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,var(--luxury-gold),transparent_70%)] opacity-[0.03] pointer-events-none" />
        </BentoCard>
    );
}
