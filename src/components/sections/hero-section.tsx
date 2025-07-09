"use client";

import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/pages/home-page";
import BlurFade from "../magicui/blur-fade";
import BlurFadeText from "../magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name} 👋`}
            />
            {!isMobile && (
              <BlurFadeText
                className="max-w-[600px] text-sm sm:text-base md:text-md lg:text-md xl:text-md"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            )}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-24 md:size-36 lg:size-48 border">
              <AvatarImage
                alt={DATA.name}
                className="object-cover rounded-full"
                src={DATA.avatarUrl}
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>

        {isMobile && (
          <BlurFadeText
            className={`max-w-[600px] text-sm sm:text-base md:text-md lg:text-md xl:text-md ${
              isMobile ? "text-sm" : "text-md"
            }`}
            delay={BLUR_FADE_DELAY}
            text={DATA.description}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
