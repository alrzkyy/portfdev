'use client';

import Image from 'next/image';
import { useLanyard } from '@/hooks/useLanyard';
import { BentoCard } from './BentoGrid';

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
            {/* Background Image / Banner */}
            <div className="relative h-24 w-full overflow-hidden">
                <Image
                    src="/assets/background/bg.jpg"
                    alt="profile background"
                    fill
                    className="object-cover blur-[3px] opacity-40 transition-transform duration-700 group-hover/profile:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--card-bg)]" />
            </div>

            <div className="flex flex-col items-center gap-4 -mt-20 mb-4 px-6 relative z-10">
                <div className="relative group">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--card-bg)] bg-[var(--card-bg)] p-1 transition-transform duration-300 group-hover:scale-105 shadow-xl">
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
                    </div>
                </div>

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
