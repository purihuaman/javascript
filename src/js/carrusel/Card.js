export const Card = (id, title, avatar) => {
	const card = document.createElement('article');
	const figure = document.createElement('div');
	const figcaption = document.createElement('h3');
	const img = document.createElement('img');
	const button = document.createElement('button');

	img.src = avatar;
	figcaption.textContent = title;

	button.textContent = 'Inscribirse';
	button.classList.add('button');

	card.classList.add('card');
	figure.classList.add('card__figure');
	figcaption.classList.add('card__title');
	img.classList.add('card__image');
	button.classList.add('card__button');

	figure.append(img);

	card.id = id;
	card.append(figure, figcaption, button);

	return card;
};
