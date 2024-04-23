import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_TASKIFY_BaseURL;

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')?.replace(/"/gi, '');
    if (!accessToken) return config;

    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    const { accessToken } = response.data;

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
