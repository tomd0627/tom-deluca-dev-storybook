import ValueCard from '../../components/elements/ValueCard.astro';

export default {
  title: 'Elements/Value Card',
  component: ValueCard,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    icon: 'rocket',
    title: 'Rapid Development',
    slots: {
      default: '<p>Deliver quality code quickly without sacrificing performance.</p>',
    },
  },
};
