'use client';

import { useLanyard } from '@/hooks/useLanyard';
import { BentoCard } from './BentoGrid';
import { Music } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LanyardSpotify() {
    const { data } = useLanyard();
    const [progress, setProgress] = useState(0);

    const spotify = data?.spotify;

    useEffect(() => {
        if (!spotify) return;

        const interval = setInterval(() => {
            const now = Date.now();
            const { start, end } = spotify.timestamps;
            const total = end - start;
            const elapsed = now - start;
            const percentage = Math.min((elapsed / total) * 100, 100);
            setProgress(percentage);
        }, 1000);

        return () => clearInterval(interval);
    }, [spotify]);

    if (!spotify) {
        return (
            <BentoCard colSpan={2} className="relative overflow-hidden group min-h-[140px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-[var(--text-secondary)] opacity-50">
                    <Music className="w-8 h-8" />
                    <p className="text-sm font-medium">Not playing anything</p>
                </div>
            </BentoCard>
        );
    }

    return (
        <BentoCard colSpan={2} className="relative overflow-hidden group !p-0 min-h-[160px]">
            {/* Blurred Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={spotify.album_art_url}
                    alt="Background"
                    fill
                    className="object-cover blur-xl opacity-30 scale-110"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 p-5 h-full flex items-center gap-5">
                {/* Vinyl Album Art */}
                <div className="relative w-24 h-24 flex-shrink-0">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full rounded-full border-2 border-[var(--border-gold)] overflow-hidden shadow-xl"
                    >
                        <Image
                            src={spotify.album_art_url}
                            alt={spotify.album}
                            fill
                            className="object-cover"
                        />
                        {/* Vinyl Center Hole */}
                        <div className="absolute inset-0 m-auto w-4 h-4 bg-[#1a1a1a] rounded-full border border-gray-700" />
                    </motion.div>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [8, 16, 8] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                                    className="w-1 bg-[#1db954] rounded-full"
                                />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-[#1db954] tracking-widest uppercase">
                            Now Playing
                        </span>
                    </div>

                    <h4 className="text-xl font-bold text-white truncate leading-tight">
                        {spotify.song}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] truncate">
                        {spotify.artist}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]/70 truncate">
                        {spotify.album}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-3 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#1db954]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Spotify Logo Watermark */}
            <div className="absolute top-3 right-3 opacity-20">
                <Music className="w-6 h-6 text-white" />
            </div>
        </BentoCard>
    );
}
