export default {
  apiPrefix: `${process.env.VUE_APP_API_URL}`,
  endpoints: {
    users: 'users',
    postsPerUser: 'posts?user_id=:userId',
    commentsPerPost: 'comments?post_id=:postId',
    comments: 'comments',
  },
  get(endpointLabel, params, query = true) {
    if (this.endpoints[endpointLabel] === undefined) {
      throw new Error('undefined api path');
    }

    let url = this.endpoints[endpointLabel];
    let separator = '?';

    if (typeof (params) === 'object') {
      Object.keys(params).forEach((param) => url = url.replace(`:${param}`, params[param]));
      separator = query ? '&' : '?';
    } else if (url.indexOf('/:') > 0) {
      url = url.substring(0, url.indexOf('/:'));
    }

    return `${this.apiPrefix.concat(url)}${separator}access-token=${process.env.VUE_APP_ACCESS_TOKEN}`;
  },
};
