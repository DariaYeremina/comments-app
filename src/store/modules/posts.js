import posts from '@/services/http/api/posts';

export default {
  namespaced: true,
  state: {
    postsPerUser: [],
    commentsPerPost: [],
  },
  getters: {
    getPostsPerUser: (state) => state.postsPerUser,
    getCommentsPerPost: (state) => state.commentsPerPost,
  },
  mutations: {
    setPostsPerUser(state, payload) {
      state.postsPerUser = payload;
    },
    setCommentsPerPost(state, payload) {
      state.commentsPerPost = payload;
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
      return posts.getCommentsPerPost(postId)
        .then(({ data }) => {
          context.commit('setCommentsPerPost', data.result);
        });
    },
  },
};
