import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "../components/footer";
import { NextTheme } from "../components/providers";
import Header from "../components/header";
import { cx } from "src/lib/utils";
import { config } from "@/lib/config";

const baseUrl = config.baseUrl;
const { ogImage, favicon } = config.metadata;

function getUrl(str?: string) {
  const urlString = str
    ? str.startsWith("/")
      ? `${baseUrl}${str}`
      : str
    : undefined;
  if (!urlString) {
    return undefined;
  }
  return new URL(urlString);
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: config.metadata.title,
    template: `%s | ${config.metadata.title}`,
  },
  icons: {
    shortcut: getUrl(favicon),
  },
  description: config.metadata.description,
  openGraph: {
    title: config.metadata.title,
    description: config.metadata.description,
    url: baseUrl,
    siteName: config.metadata.title,
    locale: "en_US",
    type: "website",
    images: getUrl(ogImage),
  },
  twitter: {
    card: "summary_large_image",
    title: config.metadata.title,
    description: config.metadata.description,
    images: getUrl(ogImage),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          "text-stone-300 bg-gradient-to-tr from-neutral-950 to-neutral-700 antialiased max-w-xl mx-auto min-h-screen",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <NextTheme forcedTheme="dark">
          <main className="flex flex-col px-2 md:px-0 gap-4 py-4 min-h-screen justify-center">
            <main className="flex flex-col gap-4">
              <Header />
              {children}
            </main>
            <Footer />
          </main>
          <svg className="absolute left-0 top-0">
            <filter id="grain">
              <feTurbulence type="turbulence" baseFrequency="0.65" />
            </filter>
          </svg>
        </NextTheme>
      </body>
    </html>
  );
}
