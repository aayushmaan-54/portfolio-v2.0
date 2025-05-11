import Footer from "./_components/footer";
import Hero from "./_components/hero";
import LatestBlogsSection from "./_components/latest-blogs-section";
import RecentProjectsSection from "./_components/recent-projects-section";
import SkillsSection from "./_components/skills-section";


export default function Home() {

  return (
    <>
      <Hero />
      <div className="container mx-auto mt-14 px-2">
        <SkillsSection />
        <RecentProjectsSection />
        <LatestBlogsSection />
      </div>
    </>
  );
}
