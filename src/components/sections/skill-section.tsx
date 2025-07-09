import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/pages/home-page";
import Image from "next/image";
import BlurFade from "../magicui/blur-fade";
import { Badge } from "../ui/badge";

const SkillSection = () => {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill.name} className="flex items-center gap-1">
                {skill.icon && (
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={16}
                    height={16}
                  />
                )}
                {skill.name}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
