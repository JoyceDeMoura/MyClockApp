//C0743947_Joyce De Moura
import axios from 'axios';

const API_URL = 'http://3.96.106.9:8080/';

const api = axios.create({
	baseURL: API_URL
});

const API = {
	getUsers: () => {
		return api.get('/Users');
	},
	createUser: async (userData) => {
		try {
			const response = await api.post('/create-user', userData); // New request to create a new user
			return response.data;
		} catch (error) {
			throw new Error('User was not created');
		}
	},
	updateUser: async (userData) => {
		try {
			const response = await api.post('/update-user/' + userData._id, userData); // Post request to update a user
			return response.data;
		} catch (error) {
			throw new Error('User was not updated');
		}
	},
	clockInOut: async (timeData) => {
		try {
			const response = await api.post('/clockInOut', timeData); // Post request time
			return response.data;
		} catch (error) {
			throw new Error('User was not clockInOut');
		}
	},
	deleteUser: async (userData) => {
		try {
			const response = await api.get('/delete-user/' + userData._id);
			return response.data;
		} catch (error) {
			throw new Error('User was not Deleted');
		}
	},
	controlTime: async (timeData) => {
		try {
			const response = await api.post('/controlTime', timeData); // Post request to update time
			return response.data;
		} catch (error) {
			throw new Error('User was not controlTime');
		}
	},
	gethours: () => {
		return api.get('/hours');
	},
	gethoursByUser: (user) => {
		return api.post('/hours-user',user);
	},
	addTime: async (timeData) => {
		try {
			const response = await api.post('/add-hours', timeData); // Post request addTime
			return response.data;
		} catch (error) {
			throw new Error('User was not controlTime');
		}
	},
	deleteHours: async (data) => {
		try {
			const response = await api.get('/delete-hours/' + data._id);
			return response.data;
		} catch (error) {
			throw new Error('User was not Deleted');
		}
	},
	updatehours: async (timeData) => {
		try {
			const response = await api.post('/update-hours', timeData); // 
			return response.data;
		} catch (error) {
			throw new Error('User was not controlTime');
		}
	}

};

export default API;