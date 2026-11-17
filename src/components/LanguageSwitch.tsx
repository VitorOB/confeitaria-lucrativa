import { useContent } from "../i18n/lang";

/** Botão PT/EN: mostra o idioma de destino. */
export function LanguageSwitch() {
  const { t, setLang } = useContent();
  const { short, label, target } = t.langSwitch;
  return (
    <button
      type="button"
      onClick={() => setLang(target)}
      className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-sm font-bold tracking-[0.06em] text-ink transition-colors hover:border-pink hover:text-pink"
    >
      <span lang={target === "en" ? "en" : "pt-BR"}>
        {short}
        <span className="sr-only"> — {label}</span>
      </span>
    </button>
  );
}
