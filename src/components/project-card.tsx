import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  isCertificate?: boolean;
  imageProject?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  links,
  className,
  isCertificate = false,
  imageProject,
}: Props) {
  return (
    <Card
      className={
        'flex h-full flex-col overflow-hidden border p-2 transition-all duration-300 ease-out hover:shadow-lg'
      }
    >
      <Link
        href={href || '#'}
        className={cn('block cursor-pointer', className)}
      >
        {imageProject && (
          <div className='flex items-center justify-center'>
            <Image
              src={imageProject}
              alt={title}
              width={isCertificate ? 500 : 1920}
              height={isCertificate ? 300 : 1080}
              className={cn(
                'object-contain',
                isCertificate
                  ? 'h-40 w-full overflow-hidden object-cover object-top'
                  : 'max-h-40 max-w-full rounded-t-lg object-cover object-top',
              )}
            />
          </div>
        )}
      </Link>
      <CardHeader className='px-2'>
        <div className='space-y-1'>
          <CardTitle className='mt-1 flex items-center justify-start gap-1 text-base'>
            {image && (
              <Image
                src={image}
                alt={title}
                width={100}
                height={100}
                className='h-6 w-6 object-cover'
              />
            )}
            {title}
          </CardTitle>
          <time className='font-sans text-xs'>{dates}</time>
          <div className='hidden font-sans text-xs underline print:visible'>
            {link?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <Markdown className='prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert'>
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className='mt-auto flex flex-col px-2'>
        {tags && tags.length > 0 && (
          <div className='mt-2 flex flex-wrap gap-1'>
            {tags?.map((tag) => (
              <Badge
                className='px-1 py-0 text-[10px]'
                variant='secondary'
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className='px-2 pb-2'>
        {links && links.length > 0 && (
          <div className='flex flex-row flex-wrap items-start gap-1'>
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target='_blank'>
                <Badge key={idx} className='flex gap-2 px-2 py-1 text-[10px]'>
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
