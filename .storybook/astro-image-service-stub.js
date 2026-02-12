// Stub image service for Storybook - allows components to use astro:assets without the full image service
export const getImage = async (src) => ({
  options: {},
  src: typeof src === 'string' ? src : src?.src || '',
});

export const validateOptions = () => {};
export default {};
