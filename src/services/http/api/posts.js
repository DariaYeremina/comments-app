import endpoints from '@/services/http/endpoints';
import http from '@/services/http';

export default {
  getPostsPerUser(userId) {
    return http.get(endpoints.get('postsPerUser', { userId }));
  },
};
