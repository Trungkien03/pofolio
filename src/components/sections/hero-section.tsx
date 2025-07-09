import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/pages/home-page";
import BlurFade from "../magicui/blur-fade";
import BlurFadeText from "../magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-md"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage
                alt={DATA.name}
                width={112}
                height={112}
                className="object-cover rounded-full"
                src={DATA.avatarUrl}
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
