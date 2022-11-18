const api = 'https://jsonplaceholder.typicode.com/users';

const STATUS_OK = 200;
const STATUS_UNAUTHORIZED = 401;
const STATUS_NOTFOUND = 404;
const STATUS_INTERNAL_SERVERERROR = 500;

export const main = () => {
	const app = document.getElementById('app');
	const request = new XMLHttpRequest();
	// console.log('Objeto creado', request.readyState);

	// El tercer parametro indica que sera asincrono
	request.open('GET', api, true);
	// console.log('Objeto abierto', request.readyState);

	request.addEventListener('load', (ev) => {
		ev.preventDefault();
		// console.log('Objeto cargado', request.readyState);
		// console.log(ev.target);
		switch (ev.target.status) {
			case STATUS_OK:
				const response = JSON.parse(ev.target.responseText);

				app.innerHTML = '<div id="loading">Cargando...</div>';
				showInfo(response, null);
				break;
			case STATUS_UNAUTHORIZED:
				showInfo(null, 'No estás autorizado para realizar esta acción');
				break;
			case STATUS_NOTFOUND:
				showInfo(null, 'No existe información... página 404 OK');
				break;
			case STATUS_INTERNAL_SERVERERROR:
				showInfo(
					null,
					'Hubo un error en el servidor, por favor intente de nuevo'
				);
				break;
		}
	});

	// Realiza la petición
	request.send();
	// console.log('Acción: solicitado', request.readyState);
};

const showInfo = (info, message) => {
	const app = document.getElementById('app');
	const fragment = document.createDocumentFragment();

	if (info) {
		info.forEach((element) => {
			const pre = document.createElement('pre');
			pre.classList.add('p-5', 'card', 'card-body', 'bg-dark');
			pre.textContent = JSON.stringify(element, null, 2);

			fragment.appendChild(pre);
		});
	}

	if (message) {
		const text = document.createElement('p');
		text.textContent = message;

		fragment.append(text);
	}

	setTimeout(() => {
		app.append(fragment);
		app.hasChildNodes(document.getElementById('loading')) &&
			document.getElementById('loading') &&
			document.getElementById('loading').remove();
	}, 2_000);
};
