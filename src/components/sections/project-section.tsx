import { BLUR_FADE_DELAY } from '@/pages/home-page';
import { DATA } from '@/data/resume';
import BlurFade from '../magicui/blur-fade';
import { ProjectCard } from '../project-card';

const ProjectSection = () => {
  return (
    <section id='projects'>
      <div className='w-full space-y-12 py-12'>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Check out my latest work
              </h2>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className='mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2'>
          {DATA.projects.map((project, id) => (
            <BlurFade key={id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                imageProject={project.imageProject}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
