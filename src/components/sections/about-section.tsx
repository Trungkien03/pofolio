import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/pages/home-page";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const AboutSection = () => {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
};

export default AboutSection;
