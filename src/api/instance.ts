import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_TASKIFY_BaseURL;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    config.url = `/4-11${config.url}`; // 요청 시, 기수-팀 붙여서 요청

    const accessToken = localStorage.getItem('accessToken')?.replace(/"/gi, '');
    if (!accessToken) return config;

    config.headers.Authorization = accessToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    const accessToken = response.data.accessToken;

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
