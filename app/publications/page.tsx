import type { Metadata } from "next";
import { publications } from "../publication-data";
import { PageFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed publications by Mihir Shah across dermatology, clinical AI, CRISPR, immunology, and medical imaging.",
};

const years = [...new Set(publications.map((publication) => publication.year))];

function Authors({ value }: { value: string }) {
  const parts = value.split(/(Shah MM\*?|Shah M\*?)/g);

  return (
    <>
      {parts.map((part, index) =>
        /^Shah M(M)?\*?$/.test(part) ? (
          <strong key={`${part}-${index}`}>{part}</strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function PublicationsPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader active="publications" />

      <main id="main" className="site-main page-main publications-main">
        <header className="page-intro">
          <h1>Publications</h1>
          <p>
            All my peer-reviewed work. Citation counts and the most recent
            updates are available on{" "}
            <a
              href="https://scholar.google.com/citations?user=VPiPctAAAAAJ&hl=en&inst=8735055681369637791"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
            .
          </p>
        </header>

        <div className="publication-years">
          {years.map((year) => (
            <section className="publication-year" key={year}>
              <h2>{year}</h2>
              <ul>
                {publications
                  .filter((publication) => publication.year === year)
                  .map((publication) => (
                    <li key={publication.doi}>
                      <div className="publication-copy">
                        <p className="publication-title">
                          <a
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {publication.title}
                          </a>
                        </p>
                        <p className="publication-authors">
                          <Authors value={publication.authors} />
                        </p>
                        <p className="publication-journal">
                          {publication.journal}
                          {publication.note ? ` · ${publication.note}` : ""}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </main>

      <PageFooter />
    </>
  );
}
