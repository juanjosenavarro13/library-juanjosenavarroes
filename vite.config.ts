import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "./tsconfig-build.json",
    }),
  ],
  build: {
    lib: {
      name: "library-juanjosenavarroes",
      entry: {
        tailwind: "src/tailwind.css",
        badge: "src/components/badge/badge.tsx",
        text: "src/components/text/text.tsx",
      },
      formats: ["es"],
    },
    sourcemap: true,
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
      exclude: ["src/**/index.ts", "**/*.stories.tsx"],
    },
    reporters: ["dot", "github-actions"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["src/**/index.ts", "**/*.stories.tsx"],
    setupFiles: "./setup-test.ts",
  },
});
