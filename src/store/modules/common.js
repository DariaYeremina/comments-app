export default {
  namespaced: true,
  state: {
    responseError: null,
  },
  getters: {
    getResponseError: (state) => state.responseError,
  },
  mutations: {
    setResponseError(state, payload) {
      state.responseError = payload;
    },
  },
  actions: {
  },
};
