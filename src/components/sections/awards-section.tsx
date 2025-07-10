import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/pages/home-page";
import { HackathonCard } from "../hackathon-card";
import BlurFade from "../magicui/blur-fade";

const AwardsSection = () => {
  return (
    <section id="awards">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Awards
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                During my time in university, I attended {DATA.awards.length}+
                awards and I am proud of my achievements.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.awards.map((project, id) => (
              <BlurFade
                key={project.title + project.date}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  dates={project.date}
                  image={project.icon}
                  location="Vietnam"
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
};

export default AwardsSection;
