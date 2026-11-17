/** Textos fixos da interface (fora de content.ts), em português e inglês. */

export type Lang = "pt" | "en";

const pt = {
  skipLink: "Pular para o conteúdo",
  heroLabel: "Apresentação do curso",
  marqueeLabel: "Doces que você vai aprender",
  pauseMarquee: "Pausar a faixa animada",
  module: (n: number) => `Módulo ${n}`,
  or: "ou",
  whatsAppNote: "(abre o WhatsApp em nova aba)",
  namePlaceholder: "[NOME]",
  /** Espaço a preencher quando ainda não há o nome da professora. */
  teacherPlaceholder: { before: "Nome da", accent: "professora" },
  /** Botão de idioma: mostra o idioma de destino. */
  langSwitch: { short: "EN", label: "View in English", target: "en" as Lang },
};

const en: typeof pt = {
  skipLink: "Skip to content",
  heroLabel: "Course introduction",
  marqueeLabel: "Sweets you'll learn to make",
  pauseMarquee: "Pause the scrolling banner",
  module: (n: number) => `Module ${n}`,
  or: "or",
  whatsAppNote: "(opens WhatsApp in a new tab)",
  namePlaceholder: "[NAME]",
  teacherPlaceholder: { before: "Teacher's", accent: "name" },
  langSwitch: { short: "PT", label: "Ver em português", target: "pt" },
};

export const ui = { pt, en };
export type UiText = typeof pt;
