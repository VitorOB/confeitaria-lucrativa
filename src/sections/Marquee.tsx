import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { marquee } from "../data/content";

function Group({ copy = false }: { copy?: boolean }) {
  const List = copy ? "div" : "ul";
  const Item = copy ? "span" : "li";
  return (
    <List className={`marquee-group ${copy ? "marquee-copy" : ""}`} aria-hidden={copy || undefined}>
      {marquee.map((word) => (
        <Item key={word} className="flex items-center">
          <span className="font-accent px-5 font-medium text-[1.625rem] whitespace-nowrap text-muted italic sm:px-7 sm:text-[2rem]">
            {word}
          </span>
          <span aria-hidden="true" className="text-lg text-pink">
            ✦
          </span>
        </Item>
      ))}
    </List>
  );
}

export function Marquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="marquee relative border-y border-line py-5"
      data-paused={paused}
      role="region"
      aria-label="Doces que você vai aprender"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          <Group />
          <Group copy />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="marquee-toggle absolute top-1/2 right-2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-bg text-muted transition-colors hover:text-pink sm:right-4"
      >
        {paused ? <Play aria-hidden="true" size={16} /> : <Pause aria-hidden="true" size={16} />}
        <span className="sr-only">Pausar a faixa animada</span>
      </button>
    </div>
  );
}
