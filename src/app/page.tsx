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
  return (
    <main className="min-h-screen w-full">
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
