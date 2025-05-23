import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: process.cwd(),
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
}));
