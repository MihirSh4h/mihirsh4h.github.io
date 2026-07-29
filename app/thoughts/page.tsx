import type { Metadata } from "next";
import Link from "next/link";
import { essays } from "../content";
import { PageFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Thoughts",
  description:
    "Essays by Mihir Shah on clinical AI, healthcare venture, public policy, and disability access.",
};

export default function ThoughtsIndex() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader active="thoughts" />

      <main id="main" className="writing-index site-main">
        <header className="writing-index-header">
          <h1>Thoughts</h1>
          <p>
            Longer notes on medicine, technology, public life, and a few
            questions that do not fit neatly into one field.
          </p>
        </header>

        <div className="notes-list index-notes">
          {essays.map((essay) => (
            <article className="note-entry" key={essay.slug}>
              <div>
                <h2>
                  <Link href={`/thoughts/${essay.slug}`}>{essay.title}</Link>
                </h2>
                <p>{essay.deck}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <PageFooter />
    </>
  );
}
