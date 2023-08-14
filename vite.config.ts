/// <reference types="vitest" />
/// <reference types="vite/client" />
// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
  },
});
