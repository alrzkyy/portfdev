'use client';

import { useLanyard } from '@/hooks/useLanyard';
import { BentoCard } from './BentoGrid';
import { Code2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LanyardCoding() {
    const { data } = useLanyard();
    const [elapsed, setElapsed] = useState<string>('00:00:00');

    // Find VS Code activity
    const activity = data?.activities?.find(
        (act) => act.name === 'Visual Studio Code' || act.application_id === '383226320970055681'
    );

    useEffect(() => {
        if (!activity?.timestamps?.start) return;

        const interval = setInterval(() => {
            const start = activity.timestamps!.start!;
            const now = Date.now();
            const diff = now - start;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setElapsed(
                `${hours.toString().padStart(2, '0')}:${minutes
                    .toString()
                    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [activity]);

    return (
        <BentoCard colSpan={2} className="relative overflow-hidden group !p-0">
            {/* VS Code Window Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-[#2d2d2d]">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-mono">
                    {activity ? 'Visual Studio Code' : 'Terminal'}
                </div>
                <div className="w-10" />
            </div>

            <div className="p-4 bg-[#1e1e1e] h-full flex flex-col justify-center min-h-[140px]">
                {activity ? (
                    <div className="font-mono text-sm">
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">1</span>
                            <span>import <span className="text-purple-400">React</span> from <span className="text-green-400">'react'</span>;</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">2</span>
                            <span></span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">3</span>
                            <span><span className="text-blue-400">const</span> <span className="text-yellow-400">Coding</span> = () ={'>'} {'{'}</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">4</span>
                            <span className="pl-4">
                                <span className="text-purple-400">project</span>: <span className="text-green-400">'{activity.state || 'Unknown'}'</span>,
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">5</span>
                            <span className="pl-4">
                                <span className="text-purple-400">file</span>: <span className="text-green-400">'{activity.details || 'No file'}'</span>,
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">6</span>
                            <span className="pl-4">
                                <span className="text-purple-400">time</span>: <span className="text-orange-400">'{elapsed}'</span>,
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">7</span>
                            <span>{'}'};</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-[var(--text-secondary)] mt-2">
                        <div className="text-6xl mb-2 opacity-20">💤</div>
                        <p className="font-mono text-sm">System.status = "Idle";</p>
                        <p className="font-mono text-xs opacity-50">// Waiting for activity...</p>
                    </div>
                )}
            </div>

            {/* Glow Effect */}
            {activity && (
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[var(--luxury-gold)]/5 to-transparent pointer-events-none animate-pulse" />
            )}
        </BentoCard>
    );
}
