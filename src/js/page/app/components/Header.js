import Logotipo from './Logotipo';
import Menu from './Menu';

const Header = () => {
	const header = document.createElement('header');
	const screen = document.createElement('div');
	const content = document.createElement('section');

	content.append(Logotipo());
	content.append(Menu());
	screen.append(content);
	header.append(screen);

	screen.classList.add('screen');

	content.classList.add('header__content');

	header.classList.add(
		'position-sticky',
		'sticky-top',
		'grey-800',
		'text-center'
	);

	return header;
};

export default Header;
