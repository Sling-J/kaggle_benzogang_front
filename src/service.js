import axios from 'axios';

const baseUrl = 'http://localhost/api/'

const instance = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json'
	}
});