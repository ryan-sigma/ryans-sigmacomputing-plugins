import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    // Explicitly handle CommonJS conversion for the plugin
    commonjs({
      include: ["**/node_modules/@sigmacomputing/plugin/**", "**/plugin/dist/**"],
      transformMixedEsModules: true,
    }),
  ],
  base: "/ryans-sigmacomputing-plugins/",
  resolve: {
    preserveSymlinks: true,
  },
});
