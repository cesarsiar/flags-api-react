import axios from 'axios';

export const CountriesInterceptor = () => {
	axios.interceptors.request.use((request) => {
		return request;
	});

	axios.interceptors.response.use(
		(response) => {
			console.log(response);
			return response;
		},
		(error) => {
			console.log('error', error);
			return Promise.reject(error);
		}
	);
};
