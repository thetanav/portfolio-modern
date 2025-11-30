import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import NextTopLoader from "nextjs-toploader";
import { GeistSans } from "geist/font/sans";
import { PostHogProvider } from "./components/PostHogProvider";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import Oneko from "./components/cat";

const sans = GeistSans;

export const metadata: Metadata = {
  metadataBase: new URL("https://tanav.is-a.dev"),
  title: {
    default: "Tanav",
    template: "%s • Tanav",
  },
  description: "Developer, problem solver and creator.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanav.is-a.dev",
    siteName: "Tanav Poswal",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tanav Poswal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tanavtwt", // Replace with your Twitter handle
    creator: "@tanavtwt", // Replace with your Twitter handle
    images: "/opengraph-image", // Absolute URL to your OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.className} antialiased bg-[var(--bg)] text-[var(--text)]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PostHogProvider>
            <NextTopLoader
              color="#333"
              initialPosition={0.08}
              crawlSpeed={200}
              height={2}
              showSpinner={false}
            />
            <div className="mx-auto max-w-xl px-6 py-12 md:py-20">
              <header className="mb-8 flex items-center justify-between">
                <Navbar />
                <ThemeToggle />
              </header>
              <main>{children}</main>
            </div>
            <Oneko />
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
