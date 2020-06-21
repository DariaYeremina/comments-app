import { storiesOf } from '@storybook/vue';
import { text, array } from '@storybook/addon-knobs';
import VSelect from '@/components/molecules/VSelect.vue';

const options = [
  {
    id: 0,
    first_name: 'John',
    last_name: 'Doe',
  },
  {
    id: 1,
    first_name: 'Jane',
    last_name: 'Doe',
  },
  {
    id: 2,
    first_name: 'Alex',
    last_name: 'Doe',
  },
];

storiesOf('Molecules/VSelect', module)
  .add('Simple select', () => ({
    template: `<VSelect :placeholder="placeholder"
                        :options="options"
                        v-model="value" />`,
    components: { VSelect },
    props: {
      placeholder: {
        default: text('Text', 'Some text'),
      },
      options: {
        default: array('Options', options),
      },
    },
  }));
