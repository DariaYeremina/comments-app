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
          if (data._meta.code === 200) {
            context.commit('setPostsPerUser', data.result);
          } else {
            context.commit('common/setResponseError', data._meta, { root: true });
          }
        });
    },
    getCommentsPerPost(context, postId) {
      return posts.getCommentsPerPost(postId);
    },
    addComment(context) {
      return posts.addComment(context.state.comment)
        .then(({ data }) => {
          if (data._meta.code === 200 || data._meta.code === 201) {
            context.commit('clearComment');
          } else {
            context.commit('common/setResponseError', data._meta, { root: true });
          }
        });
    },
  },
};
