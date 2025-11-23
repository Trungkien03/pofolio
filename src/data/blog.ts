import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: 'min-light',
        dark: 'min-dark',
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  try {
    const filePath = path.join('content', `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const source = fs.readFileSync(filePath, 'utf-8');
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);
    return {
      source: content,
      metadata,
      slug,
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

async function getAllPosts(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const post = await getPost(slug);
      if (!post) return null;
      return {
        metadata: post.metadata,
        slug: post.slug,
        source: post.source,
      };
    }),
  );
  return posts.filter(
    (post): post is NonNullable<typeof post> => post !== null,
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), 'content'));
}

// Optimized function to get only slugs for generateStaticParams
export async function getBlogSlugs() {
  try {
    const dir = path.join(process.cwd(), 'content');
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => path.basename(file, path.extname(file)));
  } catch (error) {
    console.error('Error getting blog slugs:', error);
    return [];
  }
}
