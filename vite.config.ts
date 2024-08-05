import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ exclude: ["**/*.stories.tsx", "**/*.test.tsx"] }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "umd"],
      name: "library-juanjosenavarroes",
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
    emptyOutDir: true,
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
          tailwindcss: "tailwindcss",
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
