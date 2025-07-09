import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/pages/home-page";
import BlurFade from "../magicui/blur-fade";
import { ProjectCard } from "../project-card";

const CertificateSection = () => {
  return (
    <section id="certificates">
      <div className="flex min-h-0 flex-col gap-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Certificates</h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATA.certifications.map((cert, idx) => (
            <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * 6 + idx * 0.05}>
              <ProjectCard
                title={cert.title}
                description={cert.description}
                dates={cert.date}
                tags={[cert.organization]}
                href={cert.link || undefined}
                image={cert.icon || undefined}
                links={
                  cert.link
                    ? [{ icon: null, type: "View", href: cert.link }]
                    : undefined
                }
                isCertificate={true}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
