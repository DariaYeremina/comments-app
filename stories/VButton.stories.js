import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VButton from '../src/components/atoms/VButton.vue';

storiesOf('Atoms/Button', module)
  .add('Simple button', () => ({
    template: '<VButton @click="action">Hello Button</VButton>',
    components: { VButton },
    methods: {
      action: action('clicked'),
    },
  }));
