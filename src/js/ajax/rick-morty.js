const URL_API = 'https://rickandmortyapi.com/api/character';

const rickMorty = () => {
	const rickAndMorty = document.getElementById('rick-and-morty');
	const urlPrev = document.querySelector('[data-previous]');
	const urlNext = document.querySelector('[data-next]');

	if (!rickAndMorty || !urlNext || !urlPrev) return;

	getData(`${URL_API}`, rickAndMorty);

	addEventListener('click', (ev) => {
		ev.preventDefault();

		if (urlPrev === ev.target) {
			urlNext.classList.remove('disabled');
			const url = ev.target.getAttribute('href');
			getData(url, rickAndMorty);
		}

		if (urlNext === ev.target) {
			urlPrev.classList.remove('disabled');
			const url = ev.target.getAttribute('href');
			getData(url, rickAndMorty);
		}
	});
	filterCharacters();
};

const getData = async (url, element) => {
	try {
		const response = await fetch(url);

		if (!response.ok) return await Promise.reject(response);
		const data = await response.json();

		showRickMorty(data, element);
		addClass();
	} catch (ex) {
		showErrors(ex, element);
	}
};

const showRickMorty = (data, element) => {
	const templateCard = document.getElementById('template-rick').content;
	const fragment = document.createDocumentFragment();

	if (!data || !element || !templateCard || !fragment) return;

	pagination(data?.info);
	element.textContent = '';
	data.results.map(({ id, name, image, location, species, status }) => {
		templateCard.querySelector('[data-id]').dataset.id = id;
		templateCard.querySelector('[data-image]').src = image;
		templateCard.querySelector('[data-name]').textContent = name;
		templateCard.querySelector('[data-species]').textContent = species;
		templateCard.querySelector('[data-status]').textContent = status;
		templateCard.querySelector('[data-status]').dataset.status = status;

		templateCard.querySelector('[data-location]').textContent = location?.name;

		const cloneTemplate = templateCard.cloneNode(true);
		fragment.append(cloneTemplate);
	});

	element.append(fragment);
};

const showErrors = (error, element) => {
	const textsContent = document.createElement('p');
	if (!error || !element || !textsContent) return;

	const message = error.statusText || 'Ocurrio un error';
	textsContent.textContent = `Error ${error.status || '404'}: ${message}`;
	element.append(textsContent);
};

const filterCharacters = () => {
	const rickmortyFilter = document.getElementById('rickmorty-filter');
	const rickAndMorty = document.getElementById('rick-and-morty');

	if (!rickmortyFilter || !rickAndMorty) return;

	rickmortyFilter.addEventListener('click', (ev) => {
		const value = ev.target.textContent.trim().toLowerCase();

		switch (value) {
			case 'alive':
				getData(`${URL_API}/?status=${value}`, rickAndMorty);
				break;
			case 'dead':
				getData(`${URL_API}/?status=${value}`, rickAndMorty);
				break;
			case 'unknown':
				getData(`${URL_API}/?status=${value}`, rickAndMorty);
				break;

			case 'female':
				getData(`${URL_API}/?gender=${value}`, rickAndMorty);
				break;
			case 'male':
				getData(`${URL_API}/?gender=${value}`, rickAndMorty);
				break;
			case 'genderless':
				getData(`${URL_API}/?gender=${value}`, rickAndMorty);
				break;

			default:
				getData(`${URL_API}`, rickAndMorty);
				break;
		}
	});
};

const addClass = () => {
	const statusItems = [...document.querySelectorAll('[data-status]')];

	if (!statusItems) return;

	for (const item of statusItems) {
		item.textContent.toLocaleLowerCase() === 'alive' &&
			item.classList.add('alive');

		item.textContent.toLocaleLowerCase() === 'dead' &&
			item.classList.add('dead');

		item.textContent.toLocaleLowerCase() === 'unknown' &&
			item.classList.add('unknown');
	}
};

let newPageLength = 0;

const pagination = (info) => {
	newPageLength++;

	const btnPrev = document.querySelector('[data-previous]');
	const btnNext = document.querySelector('[data-next]');

	if (!info || !btnPrev || !btnNext) return;

	const { prev, next, pages } = info;

	prev === null && btnPrev.classList.add('disabled');
	newPageLength >= pages
		? btnNext.classList.add('disabled')
		: btnNext.classList.remove('disabled');

	btnPrev.href = prev || '';
	btnNext.href = newPageLength >= pages ? '' : next;
};

export default rickMorty;
