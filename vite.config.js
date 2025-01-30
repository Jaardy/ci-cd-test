import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/ci-cd-test/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
