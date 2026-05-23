import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.ico"],

      manifest: {
        name: "Harsh Notes",
        short_name: "Notes",

        description: "Premium Notes App",

        theme_color: "#0f172a",
        background_color: "#0f172a",

        display: "standalone",

        start_url: "/",

        icons: [
          {
            src: "/image.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "/image.png",
            sizes: "512x512",
            type: "image/png",
          },

          {
            src: "/image.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});