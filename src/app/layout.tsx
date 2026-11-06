import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import { Announcement } from "@/components/announcement";
import { BrandLockup } from "@/components/brand-lockup";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { getSiteUrl } from "@/config/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "muzyhr — HR infrastructure for growing businesses",
    template: "%s — muzyhr",
  },
  description:
    "muzyhr is founder-led HR consulting in Montréal for growing businesses. Practical people operations support, from benefits administration and onboarding to HR infrastructure and process improvement.",
  applicationName: "muzyhr",
  authors: [{ name: "Tamara Siziba", url: "https://www.linkedin.com/in/tamara-siziba-257632220/" }],
  creator: "Tamara Siziba",
  category: "Human resources consulting",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "muzyhr",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F5F1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${display.variable} ${body.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory font-body text-ink">
        <JsonLd />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Announcement />
        <Suspense
          fallback={
            <div className="site-header sticky top-0 z-40 flex h-[var(--header-h)] items-center">
              <div className="mx-auto flex w-full max-w-[80rem] px-5 sm:px-8 lg:px-12">
                <BrandLockup priority />
              </div>
            </div>
          }
        >
          <Header />
        </Suspense>
        <main id="content" className="page-enter">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
