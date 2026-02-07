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
        <BentoCard>
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--luxury-gold)] p-1">
                        <Image
                            src="/assets/profile/profile.jpg"
                            alt="alrzkyy profile"
                            width={96}
                            height={96}
                            className="rounded-full object-cover w-full h-full"
                            priority
                        />
                    </div>
                    {/* Status Indicator */}
                    <div
                        className="absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-[var(--card-bg)]"
                        style={{ backgroundColor: statusColor }}
                    >
                        {status === 'online' && (
                            <div className="w-full h-full rounded-full animate-ping opacity-75" style={{ backgroundColor: statusColor }} />
                        )}
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl font-bold gold-text-gradient">alrzkyy</h1>
                    <p className="text-sm text-[var(--text-secondary)] capitalize mt-1">
                        {isLoading ? 'Loading...' : status}
                    </p>
                </div>
            </div>
        </BentoCard>
    );
}
