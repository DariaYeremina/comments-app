import { storiesOf } from '@storybook/vue';
import VError from '@/components/atoms/VError.vue';
import { array } from '@storybook/addon-knobs';

const error = ['test', 'test2'];

storiesOf('Atoms/Error', module)
  .add('Simple error', () => ({
    template: '<VError :errors="errors">Test text</VError>',
    components: { VError },
    props: {
      errors: array('errors', error),
    },
  }));
