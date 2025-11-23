import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import NextTopLoader from "nextjs-toploader";
import { GeistSans } from "geist/font/sans";
import { PostHogProvider } from "./components/PostHogProvider";

const sans = GeistSans;

export const metadata: Metadata = {
  metadataBase: new URL("https://tanav.is-a.dev"),
  title: {
    default: "Tanav Poswal",
    template: "Tanav Poswal • %s",
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
    images: "/opengraph-image.png", // Absolute URL to your OG image
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
        className={`relative min-h-screen bg-transparent text-xs antialiased font-normal leading-relaxed ${sans.variable} ${sans.className}`}
      >
        <PostHogProvider>
          <NextTopLoader showSpinner={false} color="#22c55e" />
          <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-4 px-4 py-4 md:px-6 md:py-6">
            <Navbar />
            <main className="flex-1 mt-4">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  background:
                    "radial-gradient(circle at 20% -10%, rgba(var(--accent-rgb), 0.25), transparent 55%)",
                }}
              />
              <div className="relative z-10">{children}</div>
            </main>
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
