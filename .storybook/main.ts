import { resolve } from 'node:path';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|astro)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: resolve('.storybook/storybook-astro'),
    options: {
      scripts: ['https://kit.fontawesome.com/4050a399d8.js'],
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const existingAlias = config.resolve?.alias;
    const aliasArray = Array.isArray(existingAlias)
      ? existingAlias
      : existingAlias
        ? [existingAlias]
        : [];

    // Vite plugin to stub astro:assets Image component and disable image service
    const astroAssetsPlugin = {
      name: 'storybook-astro-assets',
      resolveId: (id) => {
        if (id === 'astro:assets') {
          return resolve('.storybook/ImageStub.astro');
        }
        // Stub all image service imports
        if (id.startsWith('astro:image/services/')) {
          return resolve('.storybook/astro-image-service-stub.js');
        }
      },
    };

    return {
      ...config,
      resolve: {
        ...(config.resolve || {}),
        alias: [
          ...aliasArray,
          {
            find: 'virtual:astro:assets/fonts/runtime',
            replacement: resolve('.storybook/astro-assets-fonts-runtime.js'),
          },
          {
            find: 'virtual:astro:assets/fonts/internal',
            replacement: resolve('.storybook/astro-assets-fonts-internal.js'),
          },
        ],
      },
      define: {
        ...(config.define || {}),
        // Disable image optimization in Storybook
        'globalThis.ASTRO_INTERNAL_IMAGE_SERVICE': 'null',
      },
      plugins: [...(config.plugins || []), astroAssetsPlugin],
    };
  },
};

export default config;
