import { creator, footer } from "../data/content";
import { Fill } from "../components/Text";

function whatsappLink() {
  const digits = creator.whatsapp.replace(/\D/g, "");
  if (!digits) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(footer.whatsappMessage)}`;
}

export function Footer() {
  const link = whatsappLink();
  const name = creator.name.trim() || "[NOME]";
  return (
    // No celular, o espaço extra no fim reserva o lugar da barra de compra fixa.
    <footer className="border-t border-line pb-[calc(88px+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-10 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>{footer.line}</p>
        <p>
          {footer.creditBefore} <Fill>{name}</Fill> — {footer.creditQuestion}{" "}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center font-semibold text-pink underline underline-offset-4"
            >
              {footer.creditLink}
              <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
            </a>
          ) : (
            <span className="font-semibold text-ink">
              <Fill>{`[${footer.creditLink}]`}</Fill>
            </span>
          )}
        </p>
      </div>
    </footer>
  );
}
