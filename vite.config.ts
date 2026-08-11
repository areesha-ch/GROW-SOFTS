import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { inspectAttr } from "kimi-plugin-inspect-react";

export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        products: path.resolve(__dirname, "products.html"),
        services: path.resolve(__dirname, "services.html"),
        about: path.resolve(__dirname, "about.html"),
        contact: path.resolve(__dirname, "contact.html"),
      },
    },
  },
});
