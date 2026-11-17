import type { ReactNode } from "react";
import { offer } from "../data/content";

export const DEMO_CHECKOUT_EVENT = "demo-checkout";

type Props = {
  children: ReactNode;
  variant?: "pink" | "dark";
  size?: "md" | "sm";
  shine?: boolean;
  className?: string;
};

/**
 * Botão de compra. Com `offer.checkoutUrl` preenchido, vai ao checkout.
 * Vazio, rola até a oferta e avisa que o checkout é demonstrativo.
 */
export function CheckoutButton({ children, variant = "pink", size = "md", shine = false, className = "" }: Props) {
  const hasCheckout = offer.checkoutUrl.trim() !== "";

  function handleClick() {
    if (!hasCheckout) window.dispatchEvent(new CustomEvent(DEMO_CHECKOUT_EVENT));
  }

  const classes = [
    "btn",
    variant === "pink" ? "btn-pink" : "btn-dark",
    size === "sm" ? "btn-sm" : "",
    shine ? "btn-shine" : "",
    className,
  ].join(" ");

  return (
    <a
      href={hasCheckout ? offer.checkoutUrl : "#oferta"}
      className={classes}
      onClick={handleClick}
      {...(hasCheckout ? { rel: "noopener" } : {})}
    >
      {children}
    </a>
  );
}
