import { ajax } from './ajax';
import { API_HASH, API_KEY_PUBLIC } from './keys';

const app = document.getElementById('app');

export const mainMarvel = () => {
	app.innerHTML = '<button class="boton">Ejecutar</button>';
	app.innerHTML += '<div id="marvel" class="marvel"></div>';

	const button = document.querySelector('.boton');
	if (!button) return;

	button.addEventListener('click', showInfoMarvel);
};

const showInfoMarvel = async () => {
	const endpoint = {
		method: 'GET',
		url: `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY_PUBLIC}&hash=${API_HASH}`,
	};
	const response = await ajax(endpoint);

	draw(response);
};

const draw = (data) => {
	const marvelContainer = document.getElementById('marvel');
	const fragment = document.createDocumentFragment();

	if (!marvelContainer) return;

	data.forEach((comic) => {
		const article = document.createElement('article');
		const image = document.createElement('img');
		const title = document.createElement('h3');

		image.src = `${comic?.thumbnail?.path}/portrait_incredible.${comic?.thumbnail?.extension}`;
		title.textContent = comic.name;

		article.append(image, title);
		fragment.appendChild(article);
	});

	marvelContainer.appendChild(fragment);
};
