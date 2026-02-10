'use client';

import Image from 'next/image';
import { useLanyard } from '@/hooks/useLanyard';
import { BentoCard } from './BentoGrid';

import { motion } from 'framer-motion';

export default function ProfileCard() {
    const { data, isLoading } = useLanyard();

    const statusColors = {
        online: '#43B581',
        idle: '#FAA61A',
        dnd: '#F04747',
        offline: '#747F8D',
    };

    const status = data?.discord_status || 'offline';
    const statusColor = statusColors[status];

    return (
        <BentoCard className="relative p-0 overflow-hidden group/profile">
            {/* Video Background / Banner */}
            <div className="relative h-24 w-full overflow-hidden">
                <video
                    src="/assets/background/bgg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover blur-[3px] opacity-40 transition-transform duration-700 group-hover/profile:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--card-bg)]" />
            </div>

            <div className="flex flex-col items-center gap-4 -mt-20 mb-4 px-6 relative z-10">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative group"
                >
                    {/* Rotating Aura Effect */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[var(--luxury-gold)] via-transparent to-[var(--luxury-gold)] opacity-40 blur-sm"
                    />

                    {/* Pulsing Outer Glow */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -inset-2 rounded-full bg-[var(--luxury-gold)]/20 blur-md"
                    />

                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--card-bg)] bg-[var(--card-bg)] p-1 transition-transform duration-300 group-hover:scale-105 shadow-2xl relative z-10"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-[var(--luxury-gold)]">
                            <Image
                                src="/assets/profile/profile.jpg"
                                alt="alrzkyy profile"
                                width={128}
                                height={128}
                                className="rounded-full object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl font-bold gold-text-gradient tracking-tight">alrzkyy</h1>

                    {/* Status Indicator */}
                    <div className={`glass-status px-4 py-1.5 rounded-full flex items-center gap-2 ${isLoading ? 'opacity-50' : ''}`}>
                        <div className="relative w-2.5 h-2.5">
                            <div
                                className="absolute inset-0 rounded-full animate-status-pulse"
                                style={{
                                    backgroundColor: statusColor,
                                    boxShadow: `0 0 10px ${statusColor}`
                                }}
                            />
                            <div
                                className="relative w-full h-full rounded-full"
                                style={{ backgroundColor: statusColor }}
                            />
                        </div>
                        <span className="text-sm font-medium text-[var(--text-secondary)]">
                            {isLoading ? 'Loading...' : (status === 'dnd' ? 'Do Not Disturb' : status === 'online' ? 'Online' : status)}
                        </span>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}
