import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "library-juanjosenavarroes",
      fileName: (format) => `library-juanjosenavarroes.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
});
