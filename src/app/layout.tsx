import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE, VERSE, asset } from "@/lib/site";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE.url}/`),
  title: {
    default: "CLOSER Conference 2026 — Conferință de tineret",
    template: "%s · CLOSER Conference 2026",
  },
  description:
    "CLOSER Conference 2026 — o conferință de tineret creștin. Sâmbătă, 21 Noiembrie 2026. „Caută fața Mea!” (Psalmii 27:8). Închinare, Cuvânt și comunitate. Înscrie-te acum.",
  keywords: [
    "CLOSER",
    "CLOSER Conference 2026",
    "conferință tineret",
    "conferință creștină",
    "tineret creștin",
    "închinare",
    "worship",
    "Psalmii 27:8",
    "Beclean",
    "Biserica Sfânta Treime",
    "România",
    "2026",
  ],
  authors: [{ name: "CLOSER Conference" }],
  creator: "CLOSER Conference",
  applicationName: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: SITE.name,
    title: "CLOSER Conference 2026 — Conferință de tineret",
    description: `${VERSE.text} — ${VERSE.reference}. Sâmbătă, 21 Noiembrie 2026.`,
    images: [
      {
        url: "images/closer-banner.PNG",
        width: 3039,
        height: 1350,
        alt: "CLOSER Conference 2026 — 21 Noiembrie 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLOSER Conference 2026",
    description:
      "Conferință de tineret creștin · 21 Noiembrie 2026 · „Caută fața Mea!”",
    images: ["images/closer-banner.PNG"],
  },
  icons: {
    icon: asset("/images/closer-logo.jpg"),
    apple: asset("/images/closer-logo.jpg"),
  },
  robots: {
    index: true,
    follow: true,
  },
  // Stop iOS Safari from auto-linking times/dates/numbers (e.g. "15:00",
  // "27:8", "21 Noiembrie 2026"), which would rewrite the DOM and could
  // otherwise trigger hydration mismatches on iPhone.
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  category: "event",
};

export const viewport: Viewport = {
  themeColor: "#ece7dd",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="grain antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
