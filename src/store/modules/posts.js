import posts from '@/services/http/api/posts';

export default {
  namespaced: true,
  state: {
    postsPerUser: [],
  },
  getters: {
    getPostsPerUser: (state) => state.postsPerUser,
  },
  mutations: {
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
  },
};
