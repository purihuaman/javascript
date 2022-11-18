import Title from './Title';
import SearchForm from './SearchForm';

import PostsContent from './Posts';

const Main = () => {
	const doc = document;

	const main = doc.createElement('main');
	const screen = doc.createElement('div');
	const sectionSpa = doc.createElement('section');

	sectionSpa.id = 'spa';

	screen.classList.add('screen');
	main.classList.add('main');
	sectionSpa.classList.add('spa');

	sectionSpa.append(Title());
	sectionSpa.append(SearchForm());
	sectionSpa.append(PostsContent());
	screen.append(sectionSpa);

	main.append(screen);

	return main;
};

export default Main;
