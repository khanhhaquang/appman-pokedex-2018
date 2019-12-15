import axios from 'axios';

export const Get = (url, config) => {
	return axios.get(url, { ...config });
};
