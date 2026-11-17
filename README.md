# Confeitaria Lucrativa: landing page de curso online

Página de vendas demonstrativa (portfólio). React, TypeScript, Vite, Tailwind CSS 4, Lucide e Motion.
O HTML é pré-renderizado no build, então o conteúdo aparece mesmo sem JavaScript.

## Rodar

```bash
npm install
npm run dev        # desenvolvimento (http://localhost:5173)
npm run build      # typecheck + build + pré-renderização em dist/
npm run preview    # serve o dist/
npm run lint
```

## Onde editar

Todos os textos, preço, links e chaves ficam em `src/data/content.ts`.
Trechos entre colchetes (`[R$ XX]`) são espaços a preencher e aparecem sublinhados na página.

- `offer.checkoutUrl`: link do checkout. Vazio = os botões rolam até a oferta e mostram "checkout demonstrativo".
- `showTestimonials`: `false` esconde a seção de depoimentos.
- `creator.name` / `creator.whatsapp`: crédito no rodapé.
- `seo.siteUrl`: domínio final (deixa a imagem do Open Graph com URL absoluta e entra no JSON-LD).

## Deploy

Vercel, com as configurações padrão de Vite (`npm run build`, saída `dist`).
