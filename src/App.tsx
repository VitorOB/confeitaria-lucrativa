import { Header } from "./components/Header";
import { showTestimonials } from "./data/content";
import { useContent } from "./i18n/lang";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { Footer } from "./sections/Footer";
import { ForWho } from "./sections/ForWho";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { MobileBuyBar } from "./sections/MobileBuyBar";
import { Modules } from "./sections/Modules";
import { Offer } from "./sections/Offer";
import { Teacher } from "./sections/Teacher";
import { Testimonials } from "./sections/Testimonials";

export default function App() {
  const { t } = useContent();
  useScrollAnimations();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-pink px-5 py-3 font-bold text-on-pink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.skipLink}
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee />
        <ForWho />
        <Modules />
        <Teacher />
        {showTestimonials && <Testimonials />}
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBuyBar />
    </>
  );
}
