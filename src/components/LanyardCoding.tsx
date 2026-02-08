'use client';

import { useLanyard } from '@/hooks/useLanyard';
import { BentoCard } from './BentoGrid';
import { useEffect, useState, useMemo } from 'react';

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

    const lang = useMemo(() => {
        const details = activity?.details?.toLowerCase() || '';

        if (details.endsWith('.dart')) {
            return {
                name: 'Dart',
                icon: '🎯',
                template: (
                    <>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">1</span>
                            <span><span className="text-blue-400">import</span> <span className="text-green-400">'package:flutter/material.dart'</span>;</span>
                        </div>
                        <div className="flex gap-3"><span className="text-gray-600">2</span><span></span></div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">3</span>
                            <span><span className="text-blue-400">class</span> <span className="text-yellow-400">ProfileView</span> <span className="text-blue-400">extends</span> <span className="text-yellow-400">StatelessWidget</span> {'{'}</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">4</span>
                            <span className="pl-4">
                                <span className="text-purple-400">final</span> <span className="text-yellow-400">String</span> project = <span className="text-green-400">'{activity?.state || 'Unknown'}'</span>;
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">5</span>
                            <span className="pl-4">
                                <span className="text-purple-400">final</span> <span className="text-yellow-400">String</span> file = <span className="text-green-400">'{activity?.details || 'No file'}'</span>;
                            </span>
                        </div>
                        <div className="flex gap-3"><span className="text-gray-600">6</span><span></span></div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">7</span>
                            <span className="pl-4">
                                <span className="text-blue-400">@override</span>
                            </span>
                        </div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">8</span>
                            <span className="pl-4">
                                <span className="text-yellow-400">Widget</span> <span className="text-yellow-400">build</span>(<span className="text-yellow-400">BuildContext</span> context) {'{'}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">9</span>
                            <span className="pl-8">
                                <span className="text-blue-400">return</span> <span className="text-yellow-400">Text</span>(<span className="text-green-400">'Active: {elapsed}'</span>);
                            </span>
                        </div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">10</span>
                            <span className="pl-4">
                                {'}'}
                            </span>
                        </div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">11</span>
                            <span>{'}'}</span>
                        </div>
                    </>
                )
            };
        }

        if (details.endsWith('.py')) {
            return {
                name: 'Python',
                icon: '🐍',
                template: (
                    <>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">1</span>
                            <span><span className="text-purple-400">import</span> tensorflow <span className="text-purple-400">as</span> tf</span>
                        </div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">2</span>
                            <span><span className="text-purple-400">from</span> dataclasses <span className="text-purple-400">import</span> dataclass</span>
                        </div>
                        <div className="flex gap-3"><span className="text-gray-600">3</span><span></span></div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">4</span>
                            <span><span className="text-blue-400">def</span> <span className="text-yellow-400">analyze_presence</span>(data):</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">5</span>
                            <span className="pl-4">
                                project = <span className="text-green-400">'{activity?.state || 'Unknown'}'</span>
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">6</span>
                            <span className="pl-4">
                                file = <span className="text-green-400">'{activity?.details || 'No file'}'</span>
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-gray-600">7</span>
                            <span className="pl-4">
                                time = <span className="text-orange-400">'{elapsed}'</span>
                            </span>
                        </div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">8</span>
                            <span className="pl-4">
                                <span className="text-blue-400">return</span> <span className="text-yellow-400">True</span>
                            </span>
                        </div>
                        <div className="flex gap-3"><span className="text-gray-600">9</span><span></span></div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">10</span>
                            <span><span className="text-blue-400">if</span> __name__ == <span className="text-green-400">"__main__"</span>:</span>
                        </div>
                        <div className="flex gap-3 text-[var(--text-secondary)]">
                            <span className="text-gray-600">11</span>
                            <span className="pl-4">analyze_presence()</span>
                        </div>
                    </>
                )
            };
        }

        // Default: React/TSX
        return {
            name: 'React',
            icon: '⚛️',
            template: (
                <>
                    <div className="flex gap-3 text-[var(--text-secondary)]">
                        <span className="text-gray-600">1</span>
                        <span>import <span className="text-purple-400">React</span>, {'{'} useState {'}'} from <span className="text-green-400">'react'</span>;</span>
                    </div>
                    <div className="flex gap-3"><span className="text-gray-600">2</span><span></span></div>
                    <div className="flex gap-3 text-[var(--text-secondary)]">
                        <span className="text-gray-600">3</span>
                        <span><span className="text-blue-400">const</span> <span className="text-yellow-400">CodeActivity</span> = () ={'>'} {'{'}</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-gray-600">4</span>
                        <span className="pl-4">
                            <span className="text-blue-400">const</span> status = {'{'}
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-gray-600">5</span>
                        <span className="pl-8">
                            project: <span className="text-green-400">'{activity?.state || 'Unknown'}'</span>,
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-gray-600">6</span>
                        <span className="pl-8">
                            file: <span className="text-green-400">'{activity?.details || 'No file'}'</span>,
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-gray-600">7</span>
                        <span className="pl-8">
                            time: <span className="text-orange-400">'{elapsed}'</span>
                        </span>
                    </div>
                    <div className="flex gap-3 text-[var(--text-secondary)]">
                        <span className="text-gray-600">8</span>
                        <span className="pl-4">
                            {'}'};
                        </span>
                    </div>
                    <div className="flex gap-3"><span className="text-gray-600">9</span><span></span></div>
                    <div className="flex gap-3 text-[var(--text-secondary)]">
                        <span className="text-gray-600">10</span>
                        <span className="pl-4">
                            <span className="text-blue-400">return</span> (
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-gray-600">11</span>
                        <span className="pl-8">
                            {'<'}div{'>'}Active{'<'}/div{'>'}
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-gray-600">12</span>
                        <span className="pl-4">
                            );
                        </span>
                    </div>
                    <div className="flex gap-3 text-[var(--text-secondary)]">
                        <span className="text-gray-600">13</span>
                        <span>{'}'};</span>
                    </div>
                </>
            )
        };
    }, [activity, elapsed]);

    return (
        <BentoCard colSpan={2} className="relative overflow-hidden group !p-0">
            {/* VS Code Window Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-[#2d2d2d]">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-mono flex items-center gap-2">
                    {activity ? (
                        <>
                            <span>{lang.icon}</span>
                            <span>{lang.name} - Visual Studio Code</span>
                        </>
                    ) : (
                        'Terminal'
                    )}
                </div>
                <div className="w-10" />
            </div>

            <div className="p-6 bg-[#1e1e1e] h-full flex flex-col justify-center min-h-[180px]">
                {activity ? (
                    <div className="font-mono text-sm">
                        {lang.template}
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
