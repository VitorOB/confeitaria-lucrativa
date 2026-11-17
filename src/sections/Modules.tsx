import { useEffect, useRef, useState } from "react";
import { modules } from "../data/content";
import { Picture } from "../components/Picture";
import { SectionHeading } from "../components/SectionHeading";

/** Marca como ativo o módulo que cruza a linha do meio da tela. */
function useActiveModule(count: number) {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>("[data-index]");
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [count]);

  return { listRef, active };
}

export function Modules() {
  const { listRef, active } = useActiveModule(modules.items.length);

  return (
    <section aria-labelledby="modulos-titulo" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <SectionHeading id="modulos-titulo" eyebrow={modules.eyebrow} title={modules.title} intro={modules.intro} />
          <div className="mt-10 hidden aspect-[4/5] max-w-[360px] overflow-hidden rounded-[32px] bg-surface lg:block">
            <Picture name={modules.image.name} alt={modules.image.alt} sizes="360px" />
          </div>
        </div>

        <ol ref={listRef} className="border-t border-line">
          {modules.items.map((item, i) => (
            <li
              key={item.title}
              data-index={i}
              data-active={active === i}
              className="module-item grid grid-cols-[auto_1fr] items-baseline gap-x-5 border-b border-line py-8 sm:gap-x-8 sm:py-10"
            >
              <span
                aria-hidden="true"
                className="module-number w-[1.15em] text-[4.25rem] leading-[0.8] font-extrabold tracking-[-0.06em] tabular-nums sm:text-[6.5rem]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">Módulo {i + 1}</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-muted sm:text-lg">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
