import axios from 'axios';

const API_URL = 'http://localhost:5000/saints';

export const getAxiosHttp = async (newOptions = {}) => {
	let result = [];
	let error = {
		status: '00',
		message: 'No hay datos',
	};

	const options = {
		method: 'get',
		url: API_URL,
		headers: { 'Content-type': 'application/json; charset=utf-8' },
		...newOptions,
	};

	try {
		const response = await axios(options);

		if (response.status !== 200 && response.statusText !== 'OK') {
			const error = {
				status: response.status,
				statusText: response.statusText || 'Ocurrio un error',
			};

			throw error;
		}

		result = response.data;
	} catch (ex) {
		error = {
			...error,
			status: ex.status,
			message: ex.statusText || 'Ocurrio un error',
		};
	}

	return { result, error };
};
