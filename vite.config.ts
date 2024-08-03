import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: "library-juanjosenavarroes",
      entry: "src/lib/main.ts",
    },
    cssCodeSplit: true,
    cssMinify: true,
    minify: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
  server: {
    port: 3000,
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
      include: ["src/**"],
      exclude: [
        "src/main.tsx",
        "src/App.tsx",
        "src/lib/main.ts",
        "src/**/index.ts",
      ],
    },
    reporters: ["dot", "github-actions"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: [],
    setupFiles: "./setup-test.ts",
  },
});
