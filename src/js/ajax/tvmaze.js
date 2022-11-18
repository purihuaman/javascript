const URL_TV_MAZE = 'https://api.tvmaze.com/search/shows';

const tvMaze = () => {
	const showFinderInput = document.getElementById('show-finder');
	const tvMazeContainer = document.getElementById('tv-maze');

	if (!showFinderInput || !tvMazeContainer) return;

	showFinderInput.addEventListener('keypress', (ev) => {
		const showToSearch = ev.target.value;

		if (ev.key === 'Enter' && ev.keyCode === 13) {
			getShows(URL_TV_MAZE, showToSearch, tvMazeContainer);
			showFinderInput.value = '';
		}
	});
};

const getShows = async (url, endpoint, element) => {
	if (!url || !endpoint || !element) return;

	try {
		const controller = new AbortController();
		const signal = controller.signal;

		setTimeout(() => controller.abort(), 500);

		const response = await fetch(`${url}?q=${endpoint}`);
		if (!response.ok) return await Promise.reject(response);

		const data = await response.json();
		showTvShow(data, endpoint, element);
	} catch (ex) {
		showErrors(ex, element);
	}
};

const showTvShow = (data, endpoint, element) => {
	const templateTvMaze = document.getElementById('template-tv-maze').content;
	const fragment = document.createDocumentFragment();

	if (!data || !endpoint || !element || !templateTvMaze || !fragment) return;

	element.textContent = '';

	data.length === 0
		? showMessage(
				'No existen resultados de shows para el criterio de búsqueda',
				endpoint,
				element
		  )
		: data.forEach(({ show }) => {
				console.log(show);
				templateTvMaze.querySelector('[data-image]').src =
					show?.image?.medium ||
					show?.image?.original ||
					'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
				templateTvMaze.querySelector('[data-image]').alt = show?.name;
				templateTvMaze.querySelector('[data-name]').textContent = show?.name;
				templateTvMaze.querySelector('[data-summary]').innerHTML =
					show?.summary;
				templateTvMaze.querySelector('[data-link]').href = show?.url || '#';
				templateTvMaze.querySelector('[data-link]').target = show?.url
					? '_blank'
					: '_self';
				templateTvMaze.querySelector('[data-link]').textContent =
					show?.url && 'Ver más';

				const cloneTemplate = templateTvMaze.cloneNode(true);

				fragment.append(cloneTemplate);
		  });
	element.append(fragment);
};

const showMessage = (message, endpoint, element) => {
	if (!endpoint || !element) return;

	const container = document.createElement('div');
	const texts = document.createElement('p');
	texts.innerHTML = `${message} <mark>"${endpoint}"</mark>`;

	container.classList.add('tv-maze__message');

	container.append(texts);
	element.append(container);
};

const showErrors = (error, element) => {
	const textsContent = document.createElement('p');
	if (!error || !element || !textsContent) return;

	const message = error.statusText || 'Ocurrio un error';
	textsContent.textContent = `Error ${error.status || '404'}: ${message}`;
	element.append(textsContent);
};

export default tvMaze;
