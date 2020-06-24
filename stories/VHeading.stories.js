import { storiesOf } from '@storybook/vue';
import VHeading from '@/components/atoms/VHeading.vue';

storiesOf('Atoms/Heading', module)
  .add('Simple heading', () => ({
    template: '<VHeading>Lorem ipsum</VHeading>',
    components: { VHeading },
  }));
