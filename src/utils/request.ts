import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {

    return config;
  },
  error => {
    console.log('err' + error);
    return Promise.reject(error);
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    return res;
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service;