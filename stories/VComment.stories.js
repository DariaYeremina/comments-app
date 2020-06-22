import { storiesOf } from '@storybook/vue';
import { object } from '@storybook/addon-knobs';
import VComment from '@/components/molecules/VComment.vue';

const data = {
  name: 'Test name',
  email: 'test@test.com',
  body: 'Libero aliquid optio dignissimos minima. Magni dolores in aperiam ut facilis quia quo deleniti.\n\nEligendi tempore est inventore vel. Tenetur itaque minus nemo iusto est. Vitae nam molestiae magni rerum error.',
};

storiesOf('Molecules/Comment', module)
  .add('Post', () => ({
    template: '<VComment :comment="comment"></VComment>',
    props: {
      comment: {
        default: object('comment', data),
      },
    },
    components: { VComment },
  }));
