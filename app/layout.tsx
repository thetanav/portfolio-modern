import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import NextTopLoader from "nextjs-toploader";
import { Plus_Jakarta_Sans } from "next/font/google";
import { PostHogProvider } from "./components/PostHogProvider";

const sans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Tanav Poswal",
    template: "Tanav Poswal • %s",
  },
  description: "Developer, problem solver and creator.",
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
  twitter: {
    card: "summary_large_image",
    site: "@tanavindev", // Replace with your Twitter handle
    creator: "@tanavindev", // Replace with your Twitter handle
    images: "https://tanavindev.tech/twitter-image.png", // Absolute URL to your OG image
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
        className={`relative min-h-screen bg-transparent text-base antialiased font-normal ${sans.variable} ${sans.className}`}>
        <PostHogProvider>
          <NextTopLoader showSpinner={false} color="#5d6aff" />
          <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-10 px-4 py-8 md:px-6 md:py-12">
            <Navbar />
            <main className="flex-1">
              <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_28px_90px_-60px_rgba(15,23,42,0.85)] backdrop-blur-2xl md:p-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.22]"
                  style={{
                    background:
                      "radial-gradient(circle at 20% -10%, rgba(var(--accent-rgb), 0.25), transparent 55%)",
                  }}
                />
                <div className="relative z-10">{children}</div>
              </div>
            </main>
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
