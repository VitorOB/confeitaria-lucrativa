import { useEffect } from "react";
import { inView, stagger } from "motion";
import { animate } from "motion/mini";

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * Revelações na rolagem (uma vez só), com Motion:
 * - [data-reveal]: o próprio elemento sobe e aparece.
 * - [data-reveal-group]: os filhos entram em sequência, 80 ms entre eles.
 * - [data-draw]: recebe .is-drawn, que dispara o desenho da borda (CSS).
 *
 * O estado inicial (escondido) vem do CSS e só vale com a classe .js no <html>.
 * Com movimento reduzido, o CSS já mostra tudo e este hook não faz nada.
 */
export function useScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const distance = mobile ? 14 : 24;
    const duration = mobile ? 0.45 : 0.65;
    const options = { amount: 0.2, margin: "0px 0px -8% 0px" } as const;
    const show = (targets: Element[], delay: number | ((i: number, total: number) => number) = 0) =>
      animate(
        targets,
        { opacity: [0, 1], transform: [`translateY(${distance}px)`, "translateY(0)"] },
        { duration, ease: EASE, delay },
      ).then(() => {
        // Fixa o estado final, independente do estado inicial vindo do CSS.
        for (const el of targets) {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        }
      });

    const stops = [
      inView("[data-reveal]", (el) => {
        show([el]);
      }, options),
      inView("[data-reveal-group]", (group) => {
        show(Array.from(group.children), stagger(0.08));
      }, options),
      inView("[data-draw]", (el) => {
        el.classList.add("is-drawn");
      }, { amount: 0.35 }),
    ];

    return () => {
      stops.forEach((stop) => stop());
    };
  }, []);
}
