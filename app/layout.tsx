import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: {
      default: "Mihir Shah",
      template: "%s | Mihir Shah",
    },
    description:
      "Mihir Shah is a Stanford medical student and researcher working across translational science, clinical AI, healthcare innovation, and public service.",
    applicationName: "Mihir Shah",
    authors: [{ name: "Mihir Shah" }],
    creator: "Mihir Shah",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: origin,
      title: "Mihir Shah",
      description:
        "Research, publications, and writing by Mihir Shah.",
      siteName: "Mihir Shah",
    },
    twitter: {
      card: "summary",
      title: "Mihir Shah",
      description:
        "Research, publications, and writing by Mihir Shah.",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
