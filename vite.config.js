import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/blackjackie.dev/", TURN THIS OFF BEFORE BULDING
  plugins: [react()],
});
