import http from '@/services/http/index';
import store from '@/store/index';

const successStatuses = [200, 201, 204];

http.interceptors.response.use(
  (response) => {
    if (!successStatuses.includes(response._meta.status)) {
      store.commit('common/setResponseError', response._meta);
    }
  },
  (error) => Promise.reject(error),
);
