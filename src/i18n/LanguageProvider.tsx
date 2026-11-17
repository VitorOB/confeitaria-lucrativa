import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { contentPt } from "../data/content";
import { contentEn } from "../data/content.en";
import { ui, type Lang } from "../data/ui";
import { ContentContext, saveLang } from "./lang";

const contents = { pt: contentPt, en: contentEn };

/**
 * `initialLang` vem de fora porque o HTML é pré-renderizado no build (sempre em português)
 * e o navegador decide o idioma em main.tsx antes de montar o React.
 */
export function LanguageProvider({ initialLang = "pt", children }: { initialLang?: Lang; children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    saveLang(next);
    setLangState(next);
    // ?lang=en fica na URL para o link poder ser compartilhado já em inglês.
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);
  }, []);

  // Idioma do documento, título e descrição acompanham a escolha.
  useEffect(() => {
    const { seo } = contents[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
  }, [lang]);

  const value = useMemo(() => ({ lang, c: contents[lang], t: ui[lang], setLang }), [lang, setLang]);
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}
