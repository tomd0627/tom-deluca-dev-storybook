import ProjectCard from '../../components/elements/ProjectCard.astro';

export default {
  title: 'Elements/Project Card',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export const Default = {
  args: {
    name: 'Rapid7',
    slots: {
      'project-card-image':
        '<img src="https://placehold.co/800" alt="Placeholder image" loading="eager" />',
      default:
        '<p>Maintained enterprise website and delivered performance improvements across key pages.</p>',
    },
  },
  render: (args) => `
    <div style="width: 300px; height: 300px;">
      <a href="/" class="project-card-list__item-container animate-slide" aria-label="${args.name} project">
        <div class="project-card-list__item">
          <div class="project-card-list__item__front">
            ${args.slots['project-card-image']}
            <h3>${args.name}</h3>
          </div>
          <div class="project-card-list__item__back">
            ${args.slots.default}
          </div>
        </div>
      </a>
    </div>
  `,
};
