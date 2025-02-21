import Hero from "./_components/hero";
import SkillsSection from "./_components/skills-section";


export default function Home() {

  return (
    <>
      <Hero />
      <div className="container mx-auto mt-14 px-2">
        <SkillsSection />
      </div>
    </>
  );
}
