const asyncAwait = () => {
	const API_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com';

	getUsers(API_JSON_PLACEHOLDER).then(showUsers);
};

const getUsers = async (url) => {
	try {
		const resp = await fetch(url + '/users');

		// if (!resp.ok) throw new Error('Ocurrio un error!');
		if (!resp.ok) {
			const error = {
				status: resp.status,
				statusText: resp.statusText,
				message: 'Sucedio un error en la petición',
			};
			throw error;
		}

		const data = await resp.json();

		return data;
	} catch (ex) {
		showErrors(ex);
	} finally {
		console.log('Termino la petición');
	}
};

const showUsers = (users = []) => {
	const asyncUsers = document.getElementById('async-users');
	const fragment = document.createDocumentFragment();

	if (!asyncUsers || !fragment) return;

	for (const user of users) {
		const article = document.createElement('article');
		const details = document.createElement('details');
		const summary = document.createElement('summary');
		const email = document.createElement('p');
		const username = document.createElement('p');

		summary.textContent = user.name;
		email.textContent = user.email;
		username.textContent = user.username;

		details.append(summary);
		details.append(email);
		details.append(username);

		article.append(details);

		fragment.append(article);
	}

	asyncUsers.append(fragment);
};

const showErrors = (errors) => {
	console.log(errors);
};

export default asyncAwait;
