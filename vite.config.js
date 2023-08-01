import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: "**/*.jsx" })],
  build: {
    rollupOptions: {
      input: {
        app: "/index.html", // default
      },
    },
  },
});
