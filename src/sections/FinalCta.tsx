import { ShieldCheck } from "lucide-react";
import { cta, finalCta } from "../data/content";
import { CheckoutButton } from "../components/CheckoutButton";
import { TitleText } from "../components/Text";

export function FinalCta() {
  return (
    <section aria-labelledby="final-titulo" className="mx-auto max-w-[1200px] px-4 py-24 text-center sm:px-8 lg:py-36">
      <h2 id="final-titulo" data-reveal className="title-xl mx-auto max-w-5xl">
        <TitleText title={finalCta.title} />
      </h2>
      <div data-reveal className="mt-10 flex flex-col items-center gap-4">
        <CheckoutButton shine className="w-full sm:w-auto">
          {cta.primary}
        </CheckoutButton>
        <p className="flex items-center gap-2 text-sm font-semibold text-muted">
          <ShieldCheck aria-hidden="true" size={18} className="text-pink" />
          {cta.guarantee}
        </p>
      </div>
    </section>
  );
}
