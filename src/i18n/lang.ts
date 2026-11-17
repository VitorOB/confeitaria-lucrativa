import { createContext, useContext } from "react";
import { contentPt, type Content } from "../data/content";
import { ui, type Lang, type UiText } from "../data/ui";

const STORAGE_KEY = "lang";

export interface ContentContextValue {
  lang: Lang;
  /** Textos de content.ts (ou content.en.ts) no idioma atual. */
  c: Content;
  /** Textos fixos da interface no idioma atual. */
  t: UiText;
  setLang: (lang: Lang) => void;
}

export const ContentContext = createContext<ContentContextValue>({
  lang: "pt",
  c: contentPt,
  t: ui.pt,
  setLang: () => {},
});

export const useContent = () => useContext(ContentContext);

const isLang = (v: unknown): v is Lang => v === "pt" || v === "en";

/** Ordem: ?lang= na URL → escolha salva → idioma do navegador (português = pt, outros = en). */
export function detectLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* armazenamento bloqueado: segue para o idioma do navegador */
  }
  const browser = navigator.languages?.[0] ?? navigator.language ?? "pt";
  return browser.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* sem armazenamento: a escolha vale só nesta visita */
  }
}
