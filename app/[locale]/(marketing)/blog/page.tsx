import { client } from '@/sanity/client';
import { isSanityConfigured } from '@/sanity/env';
import { allBlogPostsQuery, type BlogPostSummary } from '@/sanity/queries';
import { StubPage } from '@/components/marketing/stub-page';

export const metadata = { title: 'Blog · Insight Industri Snack Indonesia' };
export const revalidate = 60;

async function getPosts(): Promise<BlogPostSummary[]> {
  if (!client) return [];
  try {
    return await client.fetch<BlogPostSummary[]>(allBlogPostsQuery);
  } catch (err) {
    console.error('Sanity fetch error:', err);
    return [];
  }
}

export default async function BlogPage() {
  if (!isSanityConfigured) {
    return (
      <StubPage
        eyebrow="Blog · Setup needed"
        title="Sanity CMS belum dikonfigurasi."
        description="Copy .env.local.example → .env.local dan isi NEXT_PUBLIC_SANITY_PROJECT_ID dari sanity.io. Setelah itu /studio bisa diakses untuk mulai buat posts."
      />
    );
  }

  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <StubPage
        eyebrow="Blog"
        title="Belum ada post."
        description="Buka /studio untuk mulai create blog post pertama Anda. Setelah publish, post akan muncul di sini."
      />
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-[82rem] mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Blog</span>
          <h1 className="heading-brand mt-4 text-4xl md:text-5xl">Insight industri snack.</h1>
          <p className="mt-4 text-gray-600">
            Tips bisnis, tren pasar, dan studi kasus dari ekosistem distribusi snack.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p._id} className="card-hover bg-white rounded-3xl overflow-hidden border border-gray-100">
              <div className="aspect-[16/10] bg-gray-100" />
              <div className="p-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  {p.category ?? 'Post'}
                  {p.readTime ? ` · ${p.readTime}` : ''}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold line-clamp-2">
                  {p.title}
                </h3>
                {p.excerpt && <p className="mt-2 text-sm text-gray-600 line-clamp-2">{p.excerpt}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
