import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HeroMobile } from "@/components/HeroMobile";
import { BannerMobile } from "@/components/BannerMobile";
import { Vision } from "@/components/Vision";
import { Lineup } from "@/components/Lineup";
import { Schedule } from "@/components/Schedule";
import { WorshipRoom } from "@/components/WorshipRoom";
import { Location } from "@/components/Location";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: SITE.name,
  startDate: `${SITE.dateISO}T15:00:00+02:00`,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  description:
    "Conferință de tineret creștin — închinare, Cuvânt și comunitate. „Caută fața Mea!” (Psalmii 27:8).",
  image: `${SITE.url}/images/closer-banner.PNG`,
  url: SITE.url,
  location: {
    "@type": "Place",
    name: "Biserica Sfânta Treime Beclean",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beclean",
      addressCountry: "RO",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "CLOSER Conference",
    url: SITE.url,
  },
  offers: {
    "@type": "Offer",
    url: SITE.registrationUrl,
    price: "0",
    priceCurrency: "RON",
    availability: "https://schema.org/InStock",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Nav />
      <span id="top" aria-hidden className="absolute top-0" />
      {/* Single document heading, always present for SEO/screen readers. */}
      <h1 className="sr-only">
        {SITE.name} — {SITE.dateLabel}. Conferință de tineret creștin, Biserica
        Sfânta Treime Beclean.
      </h1>
      <main>
        {/* Mobile-only hero (logo centerpiece) + banner poster; desktop hero
            is a separate, unchanged component shown from md upward. */}
        <HeroMobile />
        <Hero />
        <BannerMobile />
        <Vision />
        <Lineup />
        <Schedule />
        <WorshipRoom />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
