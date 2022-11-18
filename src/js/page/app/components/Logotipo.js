const Logotipo = () => {
	const article = document.createElement('article');
	const link = document.createElement('a');
	const logo = document.createElement('img');

	logo.src = 'https://purihuaman.netlify.app/assets/images//purihuaman.svg';
	logo.alt = 'Purihuaman';

	link.href = '/spa.html';
	link.rel = 'noopener';

	link.append(logo);
	article.append(link);

	article.classList.add('logo');

	return article;
};

export default Logotipo;
