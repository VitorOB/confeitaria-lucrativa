import { Plus } from "lucide-react";
import { faq } from "../data/content";
import { Picture } from "../components/Picture";
import { SectionHeading } from "../components/SectionHeading";
import { Fill } from "../components/Text";

export function Faq() {
  return (
    <section aria-labelledby="duvidas-titulo" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading id="duvidas-titulo" eyebrow={faq.eyebrow} title={faq.title} />
          <div className="mt-10 hidden aspect-[4/5] max-w-[300px] overflow-hidden rounded-[32px] bg-surface lg:block">
            <Picture name={faq.image.name} alt={faq.image.alt} sizes="300px" />
          </div>
        </div>
        <div data-reveal-group className="border-t border-line">
          {faq.items.map((item) => (
            <details key={item.q} className="faq-item group border-b border-line">
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-6 py-6 text-lg font-bold tracking-tight sm:text-xl">
                {item.q}
                <span
                  aria-hidden="true"
                  className="faq-icon grid size-10 shrink-0 place-items-center rounded-full border border-line-strong text-pink group-hover:border-pink"
                >
                  <Plus size={18} strokeWidth={2.5} />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-lg text-muted">
                <Fill>{item.a}</Fill>
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
