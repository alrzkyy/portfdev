'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoGridProps {
    children: ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-4 p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto"
        >
            {children}
        </motion.div>
    );
}

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2;
}

export function BentoCard({ children, className = '', colSpan = 1, rowSpan = 1 }: BentoCardProps) {
    const colSpanClass = {
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
        4: 'md:col-span-4',
    }[colSpan];

    const rowSpanClass = {
        1: 'md:row-span-1',
        2: 'md:row-span-2',
    }[rowSpan];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className={`bg-[var(--card-bg)] rounded-[var(--radius-lg)] p-6 card-border hover:gold-glow transition-all duration-300 ${colSpanClass} ${rowSpanClass} ${className} flex flex-col`}
        >
            {children}
        </motion.div>
    );
}
