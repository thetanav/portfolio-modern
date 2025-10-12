import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import NextTopLoader from "nextjs-toploader";
import { JetBrains_Mono } from "next/font/google";
import { PostHogProvider } from "./components/PostHogProvider";

const sans = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

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
        className={`h-screen antialiased max-w-3xl mx-auto overflow-y-auto font-bold ${sans.className}`}
      >
        <PostHogProvider>
          <NextTopLoader showSpinner={false} color="#000000" />
          <Navbar />
          <main className="flex-1 flex flex-col px-4s mb-12">
            <div className="p-5 md:p-6">
              {children}
            </div>
          </main>
        </PostHogProvider>
      </body>
    </html>
  );
}
