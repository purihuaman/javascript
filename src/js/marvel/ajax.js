export const ajax = (request) => {
	const { method = 'GET', url } = request;

	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url, true);

		xhr.addEventListener('load', (ev) => {
			const status = ev.target.status;

			switch (status) {
				case 200:
					resolve(JSON.parse(ev.target.responseText).data.results);
					break;
				case 400:
					reject('Error de cliente ' + status);
					break;

				default:
					reject('Error desconocido ' + status);
					break;
			}
		});

		xhr.send();
	});
};
