import skillsData from "@/data/portfolio-data/skills-data";


export default function SkillsSection() {
  return (
    <>
      <h3 className="badge text-dark-accent-highlight px-2 py-1 rounded-lg md:text-sm font-medium text-xs">SKILLS 🛠️</h3>
      <h1 className="font-calistoga text-dark-accent-highlight md:text-4xl mt-1 text-xl">Explore my skillset</h1>

      <div className="w-full max-w-8xl mx-auto mb-7">
        <main className="flex flex-wrap gap-2 sm:gap-3 mt-5 items-center">
          {skillsData.map((skill, index) => (
            <span
              key={index}
              className="flex flex-col items-center gap-1 sm:gap-2 py-2 sm:py-4 rounded-lg w-[90px] sm:w-[110px] md:w-[120px] border"
              style={{ backgroundColor: `${skill.color}30`, borderColor: skill.color }}
            >
              <skill.icon fill={skill.color} className="w-5 sm:w-6" />
              <span 
                style={{ color: skill.color }} 
                className="font-medium text-[10px] sm:text-xs text-center px-1"
              >
                {skill.title}
              </span>
            </span>
          ))}
        </main>
      </div>
    </>
  );
}