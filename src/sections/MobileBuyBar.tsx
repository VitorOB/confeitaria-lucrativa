import { useEffect, useState } from "react";
import { cta, offer } from "../data/content";
import { CheckoutButton } from "../components/CheckoutButton";
import { Fill } from "../components/Text";

/** Barra fixa só no celular: aparece depois do hero e some quando a oferta está visível. */
export function MobileBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const offerEl = document.getElementById("oferta");
    if (!hero || !offerEl) return;
    let pastHero = false;
    let offerInView = false;
    const update = () => setVisible(pastHero && !offerInView);

    const heroObserver = new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      update();
    });
    const offerObserver = new IntersectionObserver(([entry]) => {
      offerInView = entry.isIntersecting;
      update();
    });
    heroObserver.observe(hero);
    offerObserver.observe(offerEl);
    return () => {
      heroObserver.disconnect();
      offerObserver.disconnect();
    };
  }, []);

  return (
    <div
      data-visible={visible}
      aria-hidden={!visible}
      className="buy-bar fixed inset-x-0 bottom-0 z-40 border-t border-line-strong bg-surface/95 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-[600px] items-center justify-between gap-4">
        <p className="leading-tight">
          <span className="block text-xs text-muted">{cta.guarantee}</span>
          <span className="block text-lg font-extrabold tracking-tight">
            <Fill>{offer.installments}</Fill>
          </span>
        </p>
        <CheckoutButton size="sm" className="shrink-0">
          {cta.short}
        </CheckoutButton>
      </div>
    </div>
  );
}
