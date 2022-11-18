const Footer = () => {
	const footer = document.createElement('footer');
	const screen = document.createElement('div');
	const content = document.createElement('section');
	const text = document.createElement('p');

	text.textContent = 'Creado por Purihuaman';

	content.classList.add('footer__content');
	screen.classList.add('screen');
	footer.classList.add('footer');

	content.append(text);
	screen.append(content);
	footer.append(screen);

	return footer;
};

export default Footer;
