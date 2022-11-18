const xhr = () => {
	const API_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/users';

	const users = document.getElementById('users');
	const fragment = document.createDocumentFragment();

	if (!users || !fragment) return;

	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', (ev) => {
		if (request.readyState !== 4) return;
		if (request.status >= 200 && request.status < 300) {
			const resp = JSON.parse(request.response);

			resp.forEach((el) => {
				if (el.id > 10) return;
				const item = document.createElement('li');
				item.textContent = `${el.name} - ${el.username} - ${el.email}`;

				fragment.append(item);

				request.addEventListener('readystatechange', (ev) => {
					if (request.readyState !== 4) return;
					if (request.status >= 200 && request.status < 300) {
						const posts = JSON.parse(request.response);
						posts.forEach((el) => {
							const details = document.createElement('details');
							const summary = document.createElement('summary');
							const title = document.createElement('h5');
							const body = document.createElement('p');

							summary.textContent = el.title;
							title.textContent = el.title;
							body.textContent = el.body;

							details.append(summary);
							details.append(title);
							details.append(body);
							fragment.append(details);
						});
					}

					item.append(fragment);
				});

				request.open(
					'GET',
					`https://jsonplaceholder.typicode.com/posts?userId=${el.id}&_limit=2`
				);
				request.send();
			});

			users.append(fragment);
		} else {
			const itemError = document.createElement('li');
			const message = request.statusText || 'Sucedio un error';
			itemError.textContent = `Error ${request.status}: ${message}`;

			users.append(itemError);
		}
	});

	request.open('GET', API_JSON_PLACEHOLDER);
	request.send();
};

export default xhr;
