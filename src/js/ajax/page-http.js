const ROUTE_HTML = '/src/page';

const pageHttp = async () => {
	const mainContainer = document.querySelector('.main');

	if (!mainContainer) return;

	const { resultHtml, errors } = await getPage(`${ROUTE_HTML}/home.html`);

	mainContainer.innerHTML = resultHtml || `${errors.status} ${errors.message}`;
};

addEventListener('click', async (ev) => {
	const mainContainer = document.querySelector('.main');

	if (!mainContainer) return;

	if (!ev.target.matches('.nav .nav__link')) return;
	ev.preventDefault();

	const { resultHtml, errors } = await getPage(`${ev.target.href}`);
	mainContainer.innerHTML = resultHtml || `${errors.status} ${errors.message}`;
});

const getPage = async (url) => {
	let resultHtml = '';
	let errors = '';

	try {
		const options = {
			method: 'get',
			headers: {
				'Content-type': 'text/plain',
			},
		};

		const response = await fetch(url, options);
		const html = await response.text();

		if (!response.ok) {
			const error = {
				status: response.status,
				statusText: response.statusText || 'Ocurrio un error',
			};

			throw error;
		}

		resultHtml = html;
	} catch (ex) {
		errors = {
			...errors,
			status: ex.status,
			message: ex.statusText || 'Ocurrio un error',
		};
	}

	return { resultHtml, errors };
};

export default pageHttp;
