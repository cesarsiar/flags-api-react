import axios from 'axios';

const API_BASE_URL = 'https://restcountries.com/v3.1';

export const getCountrys = () => {
	const allCountrys = axios.get(`${API_BASE_URL}/all`);
	return allCountrys;
};
