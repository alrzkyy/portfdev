'use client';

import { useState, useRef, useEffect } from 'react';
import { BentoCard } from './BentoGrid';
import { Terminal, Mail, Smartphone, Code2, Briefcase, Trophy } from 'lucide-react';
import { siDart, siJavascript, siPython, siReact } from 'simple-icons';

interface CommandHistory {
    command: string;
    output: React.ReactNode;
}

export default function TerminalSkills() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandHistory[]>([
        { command: 'help', output: 'Type "help" to see available commands.' }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

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
                        <p>Available commands:</p>
                        <div className="pl-4 grid grid-cols-[100px_1fr] gap-2">
                            <span className="text-[var(--luxury-gold)]">about</span>
                            <span>About me (interactive)</span>
                            <span className="text-[var(--luxury-gold)]">role</span>
                            <span>View current role</span>
                            <span className="text-[var(--luxury-gold)]">skills</span>
                            <span>View technical skills</span>
                            <span className="text-[var(--luxury-gold)]">stats</span>
                            <span>View github stats</span>
                            <span className="text-[var(--luxury-gold)]">contact</span>
                            <span>View contact info</span>
                            <span className="text-[var(--luxury-gold)]">clear</span>
                            <span>Clear terminal</span>
                        </div>
                    </div>
                );
                break;
            case 'about':
                const aboutText = `system.getProfile("alrzkyy")

{
  "name": "Alrzkyy",
  "role": "Frontend/Backend and Mobileapp beginner",
  "status": "Student",
  "location": "Indonesia",
  "biography": "An aspiring developer with a strong passion for building clean and responsive interfaces across Web and Mobile platforms. Currently in the process of mastering Frontend technologies while actively exploring the fundamentals of Backend and Mobile App development, I combine foundational knowledge with a dedicated learning approach to deliver functional digital experiences.",
  "technical_stack": [
    "JavaScript (ES6+)", 
    "Flutter", 
    "React Framework", 
    "Python"
  ],
  "current_focus": "Deepening knowledge in React.js and Frontend Architecture",
  "contact": "Available via GitHub or Email for communicate"
}`;
                output = (
                    <TypewriterText
                        text={aboutText}
                        onComplete={() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    />
                );
                break;
            case 'role':
                output = (
                    <div className="my-2 p-3 rounded-lg border border-[var(--border-gold)]/30 bg-[var(--pure-black)]/30 backdrop-blur-sm w-fit group hover:border-[var(--luxury-gold)] transition-all">
                        <div className="flex items-center gap-3">
                            <div className="text-3xl animate-bounce">
                                👨‍💻
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold font-sans bg-gradient-to-r from-[#4ADE80] via-[var(--luxury-gold)] to-[#4ADE80] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                                    Beginner Developer
                                </span>
                                <span className="text-xs text-[var(--text-secondary)] italic mt-0.5 flex items-center gap-1">
                                    Crafting digital experiences <span className="animate-pulse">✨</span>
                                </span>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 'skills':
                output = (
                    <div className="flex flex-col gap-1 font-mono text-sm">
                        <div className="flex justify-between items-center max-w-[350px]">
                            <div className="flex items-center gap-2">
                                <svg role="img" viewBox="0 0 24 24" className="w-4 h-4" style={{ fill: '#0175C2' }}>
                                    <path d={siDart.path} />
                                </svg>
                                <span>Dart</span>
                            </div>
                            <span className="text-[var(--luxury-gold)]">███████░░░ 73%</span>
                        </div>
                        <div className="flex justify-between items-center max-w-[350px]">
                            <div className="flex items-center gap-2">
                                <svg role="img" viewBox="0 0 24 24" className="w-4 h-4" style={{ fill: '#F7DF1E' }}>
                                    <path d={siJavascript.path} />
                                </svg>
                                <span>JavaScript</span>
                            </div>
                            <span className="text-[var(--luxury-gold)]">████████░░ 80%</span>
                        </div>
                        <div className="flex justify-between items-center max-w-[350px]">
                            <div className="flex items-center gap-2">
                                <svg role="img" viewBox="0 0 24 24" className="w-4 h-4" style={{ fill: '#3776AB' }}>
                                    <path d={siPython.path} />
                                </svg>
                                <span>Python</span>
                            </div>
                            <span className="text-[var(--luxury-gold)]">███████░░░ 79%</span>
                        </div>
                        <div className="flex justify-between items-center max-w-[350px]">
                            <div className="flex items-center gap-2">
                                <svg role="img" viewBox="0 0 24 24" className="w-4 h-4" style={{ fill: '#61DAFB' }}>
                                    <path d={siReact.path} />
                                </svg>
                                <span>React</span>
                            </div>
                            <span className="text-[var(--luxury-gold)]">███████░░░ 76%</span>
                        </div>
                    </div>
                );
                break;
            case 'stats':
                output = (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
                        {/* Projects Stat */}
                        <div className="p-3 rounded-lg border border-[var(--border-gold)]/30 bg-[var(--pure-black)]/30 hover:bg-[var(--luxury-gold)]/5 transition-all group">
                            <div className="flex items-center gap-3 mb-1">
                                <Briefcase className="w-4 h-4 text-[var(--luxury-gold)] group-hover:rotate-12 transition-transform" />
                                <span className="text-xs text-[var(--text-secondary)]">Projects</span>
                            </div>
                            <div className="text-lg font-bold text-white group-hover:text-[var(--luxury-gold)] transition-colors">
                                16+
                            </div>
                            <div className="text-[10px] text-gray-500">Completed Live & Unknown</div>
                        </div>

                        {/* Stack Stat */}
                        <div className="p-3 rounded-lg border border-[var(--border-gold)]/30 bg-[var(--pure-black)]/30 hover:bg-[var(--luxury-gold)]/5 transition-all group">
                            <div className="flex items-center gap-3 mb-1">
                                <Code2 className="w-4 h-4 text-[#4ADE80] group-hover:scale-110 transition-transform" />
                                <span className="text-xs text-[var(--text-secondary)]">Top Stack</span>
                            </div>
                            <div className="text-lg font-bold text-white group-hover:text-[#4ADE80] transition-colors">
                                Dart / JavaScript
                            </div>
                            <div className="text-[10px] text-gray-500">Most Used Languages</div>
                        </div>

                        {/* Focus Stat */}
                        <div className="p-3 rounded-lg border border-[var(--border-gold)]/30 bg-[var(--pure-black)]/30 hover:bg-[var(--luxury-gold)]/5 transition-all group">
                            <div className="flex items-center gap-3 mb-1">
                                <Trophy className="w-4 h-4 text-[#F472B6] group-hover:animate-bounce transition-transform" />
                                <span className="text-xs text-[var(--text-secondary)]">Focus</span>
                            </div>
                            <div className="text-lg font-bold text-white group-hover:text-[#F472B6] transition-colors">
                                Flutter & React Framework
                            </div>
                            <div className="text-[10px] text-gray-500">Current Learning Path</div>
                        </div>
                    </div>
                );
                break;
            case 'contact':
                output = (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 mb-2">
                        <a
                            href="https://wa.me/2347020887193?text=Permisi"
                            target="_blank"
                            className="flex items-center gap-4 p-3 rounded-lg border border-[var(--border-gold)] bg-[var(--pure-black)]/50 hover:bg-[var(--luxury-gold)]/10 hover:border-[var(--luxury-gold)] transition-all group"
                        >
                            <div className="p-3 rounded-full bg-[var(--luxury-gold)]/10 text-[var(--luxury-gold)] group-hover:scale-110 transition-transform">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white group-hover:text-[var(--luxury-gold)] transition-colors">WhatsApp</span>
                                <span className="text-xs text-[var(--text-secondary)]">+234 702 088 7193</span>
                            </div>
                        </a>

                        <a
                            href="mailto:alrzkyy@gmail.com"
                            className="flex items-center gap-4 p-3 rounded-lg border border-[var(--border-gold)] bg-[var(--pure-black)]/50 hover:bg-[var(--luxury-gold)]/10 hover:border-[var(--luxury-gold)] transition-all group"
                        >
                            <div className="p-3 rounded-full bg-[var(--luxury-gold)]/10 text-[var(--luxury-gold)] group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white group-hover:text-[var(--luxury-gold)] transition-colors">Email</span>
                                <span className="text-xs text-[var(--text-secondary)]">alrzkyy@gmail.com</span>
                            </div>
                        </a>
                    </div>
                );
                break;
            case 'clear':
                setHistory([]);
                return;
            default:
                output = <span className="text-red-500">Command not found: {trimmedCmd}</span>;
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
        <BentoCard colSpan={2} className="min-h-[300px] flex flex-col p-0 overflow-hidden bg-[#0c0c0c] border-[var(--border-gold)]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-[#333]">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#888] font-mono">
                    <Terminal className="w-3 h-3" />
                    <span>guest@alrzkyy:~</span>
                </div>
                <div className="w-10" />
            </div>

            {/* Terminal Body */}
            <div
                className="flex-1 p-4 font-mono text-sm overflow-y-auto custom-scrollbar cursor-text"
                onClick={focusInput}
            >
                <div className="flex flex-col gap-2">
                    {/* Welcome Message */}
                    {history.length === 1 && history[0].command === 'help' && (
                        <div className="mb-4 text-[var(--text-secondary)]">
                            <p>Welcome to alrzkyy terminal v1.0.0</p>
                            <p>Type <span className="text-[var(--luxury-gold)]">'help'</span> to get started.</p>
                        </div>
                    )}

                    {history.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--luxury-gold)]">➜</span>
                                <span className="text-[#4ADE80]">~</span>
                                <span>{item.command}</span>
                            </div>
                            <div className="pl-4 pb-2 text-gray-300">
                                {item.output}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <span className="text-[var(--luxury-gold)]">➜</span>
                    <span className="text-[#4ADE80]">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0"
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                    />
                </div>
                <div ref={bottomRef} />
            </div>
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
            }, 5); // Faster typing speed
            return () => clearTimeout(timeout);
        } else {
            onComplete?.();
        }
    }, [currentIndex, text, onComplete]);

    const highlightSyntax = (content: string) => {
        // Split by newlines to handle formatting line by line if needed, 
        // but simple regex replace on the whole string is easier for this specific case.

        // We'll use a simple parser strategy: identify parts and wrap them
        // Note: This is a visual approximation for CLI vibes, not a full JSON parser

        const parts = content.split(/(".*?"|system\.getProfile|\(|\)|\[|\]|\{|\}|:|,)/g);

        return parts.map((part, index) => {
            if (!part) return null;

            if (part.startsWith('"')) {
                // Check if it's a key or value based on context (simplified)
                // If followed by :, it's a key (usually). But we split by : so we can't look ahead easily in map.
                // Actually, in JSON, keys are strings before :.

                // Let's rely on coloring all strings one color first
                // But user wants "important parts colored".

                // Heuristic: If it looks like a key name (no spaces, standard keys), maybe color A
                // If it's a value (longer sentence), color B

                // Better regex/split approach:
                // Just color all strings green first? Or keys Cyan?

                // Let's look at the specific keys in the user request
                if (['"name"', '"role"', '"status"', '"location"', '"biography"', '"technical_stack"', '"current_focus"', '"contact"'].includes(part)) {
                    return <span key={index} className="text-blue-400">{part}</span>;
                }
                return <span key={index} className="text-[#a5d6ff]">{part}</span>; // default string color (light blue/green)
            }
            if (part === 'system.getProfile') return <span key={index} className="text-yellow-500 font-bold">{part}</span>;
            if (['{', '}', '[', ']', '(', ')'].includes(part)) return <span key={index} className="text-gray-500">{part}</span>;
            if (part === ':') return <span key={index} className="text-gray-400">{part}</span>;

            return <span key={index} className="text-[var(--text-primary)]">{part}</span>;
        });
    };

    return (
        <span className="text-[var(--text-primary)] whitespace-pre-wrap block font-mono leading-relaxed">
            {highlightSyntax(displayedText)}
            {currentIndex < text.length && <span className="animate-pulse text-[var(--luxury-gold)] block">_</span>}
        </span>
    );
}
