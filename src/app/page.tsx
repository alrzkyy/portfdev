'use client';

import { useEffect } from 'react';
import BentoGrid from '@/components/BentoGrid';
import ProfileCard from '@/components/ProfileCard';
import LanyardCoding from '@/components/LanyardCoding';
import LanyardSpotify from '@/components/LanyardSpotify';
import ProjectDownloadCenter from '@/components/ProjectDownloadCenter';
import QuickLinks from '@/components/QuickLinks';
import GitHubRepos from '@/components/GitHubRepos';
import TerminalSkills from '@/components/TerminalSkills';
import AlbumShowcase from '@/components/AlbumShowcase';

export default function Home() {
  useEffect(() => {
    // Force scroll to top on load and prevent browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center pt-12 md:pt-24 pb-12 bg-[var(--pure-black)] overflow-x-hidden">
      <BentoGrid>
        {/* Row 1 */}
        <ProfileCard />
        <LanyardCoding />
        <QuickLinks />

        {/* Row 2 */}
        <LanyardSpotify />
        <TerminalSkills />
        <ProjectDownloadCenter />

        {/* Row 3 */}
        <AlbumShowcase />
        <GitHubRepos />
      </BentoGrid>
    </main>
  );
}
