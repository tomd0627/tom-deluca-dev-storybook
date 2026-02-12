import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Disable image service in Storybook since it doesn't support image optimization
  // eslint-disable-next-line no-undef
  image: process.argv.some((arg) => arg.includes('storybook'))
    ? {
        service: { entrypoint: 'astro/assets/services/noop' },
      }
    : {},
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          quietDeps: true,
        },
      },
    },
  },
});
