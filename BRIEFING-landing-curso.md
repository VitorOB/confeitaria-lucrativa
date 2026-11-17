# BRIEFING — Projeto 06: Landing page "Confeitaria Lucrativa" (curso online)

## 0. Contexto (leia primeiro)

Este é um site demonstrativo para o portfólio de um serviço de criação de sites e landing pages. Ele será mostrado a produtores de cursos online (confeiteiras, nutricionistas, personal trainers, mentores) como exemplo de **página de vendas**.

- É uma **landing page**: um único objetivo (levar ao botão de compra), **sem menu de navegação** e sem links que levem o visitante para fora, exceto o checkout.
- Visual escuro premium com rosa vibrante, **com animações marcantes, mas elegantes**. É o projeto do portfólio que mostra domínio de animação e de copy de vendas.
- O portfólio já tem um site escuro (Lume, preto e dourado, serifado e sóbrio). Este precisa ter energia diferente: moderno, vibrante e com movimento.
- **Não invente depoimentos, números de alunas, faturamento ou resultados.** Depoimentos, preço, nome da professora e tempo de acesso ficam como espaços claramente marcados para preencher.
- Fora do escopo: backend, checkout real, área de membros e captura de e-mail com envio.

## 1. Prioridades (em caso de conflito, siga esta ordem)

1. Persuasão e clareza no celular: a maior parte do tráfego vem de anúncios no Instagram.
2. Animação de qualidade, que reforça a mensagem sem atrasar a leitura nem o botão de compra.
3. Acessibilidade WCAG 2.2 AA, incluindo `prefers-reduced-motion`.
4. Desempenho: Lighthouse mobile ≥ 90, **mesmo com as animações**.
5. Todos os textos e dados em `src/data/content.ts`.

## 2. Identidade visual

### Paleta

| Uso | Cor |
|---|---|
| Fundo | `#140D10` |
| Superfícies e cartões | `#1F161A` |
| Bordas e linhas | `#33262C`, e `#4A3840` para bordas mais fortes |
| Texto principal | `#F7F0F2` |
| Texto secundário | `#BFAEB4` |
| Destaque (rosa): botões, palavras em itálico e detalhes | `#FF6B95` |
| Texto sobre botão rosa | `#140D10` |
| Caixa de preço | fundo `#F7F0F2`, texto `#140D10` |

Verifique o contraste de toda combinação nova.

### Tipografia

- Títulos e interface: **Sora** (600–800), letter-spacing negativo forte nos títulos grandes (cerca de -0.045em).
- Palavras de destaque: **Playfair Display itálico** (500), em rosa, uma por título (ex.: "Sua cozinha pode virar o seu *negócio*.").
- Títulos: h1 de cerca de 78px no desktop e 44px no celular, com `clamp()`. Os h2 ficam com cerca de 54px.

### Direção

- Fotos grandes de doces em close, com luz dramática e fundo escuro.
- Cantos bem arredondados (28–40px).
- Botões em pílula.
- Nada de gradientes chamativos, neon ou glow exagerado.

## 3. Estrutura e textos

### 3.1 Cabeçalho mínimo

- Logo textual: CONFEITARIA **LUCRATIVA** (a segunda palavra em rosa).
- Um único link em pílula, "Inscrições abertas →", que rola até a oferta.
- Sem menu.

### 3.2 Hero

- h1: **Sua cozinha pode virar o seu *negócio*.**
- Subtítulo: *Receitas testadas, preço com lucro e vendas pelo Instagram e pelo WhatsApp. Do zero às primeiras encomendas.*
- Botão rosa **Quero entrar na turma** e, ao lado, o texto "Garantia de 7 dias".
- À direita, uma foto grande de doces (cantos de 36px) com dois elementos sobrepostos:
  - **Cartão flutuante claro** no canto inferior esquerdo: ícone de play rosa, "Aula 01" e "Base da confeitaria".
  - **Selo escuro** no topo direito: "5 módulos · no seu ritmo".
- No celular, a foto vem abaixo do texto e o cartão flutuante continua visível.

### 3.3 Faixa de palavras (marquee)

Faixa de largura total, com linhas finas em cima e embaixo, em Playfair itálico e cor `#BFAEB4`:

brownie recheado ✦ bolo no pote ✦ brigadeiro gourmet ✦ palha italiana ✦ doces de festa

Os ✦ ficam em rosa e devem ser decorativos (`aria-hidden`). Os nomes dos doces aparecem para leitores de tela uma vez só.

### 3.4 Esse curso é pra você?

Dois cartões:

- **Sim, se você…** (cartão sólido): quer uma renda extra sem sair de casa · já faz doces, mas não sabe quanto cobrar · posta no Instagram e as encomendas não vêm · está começando do zero.
- **Não, se você…** (cartão com borda tracejada): procura dinheiro rápido sem trabalho · quer abrir uma confeitaria industrial · não vai praticar as receitas.

### 3.5 O conteúdo (módulos)

Lista com número gigante, título e descrição, separados por linhas:

1. **Base da confeitaria.** Massas, recheios e coberturas que não falham.
2. **Os doces que mais vendem.** Bolos no pote, brownies e doces de festa.
3. **Precificação com lucro.** O módulo que muda o jogo: cobre o preço certo.
4. **Fotos que dão água na boca.** Com o celular e luz natural.
5. **Vendas no Instagram e no WhatsApp.** Do primeiro post à primeira encomenda.

### 3.6 Quem vai te ensinar

- Foto grande da professora, com o rótulo "QUEM VAI TE ENSINAR".
- Título: [Nome da *professora*].
- Texto de placeholder, claramente marcado, para a história real.

### 3.7 Quem já fez

- Três cartões de depoimento com citações em Playfair itálico.
- Use `[Depoimento real de aluna]` e `[Nome] · [cidade]` como placeholders visíveis.
- Em `content.ts`, inclua `showTestimonials`. Se não houver depoimentos reais, a seção some.

### 3.8 Oferta (`id="oferta"`)

- Cartão grande com borda rosa de 2px.
- À esquerda, "Tudo o que você *recebe*", com uma lista de checks: 5 módulos em vídeo · Planilha de precificação · Bônus: 30 legendas prontas · Acesso por [tempo].
- À direita, a caixa clara de preço: "Investimento", **12x [R$ XX]**, "ou [R$ XXX] à vista", botão escuro **Quero entrar na turma** e "Garantia de 7 dias · pagamento seguro".
- O botão aponta para `checkoutUrl` em `content.ts`. Se o campo estiver vazio, o botão rola até a própria oferta e mostra o aviso discreto "checkout demonstrativo".

### 3.9 Dúvidas

Use `<details>` acessíveis:

- Preciso ter experiência?
- Preciso de equipamentos caros?
- Como recebo o acesso?
- E se eu não gostar? (Garantia de 7 dias, com devolução do valor.)

### 3.10 Chamada final

- Título enorme centralizado: **A primeira encomenda está *mais perto* do que parece.**
- Botão rosa.

### 3.11 Rodapé

- "Confeitaria Lucrativa · Página demonstrativa".
- Crédito do portfólio: "Página criada por [NOME] — quer uma página de vendas assim? [Fale comigo]", com link para `creatorWhatsapp`.

### 3.12 Barra de compra fixa (só no celular)

- Aparece depois do hero e some quando a seção de oferta está visível.
- Mostra "12x [R$ XX]" e o botão "Quero entrar".
- Reserve espaço no fim da página para ela não cobrir conteúdo.

## 4. Plano de animação

Use a biblioteca **Motion** (`motion`). Para coisas simples, CSS e IntersectionObserver bastam. Não use GSAP, Lottie nem bibliotecas de scroll pesadas.

1. **Entrada do hero:** o h1 entra palavra por palavra (fade e subida de 24px, intervalo de 60 ms). A palavra em itálico rosa entra por último, com um leve aumento de escala. Depois aparecem o subtítulo e o botão, e então a foto, com fade e escala de 0.96 para 1.
2. **Cartão flutuante:** flutua devagar para cima e para baixo (±8px, ciclo de cerca de 6 s). O selo do topo entra com atraso, deslizando da direita.
3. **Marquee:** a faixa de palavras rola continuamente, só com CSS e `transform` (duplique o conteúdo para o loop não ter emenda). Pausa no hover e quando o foco do teclado está dentro dela.
4. **Revelação na rolagem:** títulos das seções com fade e subida. Os cartões entram em sequência (intervalo de 80 ms). Tudo anima uma vez só.
5. **Módulos com destaque ativo:** ao rolar pela lista, o número do módulo que está no centro da tela passa de `#4A3840` para rosa, com transição suave. Os outros voltam ao tom apagado.
6. **Hover dos botões:** leve elevação e escala de 1.03 com transição de 150 ms. O botão principal tem um brilho sutil passando uma vez no hover. Nada de efeito contínuo.
7. **Oferta:** quando o cartão entra na tela, a borda rosa "desenha" em volta dele uma vez. Use uma técnica leve, sem SVG pesado.

**Regras de animação (obrigatórias):**

- Anime só `transform` e `opacity`, exceto a cor do número do módulo e a borda da oferta.
- Nenhuma animação pode causar layout shift (CLS precisa ficar em 0).
- O h1 e o botão do hero precisam estar visíveis e clicáveis em até 1 s. A animação não pode atrasar o LCP: a foto do hero aparece sem esperar a sequência de animação.
- Com `prefers-reduced-motion: reduce`:
  - Tudo aparece estático e imediatamente.
  - O marquee fica parado, mostrando as palavras em linha que quebra.
  - O cartão flutuante fica parado.
- Todo o conteúdo precisa ser legível mesmo se o JavaScript falhar.
- No celular, as animações ficam mais curtas e mais sutis. Desligue a flutuação contínua se ela atrapalhar o desempenho.

## 5. Conteúdo centralizado (`src/data/content.ts`)

Todos os textos, módulos, bônus, dúvidas, depoimentos, preço e links ficam nesse arquivo.

```ts
export const offer = {
  installments: "12x [R$ XX]",
  cashPrice: "[R$ XXX] à vista",
  accessTime: "[tempo]",
  checkoutUrl: "",       // link do checkout (Hotmart, Kiwify etc.)
  guaranteeDays: 7,
};
export const showTestimonials = true;
export const creator = { name: "", whatsapp: "" };
```

## 6. Imagens

- Busque e baixe as fotos no Pexels ou no Unsplash. Se houver `PEXELS_API_KEY` ou `UNSPLASH_ACCESS_KEY` no `.env`, use a API oficial. Nunca invente URLs.
- Estilo: doces em close, fundo escuro e luz lateral dramática (brownie, bolo no pote, brigadeiros). Para a professora: uma confeiteira trabalhando, sem rosto em close de banco de imagem genérico.
- **Abra cada imagem para conferir.** Rejeite fotos claras demais, com fundo branco ou com marca d'água. Elas precisam combinar com o fundo `#140D10`.
- Arquivos: `hero-doces.jpg`, `professora.jpg` e, opcionalmente, `textura-1.jpg` e `textura-2.jpg` para detalhes.
- Registre os créditos em `CREDITS.md`.

**Otimização:**

- WebP em 2 tamanhos, com `srcset`/`sizes`.
- `fetchpriority="high"` na foto do hero.
- Pré-carregar Sora 800.
- `loading="lazy"` no resto, com `width` e `height` definidos.

## 7. Stack

- React, TypeScript, Vite, Tailwind CSS, Lucide React e Motion.
- Deploy na Vercel.
- Repositório no GitHub chamado `confeitaria-lucrativa`.

## 8. Acessibilidade e SEO

- HTML semântico, um único `h1` e link "Pular para o conteúdo".
- Foco visível em rosa, alvos de toque de pelo menos 44px, zoom de 200% e telas de 320px sem rolagem horizontal.
- O marquee e os elementos decorativos não podem atrapalhar leitores de tela.
- `lang="pt-BR"`.
- `title`, `meta description`, Open Graph com imagem 1200×630 no estilo da página e favicon em SVG.
- JSON-LD do tipo `Course`, só com os dados preenchidos.

## 9. Como trabalhar

1. Inspecione a pasta.
2. Apresente o plano: componentes, como cada animação será feita e lista de imagens.
3. Implemente primeiro todo o conteúdo estático e responsivo. **Só depois** acrescente as animações, uma por vez.
4. Rode `tsc --noEmit`, lint e build, e corrija o que aparecer.
5. Relatório final:
   - Arquivos criados.
   - Como rodar localmente.
   - O que preencher em `content.ts`.
   - Imagens faltantes.
   - O que não foi possível testar visualmente.

Não afirme que fez testes visuais se não os executou.
