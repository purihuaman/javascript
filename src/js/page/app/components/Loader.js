const loader = (message) => {
	const container = document.createElement('div');
	const content = document.createElement('div');
	const icon = document.createElement('span');
	const load = document.createElement('span');
	const text = document.createElement('span');
	const point = document.createElement('span');

	text.textContent = message || 'Por favor, espera';
	point.textContent = '...';

	container.classList.add('loading');
	content.classList.add('loading__content');
	icon.classList.add('loading__icon');
	load.classList.add('loading__load');
	text.classList.add('loading__text');
	point.classList.add('loading__point');

	icon.append(load);
	text.append(point);
	content.append(icon);
	content.append(text);
	container.append(content);

	return container;
};

export default loader;
