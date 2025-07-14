import AboutSection from '@/components/sections/about-section';
import AwardsSection from '@/components/sections/awards-section';
import CertificateSection from '@/components/sections/certificate-section';
import EducationSection from '@/components/sections/education-section';
import HeroSection from '@/components/sections/hero-section';
import ProjectSection from '@/components/sections/project-section';
import SkillSection from '@/components/sections/skill-section';
import WorkSection from '@/components/sections/work-section';

export const BLUR_FADE_DELAY = 0.04;

const HomePage = () => {
  return (
    <main className='flex min-h-[100dvh] flex-col space-y-10'>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Work Experience Section */}
      <WorkSection />

      {/* Education Section */}
      <EducationSection />

      {/* Skill Section */}
      <SkillSection />
      {/* Projects Section */}
      <ProjectSection />

      {/* Certificates Section */}
      <CertificateSection />

      {/* Awards Section */}
      <AwardsSection />
    </main>
  );
};

export default HomePage;
