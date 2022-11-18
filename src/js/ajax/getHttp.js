const getData = (options) => {
	if (options instanceof Object !== true) return;

	const { endpoint, method, success, errors, data } = options;

	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', (ev) => {
		if (request.readyState !== 4) return;
		if (request.status >= 200 && request.status < 300) {
			const response = JSON.parse(request.response);

			return success(response);
		} else {
			const error = {
				status: request.status,
				message: request.statusText || 'Ocurrio un error',
			};

			return errors(error);
		}
	});

	request.open(method || 'GET', endpoint);
	request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	request.send(JSON.stringify(data));
};

export default getData;
