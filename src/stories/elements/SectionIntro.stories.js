import SectionIntro from '../../components/elements/SectionIntro.astro';

export default {
  title: 'Elements/Section Intro',
  component: SectionIntro,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    slots: {
      default: '<p>Short lead-in copy for the section.</p>',
    },
  },
};
