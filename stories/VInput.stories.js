import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import VInput from '@/components/atoms/VInput.vue';

storiesOf('Atoms/VInput', module)
  .add('Simple input', () => ({
    template: `<VInput :placeholder="placeholder"
                        :label="label"
                        v-model="value" />`,
    components: { VInput },
    props: {
      placeholder: {
        default: text('Text', 'Some text'),
      },
      label: {
        default: text('Text', 'Some label'),
      },
    },
    data() {
      return {
        value: null,
      };
    },
    methods: {
      action: action('clicked'),
    },
  }));
