import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import { GeistSans } from "geist/font/sans";
import { PostHogProvider } from "./components/PostHogProvider";

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
    title: "Tanav Poswal",
    card: "summary_large_image",
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
      <body className={"min-h-screen antialiased max-w-xl mx-auto " + GeistSans.className}>
        <PostHogProvider>
          <NextTopLoader showSpinner={false} color="#242423" />
          <Navbar />
          <main className="flex-auto flex flex-col px-4 min-h-[80vh]">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center divide-x-2 divide-neutral-700 select-none">
            <Image
              src="/images/initial.png"
              className="opacity-50 select-none invert brightness-100"
              draggable={false}
              width={150}
              height={150}
              alt="signature"
            />
          </footer>
        </PostHogProvider>
      </body>
    </html>
  );
}
