export default {
  apiPrefix: `${process.env.VUE_APP_API_URL}`,
  endpoints: {
    users: 'users',
    userData: 'users/:userId',
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
    } else if (typeof (params) === 'string') {
      const regex = new RegExp(':.+');
      url = url.replace(regex, params);
      separator = query ? '&' : '?';
    } else if (url.indexOf('/:') > 0) {
      url = url.substring(0, url.indexOf('/:'));
    }

    return `${this.apiPrefix.concat(url)}${separator}access-token=${process.env.VUE_APP_ACCESS_TOKEN}`;
  },
};
