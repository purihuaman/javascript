// const axios = require('axios').default;
import axios from 'axios';

const getAxios = () => {
	const API_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com';

	// httpAxios(API_JSON_PLACEHOLDER);
	httpAxiosAsync(API_JSON_PLACEHOLDER);
};

const httpAxiosAsync = async (url) => {
	try {
		const resp = await axios.get(url + '/users');

		if (resp.status !== 200) {
			const error = {
				status: resp.status,
				statusText: resp.statusText,
				message: 'Sucedio un error en la petición',
			};
			throw error;
		}

		const data = resp.data;

		showUsers(data, 'axios-async');
	} catch (ex) {
		showErrors(ex, 'axios-async');
	} finally {
		console.log('Finalizooo!');
	}
};

const httpAxios = (url) => {
	axios
		.get(url + '/users')
		.then((resp) => {
			if (resp.status !== 200) {
				const error = {
					status: resp.status,
					statusText: resp.statusText,
					message: 'Sucedio un error en la petición',
				};
				throw error;
			}

			const data = resp.data;

			showUsers(data, 'axios-users');
		})
		.catch((ex) => showErrors(ex, 'axios-users'))
		.finally(() => {
			console.log('Petición terminada');
		});
};

const showUsers = (users = [], element) => {
	const axiosUsers = document.getElementById(element);
	const fragment = document.createDocumentFragment();

	if (!axiosUsers || !fragment) return;

	for (const user of users) {
		const itemList = document.createElement('li');

		itemList.textContent = `${user.name} - ${user.username} ${user.email}`;

		fragment.append(itemList);
	}

	axiosUsers.append(fragment);
};

const showErrors = (errors, element) => {
	const axiosUsers = document.getElementById(element);
	const item = document.createElement('li');

	if (!axiosUsers || !item) return;

	item.textContent = errors.message;
	axiosUsers.append(item);
};

export default getAxios;
