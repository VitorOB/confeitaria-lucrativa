import { Check, X } from "lucide-react";
import { useContent } from "../i18n/lang";
import { SectionHeading } from "../components/SectionHeading";

export function ForWho() {
  const { forWho } = useContent().c;
  return (
    <section aria-labelledby="pra-quem-titulo" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 lg:py-28">
      <SectionHeading id="pra-quem-titulo" eyebrow={forWho.eyebrow} title={forWho.title} />
      <div data-reveal-group className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="rounded-[32px] bg-surface p-7 sm:p-10">
          <h3 className="text-2xl font-bold tracking-tight">{forWho.yes.title}</h3>
          <ul className="mt-6 space-y-4">
            {forWho.yes.items.map((item) => (
              <li key={item} className="flex gap-3.5 text-lg">
                <span aria-hidden="true" className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-pink text-on-pink">
                  <Check size={16} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] border-2 border-dashed border-line-strong p-7 sm:p-10">
          <h3 className="text-2xl font-bold tracking-tight">{forWho.no.title}</h3>
          <ul className="mt-6 space-y-4">
            {forWho.no.items.map((item) => (
              <li key={item} className="flex gap-3.5 text-lg text-muted">
                <span aria-hidden="true" className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line-strong text-muted">
                  <X size={15} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
