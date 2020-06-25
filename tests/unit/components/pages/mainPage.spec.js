import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import flushPromises from 'flush-promises';
import routes from '@/router/routes';
import MainPage from '@/components/pages/MainPage.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const router = new VueRouter({ routes });

const users = {
  namespaced: true,
  getters: {
    getUsers: jest.fn().mockReturnValue([]),
    getActiveUserId: jest.fn().mockReturnValue(1),
  },
  actions: {
    getUsers: jest.fn(),
  },
};

const posts = {
  namespaced: true,
  actions: {
    getPostsPerUser: jest.fn(),
  },
};

const store = new Vuex.Store({
  modules: {
    users,
    posts,
  },
});

describe('MainPage component', () => {
  let wrapper;
  const app = document.createElement('div');
  app.setAttribute('data-app', true);
  document.body.append(app);

  beforeEach(() => {
    wrapper = mount(MainPage, {
      localVue,
      store,
      router,
      mocks: {
        $t: (msg) => msg,
      },
      sync: false,
      stubs: {
        VHeading: true,
        VSelect: true,
        VManageUserData: true,
        VPostsList: true,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Component renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Fetch users on BeforeRouteEnter', async () => {
    const from = {};
    const to = {};
    const next = jest.fn();
    const fetchUsersSpyOn = jest.spyOn(users.actions, 'getUsers');
    wrapper.vm.fetchUsers = jest.fn();

    wrapper.vm.$options.beforeRouteEnter[0](to, from, (cb) => cb(wrapper.vm));
    await flushPromises();

    expect(await wrapper.vm.fetchUsers).toHaveBeenCalledTimes(1);
  });

  it('Fetch posts on select event emitted by VSelect', async () => {
    const vSelect = wrapper.find('[data-test="v-select"]');
    const fetchPostsSpyOn = jest.spyOn(posts.actions, 'getPostsPerUser');

    vSelect.vm.$emit('select');
    await flushPromises();

    expect(await fetchPostsSpyOn).toHaveBeenCalledTimes(1);
  });

  it('Fetch users on reload event emitted by VManageUserData', async () => {
    const vManageUserData = wrapper.find('[data-test="v-manage-user-data"]');
    const fetchUsersSpyOn = jest.spyOn(users.actions, 'getUsers');

    vManageUserData.vm.$emit('reload');
    await flushPromises();

    expect(await fetchUsersSpyOn).toHaveBeenCalledTimes(1);
  });
});
