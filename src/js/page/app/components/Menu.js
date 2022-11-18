const Menu = () => {
	const nav = document.createElement('nav');
	const fragment = document.createDocumentFragment();

	menuList.map(({ name, path, target }) => {
		const link = document.createElement('a');

		link.textContent = name;
		link.href = path;
		link.target = target;
		link.rel = 'noopener';

		link.classList.add('nav__link');

		fragment.append(link);
	});

	nav.append(fragment);

	nav.classList.add('nav');

	return nav;
};

const menuList = [
	{ name: 'Home', path: '#/', target: '' },
	{ name: 'Búsqueda', path: '#/search', target: '' },
	{ name: 'Contacto', path: '#/contact', target: '' },
	{
		name: 'Aprende JS',
		path: 'https://aprendejavascript.org',
		target: '_blank',
	},
];

export default Menu;
