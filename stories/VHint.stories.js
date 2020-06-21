import { storiesOf } from '@storybook/vue';
import VHint from '@/components/atoms/VHint.vue';

storiesOf('Atoms/Hint', module)
  .add('Simple hint', () => ({
    template: '<VHint>Lorem ipsum</VHint>',
    components: { VHint },
  }));
