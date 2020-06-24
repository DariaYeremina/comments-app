import { storiesOf } from '@storybook/vue';
import VParagraph from '@/components/atoms/VParagraph.vue';

storiesOf('Atoms/Paragraph', module)
  .add('Simple paragraph', () => ({
    template: '<VParagraph>Lorem ipsum</VParagraph>',
    components: { VParagraph },
  }));
