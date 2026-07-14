import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slateBg text-gray-100 overflow-x-hidden">
      <Hero />
      <TechStack />
      <Projects />
      <Timeline />
    </main>
  );
}
