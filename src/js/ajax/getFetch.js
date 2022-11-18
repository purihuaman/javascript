const getFetch = () => {
	const API_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com';

	fetch(`${API_JSON_PLACEHOLDER}/users`)
		.then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
		.then((data) => showUsers(data))
		.catch((ex) => console.log(ex))
		.finally(() => console.log('!Finalizo¡'));
};

const showUsers = (users = {}) => {
	const listUsers = document.getElementById('list-users').lastElementChild;
	const fragment = document.createDocumentFragment();
	if (!listUsers || !fragment) return;

	for (const user of users) {
		const row = document.createElement('tr');
		const name = document.createElement('td');
		const username = document.createElement('td');
		const email = document.createElement('td');

		name.textContent = user.name;
		username.textContent = user.username;
		email.textContent = user.email;

		row.append(name);
		row.append(username);
		row.append(email);

		fragment.append(row);
	}

	listUsers.append(fragment);
};

export default getFetch;
