import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

declare global {
  interface Window {
    __clReady?: boolean;
  }
}

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// No build, o HTML já vem pré-renderizado e é só hidratado.
// No `npm run dev`, a raiz está vazia e o React monta do zero.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

// Avisa o index.html que o app iniciou (senão, ele mostra todo o conteúdo sem animação).
window.__clReady = true;
