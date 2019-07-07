import axios from 'axios';

const baseUrl = 'http://localhost:8080/api'

const instance = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const Auth = {
	registerUser: values => instance.post('/users/create/', values)
}

export const Datasets = {
	datasetsList: () => instance.get('/datasets/'),
	datasetsCreate: (values) => instance.post('/datasets/create/', values)
}