import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
      },
      pages: [{ path: "/" }, { path: "/projects/askyourpages" }, { path: "/projects/padel-tournament" }, { path: "/projects/peeklinked" }, { path: "/cloud-talk" }],
    }),
    tsconfigPaths(),
    react(),
    tailwindcss(),
  ],
});