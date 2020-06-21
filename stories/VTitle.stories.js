import { storiesOf } from '@storybook/vue';
import VTitle from '@/components/atoms/VTitle.vue';

storiesOf('Atoms/Title', module)
  .add('Simple title', () => ({
    template: '<VTitle>Lorem ipsum</VTitle>',
    components: { VTitle },
  }));
