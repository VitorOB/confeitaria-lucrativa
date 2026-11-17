import { Fragment, type ReactNode } from "react";
import type { Title } from "../data/content";

/** Destaca trechos entre colchetes ("[R$ XX]") como espaço a preencher. */
export function Fill({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") ? (
          <span key={i} className="ph">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <em className="accent">{children}</em>;
}

/** Título com uma palavra de destaque em Playfair itálico rosa. */
export function TitleText({ title }: { title: Title }) {
  return (
    <>
      {title.before} <Accent>{title.accent}</Accent>
      {title.after}
    </>
  );
}
