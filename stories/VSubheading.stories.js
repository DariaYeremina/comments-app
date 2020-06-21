import { storiesOf } from '@storybook/vue';
import VSubheading from '@/components/atoms/VSubheading.vue';

storiesOf('Atoms/Subheading', module)
  .add('Simple subheading', () => ({
    template: '<VSubheading>Lorem ipsum</VSubheading>',
    components: { VSubheading },
  }));
