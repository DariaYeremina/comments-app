import axios from 'axios';
import { onFulfilled, onRejected } from '@/services/http/interceptors';

export class Http {
  constructor() {
    this.axios = axios.create({
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
    });
    this.axios.interceptors.response.use(onFulfilled, onRejected);
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

  delete(url, params) {
    return this.axios.delete(url, params);
  }
}

export default new Http();
