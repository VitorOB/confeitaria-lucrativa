import type { Title } from "../data/content";
import { TitleText } from "./Text";

type Props = {
  id: string;
  eyebrow?: string;
  title: Title;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({ id, eyebrow, title, intro, align = "left" }: Props) {
  const center = align === "center";
  return (
    <div data-reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 id={id} className="title-lg">
        <TitleText title={title} />
      </h2>
      {intro && <p className="mt-5 text-lg text-muted">{intro}</p>}
    </div>
  );
}
