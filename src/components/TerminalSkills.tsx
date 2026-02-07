'use client';

import { useState, useRef, useEffect } from 'react';
import { BentoCard } from './BentoGrid';
import { Terminal } from 'lucide-react';

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
            case 'role':
                output = <span className="text-[#4ADE80]">Beginner Developer</span>;
                break;
            case 'skills':
                output = (
                    <div className="flex flex-col gap-1 font-mono text-sm">
                        <div className="flex justify-between items-center max-w-[300px]">
                            <span>Flutter</span>
                            <span className="text-[var(--luxury-gold)]">███████░░░ 73%</span>
                        </div>
                        <div className="flex justify-between items-center max-w-[300px]">
                            <span>JavaScript</span>
                            <span className="text-[var(--luxury-gold)]">████████░░ 80%</span>
                        </div>
                        <div className="flex justify-between items-center max-w-[300px]">
                            <span>Python</span>
                            <span className="text-[var(--luxury-gold)]">███████░░░ 79%</span>
                        </div>
                        <div className="flex justify-between items-center max-w-[300px]">
                            <span>React</span>
                            <span className="text-[var(--luxury-gold)]">███████░░░ 76%</span>
                        </div>
                    </div>
                );
                break;
            case 'stats':
                output = (
                    <div className="flex flex-col gap-1">
                        <p>Total Projects: 20+</p>
                        <p>Top Language: Dart / JavaScript</p>
                        <p>Current Focus: Flutter & React</p>
                    </div>
                );
                break;
            case 'contact':
                output = (
                    <div className="flex flex-col gap-1">
                        <p>WhatsApp: <a href="https://wa.me/2347020887193" target="_blank" className="hover:text-[var(--luxury-gold)] underline">+234 702 088 7193</a></p>
                        <p>Email: <a href="mailto:alrzkyy@gmail.com" className="hover:text-[var(--luxury-gold)] underline">alrzkyy@gmail.com</a></p>
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
        <BentoCard colSpan={1} className="min-h-[300px] flex flex-col p-0 overflow-hidden bg-[#0c0c0c] border-[var(--border-gold)]">
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
