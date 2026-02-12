import SkillCard from '../../components/elements/SkillCard.astro';

export default {
  title: 'Elements/Skill Card',
  component: SkillCard,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    name: 'Core Technologies',
    cssClass: 'core-skills',
    icon: 'code',
    slots: {
      default:
        '<ul><li><strong>Languages:</strong> HTML, CSS, JavaScript</li><li><strong>Frameworks:</strong> React, Astro</li></ul>',
    },
  },
};
