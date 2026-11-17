import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { brand, hero, offer, seo, teacher } from "./data/content";
import { LanguageProvider } from "./i18n/LanguageProvider";

/** Usado só no build, por scripts/prerender.mjs. O HTML estático sai em português. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <LanguageProvider initialLang="pt">
        <App />
      </LanguageProvider>
    </StrictMode>,
  );
}

/** Ainda é espaço a preencher? (vazio ou com colchetes) */
const isFilled = (value: string) => value.trim() !== "" && !/\[[^\]]*\]/.test(value);

/** JSON-LD do tipo Course, só com os dados já preenchidos em content.ts. */
export function jsonLd(): string {
  const course: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: brand.name,
    description: seo.description,
    inLanguage: "pt-BR",
    provider: { "@type": "Organization", name: brand.name, ...(isFilled(seo.siteUrl) ? { url: seo.siteUrl } : {}) },
    teaches: hero.subtitle,
  };

  if (isFilled(teacher.name)) {
    course.instructor = { "@type": "Person", name: teacher.name };
  }
  if (isFilled(seo.siteUrl)) course.url = seo.siteUrl;

  const price = offer.cashPrice.match(/[\d.,]+/)?.[0];
  if (isFilled(offer.cashPrice) && price) {
    course.offers = {
      "@type": "Offer",
      category: "Paid",
      price: price.replace(/\./g, "").replace(",", "."),
      priceCurrency: "BRL",
      ...(isFilled(offer.checkoutUrl) ? { url: offer.checkoutUrl } : {}),
    };
  }

  return JSON.stringify(course).replace(/</g, "\u003c");
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Title, description e Open Graph, gerados a partir de content.ts. */
export function head(): string {
  const base = isFilled(seo.siteUrl) ? seo.siteUrl.replace(/\/$/, "") : "";
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:locale:alternate" content="en_US" />`,
    // Versões por idioma (o inglês é a mesma página com ?lang=en).
    base ? `<link rel="alternate" hreflang="pt-BR" href="${base}/" />` : "",
    base ? `<link rel="alternate" hreflang="en" href="${base}/?lang=en" />` : "",
    base ? `<link rel="alternate" hreflang="x-default" href="${base}/" />` : "",
    `<meta property="og:site_name" content="${escapeHtml(brand.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    base ? `<meta property="og:url" content="${base}/" />` : "",
    `<meta property="og:image" content="${base}/images/og.jpg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Sua cozinha pode virar o seu negócio. Curso Confeitaria Lucrativa." />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  return tags.filter(Boolean).join("\n    ");
}
