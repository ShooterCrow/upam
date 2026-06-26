import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // core - put react and router in their own chunk
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router/") ||
            id.includes("node_modules/react-router-dom/")
          ) {
            return "vendor-core";
          }

          // visuals - isolate heavy graphics/animation libraries
          if (
            id.includes("node_modules/three") ||
            id.includes("node_modules/gsap") ||
            id.includes("node_modules/framer-motion")
          ) {
            return "vendor-visuals";
          }

          // platform - isolate heavy UI/utility libraries
          // NOTE: lucide-react is intentionally NOT chunked here.
          // Placing it in a manual chunk prevents tree-shaking, bundling ALL
          // ~1500 icons instead of only the ones actually imported by the app.
          if (
            id.includes("node_modules/@reduxjs") ||
            id.includes("node_modules/country-state-city")
          ) {
            return "vendor-platform";
          }
        },
      },
    },
  },
});
