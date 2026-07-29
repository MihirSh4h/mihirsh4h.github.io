import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { essays, getEssay } from "../../content";
import { PageFooter, SiteHeader } from "../../site-chrome";

type EssayPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);

  if (!essay) {
    return {};
  }

  return {
    title: essay.title,
    description: essay.deck,
    openGraph: {
      title: essay.title,
      description: essay.deck,
      type: "article",
    },
  };
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getEssay(slug);

  if (!essay) {
    notFound();
  }

  return (
    <>
      <a className="skip-link" href="#article">
        Skip to article
      </a>
      <SiteHeader active="thoughts" />

      <main id="article" className="article-shell">
        <article>
          <header className="article-header">
            <Link className="back-link" href="/thoughts">
              ← Thoughts
            </Link>
            <h1>{essay.title}</h1>
            <p>{essay.deck}</p>
          </header>

          <div className="article-body">{essay.body}</div>
        </article>
      </main>

      <PageFooter />
    </>
  );
}
