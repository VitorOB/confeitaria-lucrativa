import { teacher } from "../data/content";
import { Picture } from "../components/Picture";
import { Accent, Fill } from "../components/Text";

/** "Nome Sobrenome" → "Nome" + destaque em "Sobrenome". Sem nome, mostra o espaço a preencher. */
function TeacherName() {
  const name = teacher.name.trim();
  if (!name) {
    return (
      <span className="ph">
        [Nome da <Accent>professora</Accent>]
      </span>
    );
  }
  const parts = name.split(" ");
  const last = parts.pop();
  return parts.length ? (
    <>
      {parts.join(" ")} <Accent>{last}</Accent>
    </>
  ) : (
    <Accent>{last}</Accent>
  );
}

export function Teacher() {
  return (
    <section aria-labelledby="professora-titulo" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <figure data-reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[36px] bg-surface">
            <Picture
              name={teacher.image.name}
              alt={teacher.image.alt}
              sizes="(min-width: 1024px) 540px, calc(100vw - 32px)"
            />
          </div>
          <p className="absolute top-5 left-5 rounded-full bg-pink px-4 py-2 text-xs font-bold tracking-[0.14em] text-on-pink uppercase">
            {teacher.label}
          </p>
          <figcaption className="mt-3 text-sm text-muted">
            <Fill>{teacher.image.caption}</Fill>
          </figcaption>
        </figure>

        <div data-reveal>
          <h2 id="professora-titulo" className="title-lg">
            <TeacherName />
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted">
            {teacher.bio.map((paragraph) => (
              <p key={paragraph}>
                <Fill>{paragraph}</Fill>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
