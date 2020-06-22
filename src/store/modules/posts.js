import { getField, updateField } from 'vuex-map-fields';
import posts from '@/services/http/api/posts';

const defaultComment = () => ({
  name: '',
  email: '',
  body: '',
  post_id: null,
});

export default {
  namespaced: true,
  state: {
    postsPerUser: [],
    comment: defaultComment(),
  },
  getters: {
    getField,
    getPostsPerUser: (state) => state.postsPerUser,
  },
  mutations: {
    updateField,
    setPostsPerUser(state, payload) {
      state.postsPerUser = payload;
    },
  },
  actions: {
    getPostsPerUser(context, userId) {
      return posts.getPostsPerUser(userId)
        .then(({ data }) => {
          context.commit('setPostsPerUser', data.result);
        });
    },
    getCommentsPerPost(context, postId) {
      return posts.getCommentsPerPost(postId);
    },
  },
};
