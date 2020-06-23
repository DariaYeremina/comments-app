import users from '@/services/http/api/users';
import { getField, updateField } from 'vuex-map-fields';

const defaultUserData = () => ({
  first_name: '',
  last_name: '',
});

export default {
  namespaced: true,
  state: {
    users: [],
    userData: defaultUserData(),
    activeUserId: null,
  },
  getters: {
    getField,
    getUsers: (state) => state.users,
    getActiveUserId: (state) => state.activeUserId,
  },
  mutations: {
    updateField,
    setUsers(state, payload) {
      state.users = payload;
    },
    clearUserData(state) {
      state.userData = defaultUserData();
    },
  },
  actions: {
    getUsers(context) {
      return users.getUsers()
        .then(({ data }) => {
          context.commit('setUsers', data.result);
        });
    },
    updateUserData(context) {
      return users.updateUserData(context.state.activeUserId, context.state.userData)
        .then(() => {
          context.commit('clearUserData');
        });
    },
  },
};
