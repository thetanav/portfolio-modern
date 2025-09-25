import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import NextTopLoader from "nextjs-toploader";
import { Bricolage_Grotesque } from "next/font/google";
import { PostHogProvider } from "./components/PostHogProvider";
import BGVideo from "./components/bgvideo";

const sans = Bricolage_Grotesque({ weight: "400", subsets: ["latin"] });

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
        className={"min-screen antialiased max-w-xl mx-auto " + sans.className}
      >
        <PostHogProvider>
          <NextTopLoader showSpinner={false} color="#5aa8ff" />
          <BGVideo />
          <Navbar />
          <main className="flex-1 flex flex-col px-4 mt-14 mb-12">
            <div className="rounded bg-black/60 border border-white/10 backdrop-blur-xl p-5 md:p-6 inset-shadow-sm inset-shadow-white/10">
              {children}
            </div>
          </main>
        </PostHogProvider>
      </body>
    </html>
  );
}
