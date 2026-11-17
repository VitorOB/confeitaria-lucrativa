/**
 * Versão em inglês dos textos de content.ts (mesmo formato).
 * Preço, checkout e imagens vêm da versão em português; aqui só muda o texto.
 * Os trechos entre colchetes continuam sendo espaços a preencher.
 */
import { contentPt, type Content, type Title } from "./content";

const pt = contentPt;

const offer = {
  ...pt.offer,
  installments: "12x [R$ XX]",
  cashPrice: "[R$ XXX] upfront",
  accessTime: "[duration]",
};

export const contentEn: Content = {
  offer,

  brand: pt.brand,

  seo: {
    ...pt.seo,
    title: "Confeitaria Lucrativa | Online baking course to start selling",
    description:
      "Tested recipes, profitable pricing and sales through Instagram and WhatsApp. An online baking course from zero to your first orders.",
  },

  cta: {
    primary: "I want to join the class",
    short: "Join now",
    header: "Enrollment open",
    guarantee: `${offer.guaranteeDays}-day guarantee`,
    demoNotice: "Demo checkout: on this sample page, the button doesn't lead to payment yet.",
  },

  hero: {
    title: { before: "Your kitchen can become your", accent: "business", after: "." } satisfies Title,
    subtitle:
      "Tested recipes, profitable pricing and sales through Instagram and WhatsApp. From zero to your first orders.",
    image: {
      ...pt.hero.image,
      alt: "Spoon pouring melted chocolate over pistachio bonbons, on a dark background.",
    },
    floatingCard: { kicker: "Lesson 01", title: "Baking fundamentals" },
    badge: "5 modules · at your own pace",
  },

  marquee: ["filled brownies", "cake in a jar", "gourmet brigadeiros", "palha italiana", "party sweets"],

  forWho: {
    eyebrow: "First things first",
    title: { before: "Is this course", accent: "for you", after: "?" } satisfies Title,
    yes: {
      title: "Yes, if you…",
      items: [
        "want extra income without leaving home",
        "already make sweets but don't know how much to charge",
        "post on Instagram but the orders don't come in",
        "are starting from scratch",
      ],
    },
    no: {
      title: "No, if you…",
      items: [
        "are looking for quick money without effort",
        "want to open an industrial bakery",
        "won't practice the recipes",
      ],
    },
  },

  modules: {
    eyebrow: "The content",
    title: { before: "What you'll", accent: "learn", after: "" } satisfies Title,
    intro: "Five modules, in the order a sweets business actually happens.",
    image: {
      ...pt.modules.image,
      alt: "Pieces of brownie stacked on a plate, with side lighting and a dark background.",
    },
    items: [
      { title: "Baking fundamentals.", text: "Doughs, fillings and toppings that never fail." },
      { title: "The best-selling sweets.", text: "Cakes in a jar, brownies and party sweets." },
      { title: "Pricing for profit.", text: "The game-changing module: charge the right price." },
      { title: "Mouth-watering photos.", text: "With your phone and natural light." },
      { title: "Selling on Instagram and WhatsApp.", text: "From the first post to the first order." },
    ],
  },

  teacher: {
    ...pt.teacher,
    label: "Your teacher",
    bio: [
      "[Tell the teacher's real story here: how she got started in baking and how long she has been selling sweets.]",
      "[Explain why she created the course and what students can expect from the lessons. Two or three short paragraphs are enough.]",
    ],
    image: {
      ...pt.teacher.image,
      alt: "Baker in a black apron clapping her flour-covered hands over a dough.",
      caption: "[Illustrative photo: replace it with the teacher's photo]",
    },
  },

  testimonials: {
    eyebrow: "Former students",
    title: { before: "In their", accent: "own words", after: "." } satisfies Title,
    items: [
      { quote: "[Real student testimonial]", name: "[Name]", city: "[city]" },
      { quote: "[Real student testimonial]", name: "[Name]", city: "[city]" },
      { quote: "[Real student testimonial]", name: "[Name]", city: "[city]" },
    ],
  },

  offerSection: {
    title: { before: "Everything you", accent: "get", after: "" } satisfies Title,
    items: ["5 video modules", "Pricing spreadsheet", "Bonus: 30 ready-to-use captions", `Access for ${offer.accessTime}`],
    priceLabel: "Investment",
    secure: `${offer.guaranteeDays}-day guarantee · secure payment`,
  },

  faq: {
    eyebrow: "Questions",
    title: { before: "Still have a", accent: "question", after: "?" } satisfies Title,
    image: {
      ...pt.faq.image,
      alt: "Bonbons wrapped in copper paper inside a metal bowl, on dark green fabric.",
    },
    items: [
      {
        q: "Do I need any experience?",
        a: "No. The first module starts with the basics: doughs, fillings and toppings, explained step by step for people who have never sold a sweet.",
      },
      {
        q: "Do I need expensive equipment?",
        a: "No. The recipes were designed for a home kitchen. [List the basic utensils used in the lessons here.]",
      },
      {
        q: "How do I get access?",
        a: `Right after your payment is confirmed, you'll receive an email with your login to the student area. Access is valid for ${offer.accessTime}.`,
      },
      {
        q: "What if I don't like it?",
        a: `You have a ${offer.guaranteeDays}-day guarantee. If you don't like it, just ask within that period and you'll get your money back.`,
      },
    ],
  },

  finalCta: {
    title: { before: "Your first order is", accent: "closer", after: " than it seems." } satisfies Title,
  },

  footer: {
    line: `${pt.brand.name} · Demo page`,
    creditBefore: "Page created by",
    creditQuestion: "want a sales page like this?",
    creditLink: "Talk to me",
    whatsappMessage: "Hi! I saw the Confeitaria Lucrativa page and I'd like a sales page like this.",
  },
};
