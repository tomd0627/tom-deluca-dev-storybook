import ButtonField from '../../components/elements/form-fields/ButtonField.astro';

const renderButton = (args) => {
  const variantClass = args.variant ? `button--${args.variant}` : '';
  const sizeClass = args.size === 'large' ? 'button--large' : '';
  const classes = ['button', variantClass, sizeClass].filter(Boolean).join(' ');
  const iconMarkup = args.icon ? `<i class="fa-solid fa-${args.icon}" aria-hidden="true"></i>` : '';
  const labelMarkup = args.icon ? `<span>${args.label}</span>` : args.label;
  const ariaLabelAttr = args.ariaLabel ? `aria-label="${args.ariaLabel}"` : '';

  return `
    <div class="form-field animate-fade">
      <button class="${classes}" type="${args.type}" ${ariaLabelAttr}>
        ${iconMarkup}${iconMarkup ? ' ' : ''}${labelMarkup}
      </button>
    </div>
  `;
};

export default {
  title: 'Form Fields/Button Field',
  component: ButtonField,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const ButtonPlayground = {
  args: {
    label: "Let's chat",
    type: 'submit',
    variant: 'primary',
    size: 'default',
    icon: '',
    ariaLabel: '',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'large'],
    },
    icon: {
      control: { type: 'select' },
      options: ['paper-plane', 'rocket'],
    },
  },
  render: renderButton,
};
