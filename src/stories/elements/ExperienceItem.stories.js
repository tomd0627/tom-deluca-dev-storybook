import ExperienceItem from '../../components/elements/ExperienceItem.astro';

export default {
  title: 'Elements/Experience Item',
  component: ExperienceItem,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Senior Front-End Developer',
    date: '2020 - Present',
    company: 'Acme Corp',
    slots: {
      default:
        '<p>Led UI architecture and delivered reusable components across multiple products.</p>',
    },
  },
};

export const Minimal = {
  args: {
    title: 'Office Administrator',
    slots: {
      default: '<ul><li>Managed office operations</li><li>Coordinated schedules</li></ul>',
    },
  },
};
