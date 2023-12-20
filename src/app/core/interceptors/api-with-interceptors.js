import axios from 'axios';
import store from '../services/stores/api-state-store';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

let ongoingRequests = 0;

api.interceptors.request.use(
  (config) => {
    ongoingRequests++;

    console.log("Ongoing requests: " + ongoingRequests);
    console.log(process.env.VUE_APP_API_ENDPOINT);
    store.dispatch('startLoading');

    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    ongoingRequests--;

    if (ongoingRequests === 0) {
      store.dispatch('stopLoading');
    }

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    ongoingRequests--;

    console.log("Ongoing requests: " + ongoingRequests);
    if (ongoingRequests === 0) {
      store.dispatch('stopLoading');
    }

    return response;
  },
  (error) => {
    ongoingRequests--;

    console.error('Response interceptor error:', error);

    if (ongoingRequests === 0) {
      store.dispatch('stopLoading');
    }

    return Promise.reject(error);
  }
);

export default api;