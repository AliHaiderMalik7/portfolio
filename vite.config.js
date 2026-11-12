import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {port: 3000},
  // Keep the CRA-era output folder so existing Vercel / gh-pages settings still work.
  build: {outDir: "build", emptyOutDir: true}
});
