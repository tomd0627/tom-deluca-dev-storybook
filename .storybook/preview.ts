import '../src/styles/styles.scss';

// Disable animations in Storybook for faster testing
const style = document.createElement('style');
style.textContent = `
  .animate-fade,
  .animate-slide {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    opacity: 1 !important;
  }
  
  .animate-slide:not(.project-card-list__item-container) {
    transform: none !important;
  }
`;
document.head.appendChild(style);

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
