import { Error } from '../components/Error';

const ajax = async (props) => {
	const { url, success } = props;

	try {
		const response = await fetch(url);
		if (!response.ok) return await Promise.reject(response);
		const data = await response.json();

		success(data);
	} catch (ex) {
		const message = ex.statusText || 'Ocurrió un error al acceder a la API';

		document
			.querySelector('.spa')
			.appendChild(Error(`Error ${ex.status}: ${message}`));
	}

	/*
		await fetch(url)
			.then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
			.then((data) => success(data))
			.catch((ex) => {
				const message = ex.statusText || 'Ocurrió un error al acceder a la API';

				const content = document.createElement('article');
				const text = document.createElement('p');

				content.classList.add('error');
				text.classList.add('error__text');

				text.textContent = `Error ${ex.status}: ${message}`;
				content.append(text);

				document.querySelector('.spa').appendChild(content);
			});
	*/
};

export default ajax;
