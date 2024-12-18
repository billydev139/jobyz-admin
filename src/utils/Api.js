import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.jobyz.ch/',
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default api;
