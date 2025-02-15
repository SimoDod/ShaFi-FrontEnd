import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    outDir: "../ShaFi-BackEnd/distStatic",
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer({})],
    },
  },
});
