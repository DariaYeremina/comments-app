import users from '@/services/http/api/users';

export default {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUsers(context) {
      return users.getUsers()
        .then(({ data }) => {
          context.commit('setUsers', data.result);
        });
    },
  },
};
