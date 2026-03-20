import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [...post.keywords],
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="section-padding">
        <div className="container-main max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            ← Back to blog
          </Link>
          <header className="mt-6 space-y-4">
            <p className="text-sm text-slate-500">
              {post.publishedAt} • {post.readingTime}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg leading-7 text-slate-600">{post.excerpt}</p>
          </header>

          <div className="mt-10 space-y-5 text-base leading-7 text-slate-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
