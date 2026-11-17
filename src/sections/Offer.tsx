import { Check, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { useContent } from "../i18n/lang";
import { CheckoutButton, DEMO_CHECKOUT_EVENT } from "../components/CheckoutButton";
import { Fill, TitleText } from "../components/Text";

/** Conta os cliques em botões de compra demonstrativos, para mostrar o aviso. */
function useDemoNotice() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const show = () => setCount((n) => n + 1);
    window.addEventListener(DEMO_CHECKOUT_EVENT, show);
    return () => window.removeEventListener(DEMO_CHECKOUT_EVENT, show);
  }, []);
  return count;
}

export function Offer() {
  const { c, t } = useContent();
  const { cta, offer, offerSection } = c;
  const noticeCount = useDemoNotice();

  return (
    <section id="oferta" aria-labelledby="oferta-titulo" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-8 lg:py-24">
      <div
        data-draw
        className="offer-card grid gap-10 rounded-[40px] p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:p-14"
      >
        <div data-reveal>
          <h2 id="oferta-titulo" className="title-lg">
            <TitleText title={offerSection.title} />
          </h2>
          <ul className="mt-8 space-y-4">
            {offerSection.items.map((item) => (
              <li key={item} className="flex items-start gap-3.5 text-lg font-semibold">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-pink text-on-pink"
                >
                  <Check size={16} strokeWidth={3} />
                </span>
                <span>
                  <Fill>{item}</Fill>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="rounded-[32px] bg-paper p-7 text-center text-on-paper sm:p-10">
          <p className="text-xs font-bold tracking-[0.16em] text-on-paper-muted uppercase">{offerSection.priceLabel}</p>
          <p className="mt-3 text-[clamp(2.5rem,1.8rem+3vw,3.5rem)] leading-none font-extrabold tracking-[-0.045em]">
            <Fill>{offer.installments}</Fill>
          </p>
          <p className="mt-3 text-on-paper-muted">
            {t.or} <Fill>{offer.cashPrice}</Fill>
          </p>
          <CheckoutButton variant="dark" shine className="mt-7 w-full">
            {cta.primary}
          </CheckoutButton>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-on-paper-muted">
            <Lock aria-hidden="true" size={15} />
            {offerSection.secure}
          </p>
          <div role="status">
            {noticeCount > 0 && (
              <p
                key={noticeCount}
                className="demo-notice-show mt-4 rounded-2xl border border-dashed border-on-paper-muted px-4 py-3 text-sm text-on-paper"
              >
                {cta.demoNotice}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
