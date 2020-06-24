import Vue from 'vue';
import Vuex from 'vuex';
import users from '@/store/modules/users';
import posts from '@/store/modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    posts,
  },
});
