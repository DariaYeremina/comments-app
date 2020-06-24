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
    clearComment(state) {
      state.comment = defaultComment();
    },
  },
  actions: {
    getPostsPerUser(context) {
      return posts.getPostsPerUser(context.rootGetters['users/getActiveUserId'])
        .then(({ data }) => {
          context.commit('setPostsPerUser', data.result);
        });
    },
    getCommentsPerPost(context, postId) {
      return posts.getCommentsPerPost(postId);
    },
    addComment(context) {
      return posts.addComment(context.state.comment)
        .then(() => {
          context.commit('clearComment');
        });
    },
  },
};
