import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Blog: SEO, Website Strategy, and Conversion Tips",
  description:
    "Read practical posts on technical SEO, website packages, conversion optimization, and local business growth strategies.",
  path: "/blog",
  keywords: ["website strategy blog", "seo tips", "conversion optimization blog"],
});

export default function BlogPage() {
  return (
    <main>
      <section className="section-padding bg-slate-950 text-white">
        <div className="container-main max-w-4xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Blog</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Insights on SEO, performance, and better website conversion.
          </h1>
          <p className="text-lg text-slate-300">
            Useful content that helps business owners understand what drives rankings, trust, and
            stronger inquiry performance online.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
