import endpoints from '@/services/http/endpoints';
import http from '@/services/http';

export default {
  getUsers() {
    return http.get(endpoints.get('users'));
  },
  updateUserData(userId, payload) {
    return http.put(endpoints.get('userData', { userId }), payload);
  },
};
