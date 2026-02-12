// Simple stub for astro:assets Image component in Storybook
// Returns HTML that can be rendered by the Astro container

export const Image = function AstroImageStub({ src, alt, loading, ...props }) {
  const srcStr = typeof src === 'string' ? src : src?.src || '';
  const propsStr = Object.entries({ alt, loading, ...props })
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${k}="${String(v).replace(/"/g, '&quot;')}"`)
    .join(' ');

  return `<img src="${srcStr.replace(/"/g, '&quot;')}" ${propsStr} />`;
};

// Mark as Astro component so the renderer can identify it
Image.isAstroComponentFactory = true;

export const getImage = async (src) => ({
  options: {},
  src: typeof src === 'string' ? src : src?.src || '',
});

export default {};
