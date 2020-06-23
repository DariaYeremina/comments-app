import endpoints from '@/services/http/endpoints';
import http from '@/services/http';

export default {
  getPostsPerUser(userId) {
    return http.get(endpoints.get('postsPerUser', { userId }));
  },
  getCommentsPerPost(postId) {
    return http.get(endpoints.get('commentsPerPost', { postId }));
  },
  addComment(payload) {
    return http.post(endpoints.get('comments'), payload);
  },
};
