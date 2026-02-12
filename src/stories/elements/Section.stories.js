import Section from '../../components/elements/Section.astro';

export default {
  title: 'Elements/Section',
  component: Section,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'about',
    cssClass: 'section--about',
    slots: {
      default:
        '<div class="section__intro"><h2>About</h2><p>This is sample content inside a section.</p></div>',
    },
  },
};
