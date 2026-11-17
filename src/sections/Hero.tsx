import { Play, ShieldCheck } from "lucide-react";
import { useContent } from "../i18n/lang";
import { CheckoutButton } from "../components/CheckoutButton";
import { Picture } from "../components/Picture";

/** Divide o título em palavras para a entrada palavra por palavra (CSS). */
function HeroTitle() {
  const { hero } = useContent().c;
  const words = hero.title.before.split(" ");
  const accentIndex = words.length;
  return (
    <h1 className="title-xl">
      {words.map((word, i) => (
        <span key={i}>
          <span className="hero-word" style={{ "--i": i } as React.CSSProperties}>
            {word}
          </span>{" "}
        </span>
      ))}
      <span className="hero-word hero-word-accent" style={{ "--i": accentIndex } as React.CSSProperties}>
        <em className="accent">{hero.title.accent}</em>
        {hero.title.after}
      </span>
    </h1>
  );
}

export function Hero() {
  const { c, t } = useContent();
  const { cta, hero } = c;
  return (
    <section
      id="inicio"
      aria-label={t.heroLabel}
      className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 pt-6 pb-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pt-12 lg:pb-24"
    >
      <div>
        <HeroTitle />
        <p
          className="hero-after mt-6 max-w-xl text-lg text-muted sm:text-xl"
          style={{ "--d": "480ms" } as React.CSSProperties}
        >
          {hero.subtitle}
        </p>
        <div
          className="hero-after mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
          style={{ "--d": "580ms" } as React.CSSProperties}
        >
          <CheckoutButton shine className="w-full sm:w-auto">
            {cta.primary}
          </CheckoutButton>
          <p className="flex items-center gap-2 text-sm font-semibold text-muted">
            <ShieldCheck aria-hidden="true" size={18} className="text-pink" />
            {cta.guarantee}
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end">
        <div className="hero-photo relative aspect-[4/5] overflow-hidden rounded-[36px] bg-surface">
          <Picture
            name={hero.image.name}
            alt={hero.image.alt}
            priority
            sizes="(min-width: 600px) 520px, calc(100vw - 32px)"
          />
          <div aria-hidden="true" className="hero-photo-veil pointer-events-none absolute inset-0 bg-bg opacity-0" />
        </div>

        <p className="hero-badge absolute top-4 right-4 rounded-full border border-line-strong bg-bg/90 px-4 py-2 text-[0.8125rem] font-semibold text-ink backdrop-blur-sm sm:top-6 sm:right-6">
          {hero.badge}
        </p>

        <div className="hero-float absolute bottom-4 left-4 flex items-center gap-3 rounded-[22px] bg-paper py-3 pr-5 pl-3 text-on-paper shadow-[0_24px_48px_-20px_rgb(0_0_0/0.7)] sm:bottom-8 lg:-left-10">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-pink text-on-pink" aria-hidden="true">
            <Play size={18} fill="currentColor" strokeWidth={0} className="translate-x-px" />
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-bold tracking-[0.12em] text-on-paper-muted uppercase">
              {hero.floatingCard.kicker}
            </span>
            <span className="block text-[0.9375rem] font-bold">{hero.floatingCard.title}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
