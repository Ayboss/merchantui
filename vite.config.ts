import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js'
  }
} as VitestConfigExport);
