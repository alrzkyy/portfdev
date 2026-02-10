'use client';

import { useState, useRef, useEffect } from 'react';
import { BentoCard } from './BentoGrid';
import { Terminal, Mail, Smartphone, Code2, Briefcase, Trophy, Globe, Cpu, Layout } from 'lucide-react';
import { siDart, siJavascript, siPython, siReact } from 'simple-icons';

interface CommandHistory {
    command: string;
    output: React.ReactNode;
}

export default function TerminalSkills() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandHistory[]>([]);
    const [isBooting, setIsBooting] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    useEffect(() => {
        const bootSequence = [
            'Initializing Alrzkyy-OS v1.0.4...',
            'Loading kernel modules...',
            'Network interface established...',
            'Welcome, guest user.',
            'Type "help" to see available commands.'
        ];

        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < bootSequence.length) {
                setHistory(prev => [...prev, { command: '', output: <span className="text-[var(--text-secondary)] opacity-70 italic">{bootSequence[currentLine]}</span> }]);
                currentLine++;
            } else {
                setIsBooting(false);
                clearInterval(interval);
            }
        }, 300);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = '';

        switch (trimmedCmd) {
            case 'help':
                output = (
                    <div className="flex flex-col gap-1 text-[var(--text-secondary)]">
                        <p className="text-white font-bold mb-1">Available System Commands:</p>
                        <div className="pl-4 grid grid-cols-[100px_1fr] gap-x-4 gap-y-1">
                            <span className="text-[var(--luxury-gold)] font-mono">about</span>
                            <span>Detailed developer dossier</span>
                            <span className="text-[var(--luxury-gold)] font-mono">projects</span>
                            <span>Explore highlighted repositories</span>
                            <span className="text-[var(--luxury-gold)] font-mono">skills</span>
                            <span>Technical proficiency analysis</span>
                            <span className="text-[var(--luxury-gold)] font-mono">stats</span>
                            <span>GitHub & activity metrics</span>
                            <span className="text-[var(--luxury-gold)] font-mono">contact</span>
                            <span>Communication channels</span>
                            <span className="text-[var(--luxury-gold)] font-mono">clear</span>
                            <span>Flush terminal buffer</span>
                        </div>
                    </div>
                );
                break;
            case 'about':
                output = (
                    <div className="flex flex-col gap-4">
                        <pre className="text-[var(--luxury-gold)] text-[10px] leading-none opacity-80">
                            {`    ___    __           __              __
   /   |  / /________  / /____  ____  __/ /_
  / /| | / / ___/_  / / //_/\ \/ / / / / __ \\
 / ___ |/ / /    / /_/ ,<    \  / /_/ / /_/ /
/_/  |_/_/_/    /___/_/|_|   /_/\__, /_.___/
                               /____/`}
                        </pre>
                        <TypewriterText
                            text={`system.getProfile("alrzkyy")

{
  "name": "Alrzkyy",
  "role": "Fullstack & Mobile Developer",
  "status": "Student / Aspiring Engineer",
  "location": "Indonesia 🇮🇩",
  "biography": "An aspiring developer with a strong passion for building clean and responsive interfaces across Web and Mobile platforms. Focused on mastering Frontend technologies while expanding into Backend and Flutter ecosystems.",
  "technical_stack": ["Dart", "Flutter", "React", "Next.js", "Python"],
  "current_focus": "Architecting scalable React applications",
  "motto": "Transforming complex problems into elegant code."
}`}
                            onComplete={() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        />
                    </div>
                );
                break;
            case 'projects':
                output = (
                    <div className="flex flex-col gap-3 my-2">
                        <p className="text-white border-b border-[var(--border-gold)] pb-1 mb-1">Highlighted Deployments:</p>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { name: 'Astraplan', stack: 'Flutter / Dart', desc: 'Productivity & Study Planning Ecosystem' },
                                { name: 'Alrzkyy-WebDev', stack: 'Next.js / TS', desc: 'Premium Dashboard WebDev' },
                                { name: 'Finsight', stack: 'Flutter / Dart', desc: 'Finsight is a daily financial application that helps to calculate expenses and income.' }
                            ].map((p, i) => (
                                <div key={i} className="flex flex-col gap-1 pl-2 border-l-2 border-[var(--luxury-gold)]">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[var(--luxury-gold)] font-bold">{p.name}</span>
                                        <span className="text-[10px] bg-[var(--luxury-gold)]/10 px-1.5 py-0.5 rounded text-[var(--luxury-gold)]">{p.stack}</span>
                                    </div>
                                    <span className="text-xs text-[var(--text-secondary)]">{p.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
                break;
            case 'skills':
                output = (
                    <div className="flex flex-col gap-3 font-mono text-sm max-w-[400px]">
                        {[
                            { name: 'Dart/Flutter', icon: siDart.path, color: '#0175C2', level: 85 },
                            { name: 'JavaScript/React', icon: siJavascript.path, color: '#F7DF1E', level: 80 },
                            { name: 'Python', icon: siPython.path, color: '#3776AB', level: 75 },
                            { name: 'UI/UX Design', icon: null, color: '#D4AF37', level: 70 },
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        {s.icon ? (
                                            <svg role="img" viewBox="0 0 24 24" className="w-3.5 h-3.5" style={{ fill: s.color }}>
                                                <path d={s.icon} />
                                            </svg>
                                        ) : <Layout className="w-3.5 h-3.5 text-[var(--luxury-gold)]" />}
                                        <span>{s.name}</span>
                                    </div>
                                    <span className="text-[var(--luxury-gold)] text-xs">{s.level}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[var(--luxury-gold)] to-yellow-200"
                                        style={{ width: `${s.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                );
                break;
            case 'stats':
                output = (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
                        <div className="p-3 rounded-lg border border-[var(--border-gold)]/20 bg-white/5 group hover:bg-[var(--luxury-gold)]/5 transition-all">
                            <div className="flex items-center gap-2 mb-1">
                                <Globe className="w-3.5 h-3.5 text-blue-400" />
                                <span className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Uptime</span>
                            </div>
                            <div className="text-lg font-bold">99.9%</div>
                        </div>
                        <div className="p-3 rounded-lg border border-[var(--border-gold)]/20 bg-white/5 group hover:bg-[var(--luxury-gold)]/5 transition-all">
                            <div className="flex items-center gap-2 mb-1">
                                <Cpu className="w-3.5 h-3.5 text-green-400" />
                                <span className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Commits</span>
                            </div>
                            <div className="text-lg font-bold">1.2k+</div>
                        </div>
                        <div className="p-3 rounded-lg border border-[var(--border-gold)]/20 bg-white/5 group hover:bg-[var(--luxury-gold)]/5 transition-all">
                            <div className="flex items-center gap-2 mb-1">
                                <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                                <span className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Level</span>
                            </div>
                            <div className="text-lg font-bold">Beginner+</div>
                        </div>
                    </div>
                );
                break;
            case 'contact':
                output = (
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-xs text-[var(--text-secondary)] mb-1">Establishing secure connection protocols...</p>
                        <div className="flex flex-wrap gap-2">
                            <a href="mailto:alrzkyy@gmail.com" className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border-gold)]/30 hover:bg-[var(--luxury-gold)]/10 transition-colors">
                                <Mail className="w-4 h-4 text-[var(--luxury-gold)]" />
                                <span className="text-sm">Email</span>
                            </a>
                            <a href="https://wa.me/2347020887193" target="_blank" className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border-gold)]/30 hover:bg-[var(--luxury-gold)]/10 transition-colors">
                                <Smartphone className="w-4 h-4 text-green-500" />
                                <span className="text-sm">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                );
                break;
            case 'clear':
                setHistory([{ command: '', output: <span className="text-[var(--text-secondary)] opacity-40 italic">Terminal buffer cleared successfully.</span> }]);
                return;
            default:
                output = <span className="text-red-500 font-bold">ERR_UNKNOWN_CMD: {trimmedCmd}</span>;
        }

        setHistory(prev => [...prev, { command: cmd, output }]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (input.trim()) {
                handleCommand(input);
            }
            setInput('');
        }
    };

    return (
        <BentoCard colSpan={2} className="min-h-[340px] flex flex-col p-0 overflow-hidden bg-[#0a0a0a] border-[var(--border-gold)] relative">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#161616] border-b border-[#2d2d2d]">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#666] font-mono tracking-widest uppercase">
                    <Terminal className="w-3 h-3" />
                    <span>system-terminal-core</span>
                </div>
                <div className="w-10" />
            </div>

            {/* Terminal Body */}
            <div
                className="flex-1 p-5 font-mono text-[13px] overflow-y-auto custom-scrollbar cursor-text relative"
                onClick={focusInput}
            >
                <div className="flex flex-col gap-3">
                    {history.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1.5 animation-fade-in">
                            {item.command && (
                                <div className="flex items-center gap-2">
                                    <span className="text-[var(--luxury-gold)]">guest@alrzkyy</span>
                                    <span className="text-white/40">:</span>
                                    <span className="text-[#4ADE80]">~</span>
                                    <span className="text-white/40">$</span>
                                    <span className="text-white">{item.command}</span>
                                </div>
                            )}
                            <div className={item.command ? "pl-4 text-gray-300" : ""}>
                                {item.output}
                            </div>
                        </div>
                    ))}
                </div>

                {!isBooting && (
                    <div className="flex items-center gap-2 mt-4">
                        <span className="text-[var(--luxury-gold)] font-bold">guest@alrzkyy</span>
                        <span className="text-white/40">:</span>
                        <span className="text-[#4ADE80]">~</span>
                        <span className="text-white/40">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0 font-mono"
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </div>
                )}
                <div ref={bottomRef} className="h-4" />
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </BentoCard>
    );
}

function TypewriterText({ text, onComplete }: { text: string; onComplete?: () => void }) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 8);
            return () => clearTimeout(timeout);
        } else {
            onComplete?.();
        }
    }, [currentIndex, text, onComplete]);

    const highlightSyntax = (content: string) => {
        const parts = content.split(/(".*?"|system\.getProfile|\(|\)|\[|\]|\{|\}|:|,)/g);

        return parts.map((part, index) => {
            if (!part) return null;

            if (part.startsWith('"')) {
                if (['"name"', '"role"', '"status"', '"location"', '"biography"', '"technical_stack"', '"current_focus"', '"contact"', '"motto"'].includes(part)) {
                    return <span key={index} className="text-blue-400">{part}</span>;
                }
                return <span key={index} className="text-[#a5d6ff]">{part}</span>;
            }
            if (part === 'system.getProfile') return <span key={index} className="text-yellow-500 font-bold">{part}</span>;
            if (['{', '}', '[', ']', '(', ')'].includes(part)) return <span key={index} className="text-gray-500">{part}</span>;
            if (part === ':') return <span key={index} className="text-gray-400">{part}</span>;

            return <span key={index} className="text-white/90">{part}</span>;
        });
    };

    return (
        <span className="text-white/90 whitespace-pre-wrap block font-mono leading-relaxed">
            {highlightSyntax(displayedText)}
            {currentIndex < text.length && <span className="inline-block w-2 h-4 bg-[var(--luxury-gold)] ml-1 animate-pulse" />}
        </span>
    );
}
