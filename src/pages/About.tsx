import { HeroSection } from "../components/about/HeroSection";
import { AboutAndSkills } from "../components/about/AboutAndSkills";
import { EducationTimeline } from "../components/about/EducationTimeline";
import { Achievements } from "../components/about/Achievements";
import { Volunteering } from "../components/about/Volunteering";

const About = () => {
  return (
    // Mobile → px-4 (tight, readable)
    // Small tablets → sm:px-6
    // Large screens → lg:px-20 (lots of breathing room)

    <div className="px-4 sm:px-6 lg:px-20 py-8 animate-fadeIn">
      <HeroSection />
      <AboutAndSkills />
      <EducationTimeline />
      <div className="mt-12 grid md:grid-cols-1 gap-6">
        <Achievements />
        <Volunteering />
      </div>
    </div>
  );
};

export default About;
