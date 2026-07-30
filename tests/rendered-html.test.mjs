import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the revised homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Mihir Shah<\/title>/i);
  assert.match(html, /<img src="\/mihir-shah-headshot\.jpg"/);
  assert.doesNotMatch(html, /_vinext\/image/);
  assert.match(html, />Work</);
  assert.match(html, /Access and public service/);
  assert.match(html, /Biotechnology, investing, and strategy/);
  assert.match(html, /COVID-19 mRNA vaccines/);
  assert.match(html, /Questions I keep returning to/);
  assert.match(html, /familyvoices\.org/);
  assert.match(html, /berkeleydecal\.com/);
  assert.match(html, /SkinExam Trainer/);
  assert.doesNotMatch(html, /At Stanford, I am developing/);
  assert.match(html, /Outside work/);
  assert.match(html, /Los Angeles Lakers/);
  assert.match(html, /mailto:mihir2@stanford\.edu/);
  assert.match(html, /linkedin\.com\/in\/mihirsh4h/);
  assert.match(html, /scholar\.google\.com\/citations/);
  assert.match(html, /github\.com\/MihirSh4h/);
  assert.match(html, /talk through an interesting problem/);
  assert.match(html, /mihir2 \[at\] stanford \[dot\] edu/);
  assert.doesNotMatch(
    html,
    /<a[^>]*>\s*mihir2 \[at\] stanford \[dot\] edu\s*<\/a>/,
  );
  assert.doesNotMatch(html, /href="\/research"/);
  assert.match(html, /href="\/publications"/);
  assert.match(html, /href="\/thoughts"/);
  assert.doesNotMatch(html, /id="contact"|Selected work|codex-preview/i);
});

test("renders all publications", async () => {
  const publicationsResponse = await render("/publications/");
  assert.equal(publicationsResponse.status, 200);
  const publicationsHtml = await publicationsResponse.text();
  assert.equal(
    (publicationsHtml.match(/class="publication-copy"/g) ?? []).length,
    19,
  );
  assert.match(publicationsHtml, /CRISPR-GPT for agentic automation/);
  assert.match(publicationsHtml, /Disparities in Patch Testing/);
  assert.match(publicationsHtml, /semi-automated cerebral microbleed/);
  assert.match(publicationsHtml, /All my peer-reviewed work/);
  assert.match(publicationsHtml, /Google Scholar/);
  assert.match(
    publicationsHtml,
    /American Contact Dermatitis Society Annual Meeting/,
  );
  assert.match(publicationsHtml, /MASCC\/ISOO Annual Meeting/);
  assert.match(publicationsHtml, /ACDS Clinical Research Award/);
  assert.match(publicationsHtml, /Stanford Medical Scholars Discovery Grant/);
  assert.doesNotMatch(publicationsHtml, /class="publication-number"/);
  assert.doesNotMatch(publicationsHtml, />DOI</);
});

test("server-renders the Thoughts index and all four sourced essays", async () => {
  const thoughtsResponse = await render("/thoughts/");
  assert.equal(thoughtsResponse.status, 200);
  const thoughtsHtml = await thoughtsResponse.text();
  const essayLinks = thoughtsHtml.match(/href="\/thoughts\/[^"]+"/g) ?? [];
  assert.equal(new Set(essayLinks).size, 4);
  assert.doesNotMatch(thoughtsHtml, />Read</);
  assert.doesNotMatch(thoughtsHtml, /\bmin\b|Clinical AI|Public policy/);

  const essays = [
    ["before-the-model-runs", "What healthcare AI gets wrong"],
    ["two-clocks", "Why clinical timelines and venture timelines disagree"],
    ["policy-as-product", "The public sector is a product environment"],
    [
      "access-is-infrastructure",
      "Disability access and the infrastructure of care",
    ],
  ];

  for (const [slug, title] of essays) {
    const response = await render(`/thoughts/${slug}/`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, /target="_blank"/);
    assert.ok(html.length > 8500);
    assert.doesNotMatch(html, /Sources and further reading|Next field note/);
  }
});

test("exports every public route for GitHub Pages", async () => {
  const staticFiles = [
    "index.html",
    "publications/index.html",
    "thoughts/index.html",
    "thoughts/before-the-model-runs/index.html",
    "thoughts/two-clocks/index.html",
    "thoughts/policy-as-product/index.html",
    "thoughts/access-is-infrastructure/index.html",
    "mihir-shah-headshot.jpg",
  ];

  for (const path of staticFiles) {
    await access(new URL(`../dist/client/${path}`, import.meta.url));
  }
});

test("follows the punctuation and implementation brief", async () => {
  const files = [
    "../app/page.tsx",
    "../app/content.tsx",
    "../app/layout.tsx",
    "../app/globals.css",
    "../app/publication-data.ts",
    "../app/publications/page.tsx",
    "../app/recognition-data.ts",
    "../app/site-chrome.tsx",
    "../app/thoughts/page.tsx",
    "../app/thoughts/[slug]/page.tsx",
    "../README.md",
    "../package.json",
  ];

  const source = (
    await Promise.all(
      files.map((path) => readFile(new URL(path, import.meta.url), "utf8")),
    )
  ).join("\n");

  const longDash = String.fromCodePoint(0x2014);
  assert.equal(source.includes(longDash), false);
  assert.doesNotMatch(source, /react-loading-skeleton|codex-preview/);
  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
  await assert.rejects(access(new URL("app/writing", templateRoot)));
  await access(new URL("public/mihir-shah-headshot.jpg", templateRoot));
});
