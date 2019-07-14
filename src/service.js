import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';

const instance = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json'
	}
});

const configureAuth = config => {
  if (!config.headers.Authorization) {
     const newConfig = {
        headers: {},
        ...config
     };

     const token = localStorage.getItem('AUTH_TOKEN');

     if (token && config.url !== '/sign-up') {
        newConfig.headers.Authorization = `Bearer ${token}`;
     }

     return newConfig;
  }

  return config;
};

instance.interceptors.request.use(configureAuth, e => Promise.reject(e));

export const Auth = {
	login: values => instance.post('/users/token-auth/', values),
	registerUser: values => instance.post('/users/create/', values)
};

export const Datasets = {
	datasetsList: () => instance.get('/datasets/'),
	datasetsCreate: (values) => instance.post('/datasets/create/', values)
};