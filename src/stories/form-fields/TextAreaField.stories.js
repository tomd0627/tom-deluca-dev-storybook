import TextAreaField from '../../components/elements/form-fields/TextAreaField.astro';

export default {
  title: 'Form Fields/TextArea Field',
  component: TextAreaField,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Default = {
  args: {
    id: 'txtMessage',
    name: 'message',
    label: 'Your message',
    isRequired: true,
  },
};
