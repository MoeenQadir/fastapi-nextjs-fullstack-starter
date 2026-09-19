import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MoeenDev — Full-Stack Operations Console",
    template: "%s · MoeenDev",
  },
  description:
    "A production-ready full-stack operations console by MoeenDev built with Next.js, FastAPI and background workers — view anything from records to service health in one place.",
  applicationName: "MoeenDev",
  keywords: [
    "MoeenDev",
    "full-stack",
    "Next.js",
    "FastAPI",
    "dashboard",
    "operations console",
    "Moeen",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "MoeenDev — Full-Stack Operations Console",
    description:
      "A production-ready full-stack operations console — Next.js + FastAPI + worker pipeline.",
    siteName: "MoeenDev",
  },
  twitter: {
    card: "summary",
    title: "MoeenDev — Full-Stack Operations Console",
    description:
      "A production-ready full-stack operations console — Next.js + FastAPI + worker pipeline.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f2fa" },
    { media: "(prefers-color-scheme: dark)", color: "#11141f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("moeendev-theme");
                  var dark = stored ? stored === "dark" : true;
                  var root = document.documentElement;
                  if (dark) root.classList.add("dark");
                  else root.classList.remove("dark");
                  if (stored === "light") root.classList.remove("dark");
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="h-full flex">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}