'use client';

import { DATA } from '@/data/resume';
import { BLUR_FADE_DELAY } from '@/pages/home-page';
import BlurFade from '../magicui/blur-fade';
import BlurFadeText from '../magicui/blur-fade-text';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id='hero'>
      <div className='mx-auto w-full max-w-3xl space-y-8'>
        <div className='flex justify-between gap-2'>
          <div className='flex flex-1 flex-col space-y-1.5'>
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none'
              yOffset={8}
              text={`${DATA.name} - Kane`}
            />
            {!isMobile && (
              <BlurFadeText
                className='md:text-md lg:text-md xl:text-md max-w-[600px] text-sm sm:text-base'
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            )}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className='size-24 border md:size-36 lg:size-48'>
              <AvatarImage
                alt={DATA.name}
                className='rounded-full object-cover'
                src={DATA.avatarUrl}
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>

        {isMobile && (
          <BlurFadeText
            className={`md:text-md lg:text-md xl:text-md max-w-[600px] text-sm sm:text-base ${
              isMobile ? 'text-sm' : 'text-md'
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
