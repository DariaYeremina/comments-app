import axios from 'axios';

export class Http {
  constructor() {
    this.axios = axios.create({
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
    });

    this.interceptors = {
      request: this.axios.interceptors.request,
      response: this.axios.interceptors.response,
    };

    this.axios.interceptors.request.use(
      (config) => Promise.resolve(config),
      (error) => Promise.reject(error),
    );
  }

  get(url, params) {
    return this.axios.get(url, params);
  }

  post(url, data) {
    return this.axios.post(url, data);
  }

  put(url, data) {
    return this.axios.put(url, data);
  }

  patch(url, data) {
    return this.axios.patch(url, data);
  }

  delete(url, params) {
    return this.axios.delete(url, params);
  }
}

export default new Http();
