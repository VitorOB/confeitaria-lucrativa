import { ArrowRight } from "lucide-react";
import { brand, cta } from "../data/content";

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-5 sm:px-8">
      <p className="min-w-0 text-[0.75rem] leading-tight font-extrabold tracking-[0.12em] uppercase sm:text-sm sm:tracking-[0.14em]">
        {brand.first} <span className="text-pink">{brand.second}</span>
      </p>
      <a href="#oferta" className="pill-link shrink-0">
        {cta.header}
        <ArrowRight aria-hidden="true" size={16} strokeWidth={2.25} />
      </a>
    </header>
  );
}
