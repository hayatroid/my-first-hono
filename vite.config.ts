import devServer from '@hono/vite-dev-server';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      devServer({
        entry: './src/index.tsx',
      }),
    ],
  };
});
