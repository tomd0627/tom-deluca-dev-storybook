import TextField from '../../components/elements/form-fields/TextField.astro';

export default {
  title: 'Form Fields/Text Field',
  component: TextField,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const RequiredText = {
  args: {
    id: 'txtName',
    name: 'name',
    label: 'Your name',
    type: 'text',
    isRequired: true,
  },
};

export const Email = {
  args: {
    id: 'txtEmail',
    name: 'email',
    label: 'Your email',
    type: 'email',
  },
};
