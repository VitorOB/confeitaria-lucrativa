import { useContent } from "../i18n/lang";
import { SectionHeading } from "../components/SectionHeading";
import { Fill } from "../components/Text";

export function Testimonials() {
  const { testimonials } = useContent().c;
  return (
    <section aria-labelledby="depoimentos-titulo" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 lg:py-28">
      <SectionHeading id="depoimentos-titulo" eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <ul data-reveal-group className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <li key={i}>
            <figure className="flex h-full flex-col rounded-[32px] bg-surface p-7 sm:p-8">
              <span aria-hidden="true" className="font-accent text-6xl leading-none text-pink italic">
                “
              </span>
              <blockquote className="font-accent mt-2 flex-1 text-2xl leading-snug font-medium italic">
                <p>
                  <Fill>{item.quote}</Fill>
                </p>
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5 text-sm font-semibold text-muted">
                <Fill>{`${item.name} · ${item.city}`}</Fill>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
