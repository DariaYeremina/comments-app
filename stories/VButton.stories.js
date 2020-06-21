import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import VButton from '@/components/atoms/VButton.vue';

storiesOf('Atoms/Button', module)
  .add('Simple button', () => ({
    template: '<VButton @click="action">Hello Button</VButton>',
    components: { VButton },
    methods: {
      action: action('clicked'),
    },
  }))
  .add('Seconady button', () => ({
    template: `<VButton @click="action"
                        secondary>Hello Button</VButton>`,
    components: { VButton },
    props: {
      secondary: boolean('secondary', true),
    },
    methods: {
      action: action('clicked'),
    },
  }));
