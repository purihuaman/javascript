import { DOMAIN, NAME } from '../helpers/wp-api';

const Title = () => {
	const titleH1 = document.createElement('h1');
	const website = document.createElement('a');

	website.href = DOMAIN;
	website.target = '_blank';
	website.rel = 'noopener';
	website.textContent = NAME.toUpperCase();

	titleH1.appendChild(website);
	titleH1.classList.add('title');

	return titleH1;
};

export default Title;
