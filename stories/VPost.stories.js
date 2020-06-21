import { storiesOf } from '@storybook/vue';
import { object } from '@storybook/addon-knobs';
import VPost from '@/components/molecules/VPost.vue';

const data = {
  title: 'Veritatis amet quos et omnis rerum. Sed sunt eius quod voluptate iusto sed et.',
  body: 'Libero aliquid optio dignissimos minima. Magni dolores in aperiam ut facilis quia quo deleniti.\n\nEligendi tempore est inventore vel. Tenetur itaque minus nemo iusto est. Vitae nam molestiae magni rerum error.',
};

storiesOf('Molecules/Post', module)
  .add('Post', () => ({
    template: '<VPost :post="post"></VPost>',
    props: {
      post: {
        default: object('post', data),
      },
    },
    components: { VPost },
  }));
