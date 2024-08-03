import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "library-juanjosenavarroes",
      fileName: (format) => `library-juanjosenavarroes.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      thresholds: {
        "100": false,
      },
      enabled: true,
      include: ["lib/**"],
      exclude: ["lib/main.ts", "**/**.d.ts", "**/index.ts", "lib/**/*.test.t{s,sx}"],
    },
    reporters: ["dot", "github-actions"],
    include: ["lib/**/*.{test,spec}.{ts,tsx}"],
  },
});
