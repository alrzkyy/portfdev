'use client';

import { useLanyard } from '@/hooks/useLanyard';
import { BentoCard } from './BentoGrid';
import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileCode, Folder } from 'lucide-react';

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
        const state = activity?.state || 'Unknown Project';

        if (details.endsWith('.dart')) {
            return {
                name: 'Dart',
                icon: '🎯',
                color: '#0175C2',
                template: (
                    <>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">1</span><span><span className="text-blue-400">import</span> <span className="text-green-400">'package:flutter/material.dart'</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">2</span><span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">3</span><span><span className="text-blue-400">class</span> <span className="text-yellow-400">ProfileView</span> <span className="text-blue-400">extends</span> <span className="text-yellow-400">StatelessWidget</span> {'{'}</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">4</span><span className="pl-4"><span className="text-purple-400">final</span> <span className="text-yellow-400">String</span> project = <span className="text-green-400">'{state}'</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">5</span><span className="pl-4"><span className="text-purple-400">final</span> <span className="text-yellow-400">String</span> file = <span className="text-green-400">'{activity?.details || 'No file'}'</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">6</span><span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">7</span><span className="pl-4"><span className="text-blue-400">@override</span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">8</span><span className="pl-4"><span className="text-yellow-400">Widget</span> <span className="text-yellow-400">build</span>(<span className="text-yellow-400">BuildContext</span> context) {'{'}</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">9</span><span className="pl-8"><span className="text-blue-400">return</span> <span className="text-yellow-400">Text</span>(<span className="text-green-400">'Active: {elapsed}'</span>);</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">10</span><span className="pl-4">{'}'}</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">11</span><span>{'}'}</span></div>
                    </>
                )
            };
        }

        if (details.endsWith('.py')) {
            return {
                name: 'Python',
                icon: '🐍',
                color: '#3776AB',
                template: (
                    <>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">1</span><span><span className="text-purple-400">import</span> tensorflow <span className="text-purple-400">as</span> tf</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">2</span><span><span className="text-purple-400">from</span> dataclasses <span className="text-purple-400">import</span> dataclass</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">3</span><span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">4</span><span><span className="text-blue-400">def</span> <span className="text-yellow-400">analyze_presence</span>(data):</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">5</span><span className="pl-4">project = <span className="text-green-400">'{state}'</span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">6</span><span className="pl-4">file = <span className="text-green-400">'{activity?.details || 'No file'}'</span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">7</span><span className="pl-4">time = <span className="text-orange-400">'{elapsed}'</span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">8</span><span className="pl-4"><span className="text-blue-400">return</span> <span className="text-yellow-400">True</span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">9</span><span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">10</span><span><span className="text-blue-400">if</span> __name__ == <span className="text-green-400">"__main__"</span>:</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">11</span><span className="pl-4">analyze_presence()</span></div>
                    </>
                )
            };
        }

        if (details.endsWith('.ts') || details.endsWith('.tsx')) {
            return {
                name: 'TypeScript',
                icon: 'TS',
                color: '#3178C6',
                template: (
                    <>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">1</span><span><span className="text-blue-400">interface</span> <span className="text-yellow-400">Developer</span> {'{'}</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">2</span><span className="pl-4">project: <span className="text-yellow-400">string</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">3</span><span className="pl-4">status: <span className="text-green-400">'coding'</span> | <span className="text-green-400">'idle'</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">4</span><span>{'}'}</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">5</span><span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">6</span><span><span className="text-blue-400">const</span> status: <span className="text-yellow-400">Developer</span> = {'{'}</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">7</span><span className="pl-4">project: <span className="text-green-400">'{state}'</span>,</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">8</span><span className="pl-4">status: <span className="text-green-400">'coding'</span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">9</span><span>{'}'};</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">10</span><span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">11</span><span>console.<span className="text-yellow-400">log</span>(<span className="text-green-400">`Elapsed: ${'{'}{elapsed}{'}'}`</span>);</span></div>
                    </>
                )
            };
        }

        if (details.endsWith('.go')) {
            return {
                name: 'Go',
                icon: 'GO',
                color: '#00ADD8',
                template: (
                    <>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">1</span><span><span className="text-purple-400">package</span> main</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">2</span><span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">3</span><span><span className="text-purple-400">import</span> <span className="text-green-400">"fmt"</span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">4</span><span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">5</span><span><span className="text-blue-400">func</span> <span className="text-yellow-400">main</span>() {'{'}</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">6</span><span className="pl-4">project := <span className="text-green-400">"{state}"</span></span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">7</span><span className="pl-4">fmt.<span className="text-yellow-400">Printf</span>(<span className="text-green-400">"Working on %s\n"</span>, project)</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">8</span><span className="pl-4">fmt.<span className="text-yellow-400">Printf</span>(<span className="text-green-400">"Time: %s"</span>, <span className="text-green-400">"{elapsed}"</span>)</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">9</span><span>{'}'}</span></div>
                    </>
                )
            };
        }

        if (details.endsWith('.css')) {
            return {
                name: 'CSS',
                icon: '#',
                color: '#1572B6',
                template: (
                    <>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">1</span><span><span className="text-yellow-400">.developer</span> {'{'}</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">2</span><span className="pl-4"><span className="text-blue-400">project</span>: <span className="text-green-400">"{state}"</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">3</span><span className="pl-4"><span className="text-blue-400">status</span>: <span className="text-green-400">coding</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">4</span><span className="pl-4"><span className="text-blue-400">elapsed-time</span>: <span className="text-orange-400">{elapsed}</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">5</span><span className="pl-4"><span className="text-blue-400">animation</span>: <span className="text-green-400">glow 2s infinite</span>;</span></div>
                        <div className="flex gap-3"><span className="text-gray-600 w-4">6</span><span>{'}'}</span></div>
                    </>
                )
            };
        }

        // Default: React/JSX/JS
        return {
            name: details.endsWith('.js') || details.endsWith('.jsx') ? 'JavaScript' : 'React',
            icon: '⚛️',
            color: '#61DAFB',
            template: (
                <>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">1</span><span><span className="text-blue-400">const</span> <span className="text-yellow-400">CodingActivity</span> = () ={'>'} {'{'}</span></div>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">2</span><span className="pl-4"><span className="text-blue-400">const</span> current = {'{'}</span></div>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">3</span><span className="pl-8">project: <span className="text-green-400">'{state}'</span>,</span></div>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">4</span><span className="pl-8">file: <span className="text-green-400">'{activity?.details || 'No file'}'</span>,</span></div>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">5</span><span className="pl-8">time: <span className="text-orange-400">'{elapsed}'</span></span></div>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">6</span><span className="pl-4">{'}'};</span></div>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">7</span><span></span></div>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">8</span><span className="pl-4"><span className="text-blue-400">return</span> <span className="text-purple-400">current</span>;</span></div>
                    <div className="flex gap-3"><span className="text-gray-600 w-4">9</span><span>{'}'};</span></div>
                </>
            )
        };
    }, [activity, elapsed]);

    return (
        <BentoCard colSpan={2} className="relative overflow-hidden group !p-0 min-h-[220px]">
            {/* VS Code Window Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#181818] border-b border-[#2d2d2d]">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] font-medium text-[var(--text-secondary)] opacity-60">
                    <Folder className="w-3 h-3" />
                    <span>{activity?.state || 'Workspace'}</span>
                    <ChevronRight className="w-3 h-3" />
                    <FileCode className="w-3 h-3" />
                    <span className="text-white opacity-100">{activity?.details?.split('/').pop()?.split('\\').pop() || 'Untitled'}</span>
                </div>

                <div className="text-xs text-[var(--text-secondary)] font-mono flex items-center gap-2">
                    {activity ? (
                        <>
                            <span className="text-[var(--luxury-gold)] opacity-80">{lang.icon}</span>
                            <span className="hidden sm:inline">{lang.name} - VS Code</span>
                        </>
                    ) : (
                        <span className="opacity-50">Terminal</span>
                    )}
                </div>
            </div>

            <div className="p-6 bg-[#1e1e1e] h-full flex flex-col justify-center relative overflow-hidden">
                {activity ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-sm relative z-10"
                    >
                        {lang.template}
                    </motion.div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-[var(--text-secondary)] py-8">
                        <motion.div
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-6xl mb-3"
                        >
                            💤
                        </motion.div>
                        <p className="font-mono text-sm text-[var(--luxury-gold)] opacity-70">System.status = "Idle";</p>
                        <p className="font-mono text-xs opacity-40 mt-1">// Waiting for VS Code activity...</p>
                    </div>
                )}

                {/* Ambient Glow */}
                {activity && (
                    <motion.div
                        animate={{
                            opacity: [0.05, 0.1, 0.05],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at bottom right, ${lang.color}44, transparent 70%)`
                        }}
                    />
                )}
            </div>

            {/* Language Watermark */}
            {activity && (
                <div className="absolute bottom-2 right-4 text-4xl font-bold opacity-5 pointer-events-none select-none italic text-white">
                    {lang.name}
                </div>
            )}
        </BentoCard>
    );
}
