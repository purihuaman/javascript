const figures = [
	{
		title: 'Animals',
		img: 'https://placeimg.com/200/200/animals',
	},
	{
		title: 'Tech',
		img: 'https://placeimg.com/200/200/tech',
	},
	{
		title: 'Nature',
		img: 'https://placeimg.com/200/200/nature',
	},
	{
		title: 'People',
		img: 'https://placeimg.com/200/200/people',
	},
	{
		title: 'Arch',
		img: 'https://placeimg.com/200/200/arch',
	},
];

const nodos = () => {
	// console.log(document.getElementsByTagName('li'));
	// console.log(document.getElementsByClassName('card'));
	// console.log(document.getElementsByName('name'));
};

const elements = () => {
	// console.log(document.getElementById('menu'));
};

const selectors = () => {
	// console.log(document.querySelectorAll('a'));
	// console.log(document.querySelectorAll('li'));
	// console.log(document.querySelectorAll('.card'));
	// console.log(document.querySelector('#menu'));
	// console.log(document.querySelector('.cards'));
	// document.querySelectorAll('.card').forEach((el) => console.log(el));
	// console.log(document.querySelectorAll('.card')[0]);
	// console.log(document.querySelector('.card figcaption'));
	// console.log(document.querySelector('.link-dom'));
};

const attributes = () => {
	// document.documentElement.lang = 'en';
	// document.documentElement.setAttribute('lang', 'es-es');
	// console.log(document.querySelector('.link-dom').href);
	// console.log(document.querySelector('.link-dom').getAttribute('href'));
	// console.log(document.documentElement.lang);
	// console.log(document.documentElement.getAttribute('lang'));
	// console.log(document.querySelector('[data-text="paragraph"]'));
	// const linkDom = document.querySelector('.link-dom');
	// linkDom.setAttribute('href', 'https://www.google.com');
	// linkDom.setAttribute('rel', 'noopener');
	// console.log(linkDom.hasAttribute('rel'));
	// linkDom.removeAttribute('rel');
	// console.log(linkDom.hasAttribute('rel'));
	// linkDom.setAttribute('class', 'btn btn-primary mb-2 mt-2 w-100 mx-auto');
	// linkDom.setAttribute('target', '_blank');
	// console.log(linkDom.getAttribute('data-link'));
	// console.log(linkDom.dataset);
	// console.log(linkDom.dataset.link);
	// linkDom.setAttribute('data-newlink', 'Nuevo link');
	// console.log(linkDom);
};

const styles = () => {
	// const text2 = document.getElementById('text');
	// console.log(text2);
	// console.log(text2.style);
	// console.log(getComputedStyle(text2));
	// console.log(getComputedStyle(text2).getPropertyValue('color'));
	// console.log(text2.getAttribute('style'));
	// const rootStyle = getComputedStyle(document.documentElement).style;
	// const rootStyle = document.documentElement.style;
	// console.log(rootStyle);
	// console.log(rootStyle.getPropertyValue('var(--grey-900)'));
	// const card = document.querySelector('.card');
	// console.log(card.classList.contains('card'));
	// // card.classList.remove('pd-all-2');
	// card.classList.replace('grey-800', 'grey-600');
	// console.log(card);
};

const texts = () => {
	const newText = `
		<p>
			El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
		</p>

		<p>
			Éste proveé representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
		</p>

		<p>
			<mark>El DOM no es parte de la especificación de JavaScript es una API para los navegadores.</mark>
		</p>
	`;
	// const text = document.getElementById('text');
	// text.textContent = newText;
	// text.innerText = newText;
	// text.innerHTML = newText;
	// text.outerHTML = newText;

	// console.log(text);
};

const domTraversing = () => {
	const cards = document.querySelector('.cards');

	// console.log(cards.children);
	// console.log(cards.childNodes);
	// console.log(cards.firstChild);
	// console.log(cards.firstElementChild);
	// console.log(cards.lastChild);
	// console.log(cards.lastElementChild);
	// console.log(cards.parentElement);
	// console.log(cards.parentNode);
	// console.log(cards.previousSibling);
	// console.log(cards.previousElementSibling);
	// console.log(cards.nextSibling);
	// console.log(cards.nextElementSibling);
	// console.log(cards.closest('.container'));
	// console.log(cards.closest('div'));
	// console.log(cards.children[2].closest('section'));
	// console.log(cards.hasChildNodes('figure figcaption'));
};

const createElement = () => {
	const cards = document.querySelector('.cards');

	const newCard = document.createElement('figure');
	const img = document.createElement('img');
	const figcaption = document.createElement('figcaption');

	img.src = 'https://placeimg.com/200/200/animals';
	img.alt = 'Animals';
	figcaption.textContent = 'Animals';

	newCard.classList.add('card', 'grey-800', 'pd-all-2', 'col-md-6');

	newCard.append(img);
	newCard.append(figcaption);
	cards.prepend(newCard);

	const continentes = ['África', 'América', 'Europa', 'Oceanía'];
	const newCardList = document.createElement('figure');
	const fragment = document.createDocumentFragment();

	newCardList.classList.add('card', 'grey-800', 'pd-all-2', 'col-md-6');

	continentes.forEach((el) => {
		const item = document.createElement('li');
		item.textContent = el;

		fragment.append(item);
	});

	newCardList.append(fragment);
	cards.prepend(newCardList);
};

const templates = () => {
	const templateCard = document.getElementById('template').content;
	const fragment = document.createDocumentFragment();

	figures.forEach((el) => {
		templateCard.querySelector('img').src = el.img;
		templateCard.querySelector('img').alt = el.title;
		templateCard.querySelector('figcaption').textContent = el.title;

		const templateClone = document.importNode(templateCard, true);

		fragment.append(templateClone);
	});

	const cards = document.querySelector('.cards');
	cards.append(fragment);
};

const nodoElementSelector = () => {
	nodos();
	elements();
	selectors();
	attributes();
	styles();
	texts();
	domTraversing();
	createElement();
	templates();
};

export const nodosElementsSelectors = () => nodoElementSelector();
