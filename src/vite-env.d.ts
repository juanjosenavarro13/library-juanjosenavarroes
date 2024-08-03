/// <reference types="vite/client" />

interface ImportMetaEnv {
  PLAYWRIGHT_USER: string;
  PLAYWRIGHT_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
