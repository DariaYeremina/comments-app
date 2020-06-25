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
      state.users = [];
      payload.forEach((el) => state.users.push(el));
    },
    clearUserData(state) {
      state.userData = defaultUserData();
    },
  },
  actions: {
    getUsers(context) {
      return users.getUsers()
        .then(({ data }) => {
          if (data._meta.code === 200) {
            context.commit('setUsers', data.result);
          } else {
            context.commit('common/setResponseError', data._meta, { root: true });
          }
        });
    },
    updateUserData(context) {
      return users.updateUserData(context.state.activeUserId, context.state.userData)
        .then(({ data }) => {
          if (data._meta.code === 200 || data._meta.code === 201) {
            context.commit('clearUserData');
          } else {
            context.commit('common/setResponseError', data._meta, { root: true });
          }
        });
    },
  },
};
