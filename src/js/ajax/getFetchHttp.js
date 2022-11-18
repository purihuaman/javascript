export const getFetchHttp = async (url, newOptions = {}) => {
	let result = [];
	let error = {
		status: '00',
		message: 'No hay datos',
	};

	const options = {
		method: 'get',
		headers: { 'Content-Type': 'application/json' },
		...newOptions,
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();

		if (!response.ok) {
			const error = {
				status: response.status,
				statusText: response.statusText || 'Ocurrio un error',
			};

			throw error;
		}

		result = data;
	} catch (ex) {
		error = {
			...error,
			status: ex.status,
			message: ex.statusText || 'Ocurrio un error',
		};
	}

	return { result, error };
};
