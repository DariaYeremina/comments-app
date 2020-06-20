import { storiesOf } from '@storybook/vue';
import VHeading from '../src/components/atoms/VHeading.vue';

storiesOf('Atoms/Heading', module)
  .add('Simple heading', () => ({
    template: '<VHeading @click="action">Lorem ipsum</VHeading>',
    components: { VHeading },
  }));
