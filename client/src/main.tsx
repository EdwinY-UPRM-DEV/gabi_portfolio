import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

async function startApp() {
  try {
    await Promise.all([
      document.fonts.load('400 16px "Skillet"'),
      document.fonts.load('400 16px "Bantayog"'),
      document.fonts.load('400 16px "Bowl"'),
    ]);

    await document.fonts.ready;
  } catch (error) {
    console.error("Font loading failed:", error);
  }

  createRoot(document.getElementById("root")!).render(<App />);
}

startApp();