import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_PUBLIC_PATH === undefined ? '/' : process.env.VUE_APP_PUBLIC_PATH,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
