/**
 * Todos os textos, dados e links da página ficam aqui.
 *
 * Trechos entre colchetes, como "[R$ XX]", são espaços para preencher.
 * Eles aparecem na página com sublinhado tracejado para ninguém esquecer.
 * Quando trocar pelo dado real, apague também os colchetes.
 */

/** Um título com uma única palavra de destaque (Playfair itálico, rosa). */
export type Title = { before: string; accent: string; after?: string };

/* ───────────────────────── Oferta e pagamento ───────────────────────── */

export const offer = {
  installments: "12x [R$ XX]",
  cashPrice: "[R$ XXX] à vista",
  accessTime: "[tempo]",
  /** Link do checkout (Hotmart, Kiwify etc.). Vazio = botão demonstrativo. */
  checkoutUrl: "",
  guaranteeDays: 7,
};

/** Se não houver depoimentos reais, troque para false e a seção some. */
export const showTestimonials = true;

/** Quem criou a página (crédito do portfólio no rodapé). */
export const creator = {
  name: "",
  /** Só números, com DDI e DDD. Ex.: "5511999998888". */
  whatsapp: "",
};

/* ───────────────────────── Marca e SEO ───────────────────────── */

export const brand = {
  first: "Confeitaria",
  second: "Lucrativa",
  name: "Confeitaria Lucrativa",
};

export const seo = {
  title: "Confeitaria Lucrativa | Curso online de confeitaria para vender",
  description:
    "Receitas testadas, preço com lucro e vendas pelo Instagram e pelo WhatsApp. Um curso online de confeitaria do zero às primeiras encomendas.",
  /** Domínio final, sem barra no fim. Usado no JSON-LD e no Open Graph. */
  siteUrl: "",
};

/* ───────────────────────── Botões ───────────────────────── */

export const cta = {
  primary: "Quero entrar na turma",
  short: "Quero entrar",
  header: "Inscrições abertas",
  guarantee: `Garantia de ${offer.guaranteeDays} dias`,
  demoNotice: "Checkout demonstrativo: nesta página de exemplo, o botão ainda não leva ao pagamento.",
};

/* ───────────────────────── Hero ───────────────────────── */

export const hero = {
  title: { before: "Sua cozinha pode virar o seu", accent: "negócio", after: "." } satisfies Title,
  subtitle:
    "Receitas testadas, preço com lucro e vendas pelo Instagram e pelo WhatsApp. Do zero às primeiras encomendas.",
  image: {
    name: "hero-doces",
    alt: "Colher derramando chocolate derretido sobre bombons com pistache, em fundo escuro.",
  },
  floatingCard: { kicker: "Aula 01", title: "Base da confeitaria" },
  badge: "5 módulos · no seu ritmo",
};

/* ───────────────────────── Faixa de palavras ───────────────────────── */

export const marquee = [
  "brownie recheado",
  "bolo no pote",
  "brigadeiro gourmet",
  "palha italiana",
  "doces de festa",
];

/* ───────────────────────── Pra quem é ───────────────────────── */

export const forWho = {
  eyebrow: "Antes de tudo",
  title: { before: "Esse curso é", accent: "pra você", after: "?" } satisfies Title,
  yes: {
    title: "Sim, se você…",
    items: [
      "quer uma renda extra sem sair de casa",
      "já faz doces, mas não sabe quanto cobrar",
      "posta no Instagram e as encomendas não vêm",
      "está começando do zero",
    ],
  },
  no: {
    title: "Não, se você…",
    items: [
      "procura dinheiro rápido sem trabalho",
      "quer abrir uma confeitaria industrial",
      "não vai praticar as receitas",
    ],
  },
};

/* ───────────────────────── Módulos ───────────────────────── */

export const modules = {
  eyebrow: "O conteúdo",
  title: { before: "O que você vai", accent: "aprender", after: "" } satisfies Title,
  intro: "Cinco módulos, na ordem em que um negócio de doces acontece de verdade.",
  image: {
    name: "textura-1",
    alt: "Pedaços de brownie empilhados em um prato, com luz lateral e fundo escuro.",
  },
  items: [
    { title: "Base da confeitaria.", text: "Massas, recheios e coberturas que não falham." },
    { title: "Os doces que mais vendem.", text: "Bolos no pote, brownies e doces de festa." },
    { title: "Precificação com lucro.", text: "O módulo que muda o jogo: cobre o preço certo." },
    { title: "Fotos que dão água na boca.", text: "Com o celular e luz natural." },
    { title: "Vendas no Instagram e no WhatsApp.", text: "Do primeiro post à primeira encomenda." },
  ],
};

/* ───────────────────────── Professora ───────────────────────── */

export const teacher = {
  label: "Quem vai te ensinar",
  /** Deixe vazio enquanto não houver o nome: aparece "[Nome da professora]". */
  name: "",
  bio: [
    "[Conte aqui a história real da professora: como começou na confeitaria e há quanto tempo vende doces.]",
    "[Explique por que ela criou o curso e o que a aluna pode esperar das aulas. Dois ou três parágrafos curtos bastam.]",
  ],
  image: {
    name: "professora",
    alt: "Confeiteira de avental preto batendo as mãos cheias de farinha sobre uma massa.",
    caption: "[Foto ilustrativa: troque pela foto da professora]",
  },
};

/* ───────────────────────── Depoimentos ───────────────────────── */

export const testimonials = {
  eyebrow: "Quem já fez",
  title: { before: "Quem já fez,", accent: "conta", after: "." } satisfies Title,
  items: [
    { quote: "[Depoimento real de aluna]", name: "[Nome]", city: "[cidade]" },
    { quote: "[Depoimento real de aluna]", name: "[Nome]", city: "[cidade]" },
    { quote: "[Depoimento real de aluna]", name: "[Nome]", city: "[cidade]" },
  ],
};

/* ───────────────────────── Oferta ───────────────────────── */

export const offerSection = {
  title: { before: "Tudo o que você", accent: "recebe", after: "" } satisfies Title,
  items: [
    "5 módulos em vídeo",
    "Planilha de precificação",
    "Bônus: 30 legendas prontas",
    `Acesso por ${offer.accessTime}`,
  ],
  priceLabel: "Investimento",
  secure: `Garantia de ${offer.guaranteeDays} dias · pagamento seguro`,
};

/* ───────────────────────── Dúvidas ───────────────────────── */

export const faq = {
  eyebrow: "Dúvidas",
  title: { before: "Ficou alguma", accent: "dúvida", after: "?" } satisfies Title,
  image: {
    name: "textura-2",
    alt: "Bombons embrulhados em papel cobre dentro de uma tigela de metal, sobre tecido verde escuro.",
  },
  items: [
    {
      q: "Preciso ter experiência?",
      a: "Não. O primeiro módulo começa pela base: massas, recheios e coberturas, explicados passo a passo para quem nunca vendeu um doce.",
    },
    {
      q: "Preciso de equipamentos caros?",
      a: "Não. As receitas foram pensadas para a cozinha de casa. [Liste aqui os utensílios básicos usados nas aulas.]",
    },
    {
      q: "Como recebo o acesso?",
      a: `Logo depois da confirmação do pagamento, você recebe um e-mail com o login da área de alunas. O acesso vale por ${offer.accessTime}.`,
    },
    {
      q: "E se eu não gostar?",
      a: `Você tem ${offer.guaranteeDays} dias de garantia. Se não gostar, é só pedir dentro desse prazo e o valor é devolvido.`,
    },
  ],
};

/* ───────────────────────── Chamada final e rodapé ───────────────────────── */

export const finalCta = {
  title: { before: "A primeira encomenda está", accent: "mais perto", after: " do que parece." } satisfies Title,
};

export const footer = {
  line: `${brand.name} · Página demonstrativa`,
  creditBefore: "Página criada por",
  creditQuestion: "quer uma página de vendas assim?",
  creditLink: "Fale comigo",
  whatsappMessage: "Oi! Vi a página da Confeitaria Lucrativa e quero uma página de vendas assim.",
};
