import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageFooter, SiteHeader, SocialLinks } from "./site-chrome";

export const metadata: Metadata = {
  title: {
    absolute: "Mihir Shah",
  },
  description:
    "Mihir Shah is a Stanford medical student and researcher working across translational science, clinical AI, healthcare innovation, and public service.",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader active="home" />

      <main id="main" className="site-main home-main">
        <section className="profile" aria-labelledby="profile-title">
          <Image
            alt="Mihir Shah"
            className="headshot"
            height={729}
            priority
            src="/mihir-shah-headshot.jpg"
            unoptimized
            width={729}
          />

          <div className="profile-copy">
            <h1 id="profile-title">Mihir Shah</h1>
            <SocialLinks />

            <p>
              Hi, I&apos;m Mihir, a medical student at{" "}
              <a
                href="https://med.stanford.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Stanford School of Medicine
              </a>{" "}
              focused on molecular medicine. Before medical school, I studied
              Molecular and Cell Biology and Disability Studies at{" "}
              <a
                href="https://www.berkeley.edu/"
                target="_blank"
                rel="noreferrer"
              >
                UC Berkeley
              </a>
              . Most of my work asks how a promising biological idea makes it
              all the way to better care, a question I have approached through
              translational biology, dermatology, clinical AI, biotechnology
              investing, public policy, and disability access.
            </p>

            <p>
              I am always happy to talk through an interesting problem, explore
              a collaboration, or help students find their way into medicine
              and research. You can reach me at mihir2 [at] stanford [dot] edu.
            </p>
          </div>
        </section>

        <section className="home-section" aria-labelledby="endeavors-title">
          <h2 id="endeavors-title">Work</h2>

          <div className="endeavor-list">
            <article className="endeavor">
              <h3>Research</h3>
              <p>
                I study inflammatory and rare skin disease, hyperimmune states,
                tissue repair, and the path from experimental biology to
                clinical treatment. At Stanford, I work broadly across the{" "}
                <a
                  href="https://med.stanford.edu/dermatology.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Department of Dermatology
                </a>
                , including in the{" "}
                <a
                  href="https://med.stanford.edu/orolab.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Anthony E. Oro Lab
                </a>{" "}
                and with Bernice Kwong and Jennifer Chen.
              </p>
              <p>
                Previously, I worked with Kari Nadeau as the lead coordinator
                for a clinical trial examining immune responses to COVID-19
                mRNA vaccines. During college, I completed my honors thesis
                with{" "}
                <a
                  href="https://doudnalab.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jennifer Doudna
                </a>{" "}
                and later coauthored{" "}
                <a
                  href="https://doi.org/10.1038/s41551-025-01463-z"
                  target="_blank"
                  rel="noreferrer"
                >
                  CRISPR-GPT
                </a>
                .
              </p>
              <aside
                className="question-note"
                aria-labelledby="research-questions-title"
              >
                <h4 id="research-questions-title">
                  Questions I keep returning to
                </h4>
                <ul>
                  <li>
                    Why do some immune responses resolve while others become
                    chronic, tissue-damaging hyperimmune states?
                  </li>
                  <li>
                    How can cell and gene therapies restore fragile tissues
                    while preserving their function?
                  </li>
                  <li>
                    What helps a promising biological mechanism survive the
                    transition into routine care?
                  </li>
                </ul>
              </aside>
              <p className="detail-links">
                <Link href="/publications">Publications</Link>
              </p>
            </article>

            <article className="endeavor">
              <h3>Access and public service</h3>
              <p>
                I founded{" "}
                <a
                  href="https://dermability.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  DermAbility
                </a>{" "}
                to improve disability access in dermatologic care. At{" "}
                <a
                  href="https://familyvoices.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Family Voices
                </a>
                , I reviewed Medicaid telehealth policy changes across every
                state and supported advocacy for family-led health information
                centers. I also spent six years on the UCSF Youth Advisory
                Council, working with hospital leaders on patient experience
                and care navigation.
              </p>
            </article>

            <article className="endeavor">
              <h3>Biotechnology, investing, and strategy</h3>
              <p>
                At{" "}
                <a
                  href="https://www.newpath.partners/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Newpath Partners
                </a>
                , I evaluated biotechnology and medicine through scientific and
                commercial diligence. At{" "}
                <a
                  href="https://www.phoenixconsultinggroup.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Phoenix Consulting Group
                </a>
                , I worked on healthcare and biotechnology strategy across
                genetic diagnostics, health systems, and health data. Those
                experiences made me interested in how scientific uncertainty,
                clinical need, and the realities of development shape
                investment and company-building decisions.
              </p>
            </article>

            <article className="endeavor">
              <h3>Teaching</h3>
              <p>
                At Berkeley, I founded and taught{" "}
                <a
                  href="https://berkeleydecal.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clinical Innovations
                </a>
                , an undergraduate DeCal about approaching problems in care
                delivery with the habits of clinical observation and product
                design. I am also developing{" "}
                <a
                  href="https://skin-exam-trainer.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SkinExam Trainer
                </a>{" "}
                to help medical students practice the dermatologic exam.
              </p>
            </article>
          </div>
        </section>

        <section className="home-section final-home-section">
          <h2>Thoughts</h2>
          <p>
            Longer notes on medicine, technology, public life, and questions
            that do not fit neatly into one field are collected under{" "}
            <Link href="/thoughts">Thoughts</Link>.
          </p>
        </section>

        <section className="home-section outside-section">
          <h2>Outside work</h2>
          <p>
            I am usually reading something, especially poetry or philosophy,
            following the Los Angeles Lakers, or playing ultimate frisbee.
          </p>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
