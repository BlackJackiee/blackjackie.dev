import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  bsae: "/blackjackie.dev/",
  plugins: [react()],
});
