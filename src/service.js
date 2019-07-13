import axios from 'axios';

const baseUrl = 'http://localhost:8000/api'

const instance = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const Auth = {
	login: values => instance.post('/users/token-auth/', values),
	registerUser: values => instance.post('/users/create/', values)
}

export const Datasets = {
	datasetsList: () => instance.get('/datasets/'),
	datasetsCreate: (values) => instance.post('/datasets/create/', values)
}