// import { BlogSection } from "@/components/sections/blog-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  );
}
