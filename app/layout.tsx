import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mihirsh4h.github.io"),
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
    url: "/",
    title: "Mihir Shah",
    description: "Research, publications, and writing by Mihir Shah.",
    siteName: "Mihir Shah",
  },
  twitter: {
    card: "summary",
    title: "Mihir Shah",
    description: "Research, publications, and writing by Mihir Shah.",
  },
};

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
