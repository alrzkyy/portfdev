'use client';


import { ReactNode } from 'react';

interface BentoGridProps {
    children: ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 max-w-7xl mx-auto w-full">
            {children}
        </div>
    );
}

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
    delay?: number;
}

export function BentoCard({ children, className = '', colSpan = 1, rowSpan = 1, delay = 0 }: BentoCardProps) {
    const colSpanClass = {
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
    }[colSpan];

    const rowSpanClass = {
        1: 'md:row-span-1',
        2: 'md:row-span-2',
    }[rowSpan];

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className={`bg-[var(--card-bg)] rounded-[var(--radius-lg)] p-6 card-border hover:gold-glow transition-all duration-300 ${colSpanClass} ${rowSpanClass} ${className} flex flex-col group`}
        >
            {children}
        </div>
    );
}
