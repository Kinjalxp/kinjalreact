import { HeroSection } from "../components/about/HeroSection";
import { AboutAndSkills } from "../components/about/AboutAndSkills";
import { EducationTimeline } from "../components/about/EducationTimeline";
import { Achievements } from "../components/about/Achievements";
import { Volunteering } from "../components/about/Volunteering";

const About = () => {
  return (
    <div className="animate-fadeIn">
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
