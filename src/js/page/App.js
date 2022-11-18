import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Main from './app/components/Main';

import { Router } from './app/components/Router';
import infiniteScroll from './app/helpers/infinite-scroll';

const App = () => {
	const app = document.getElementById('app');

	if (!app) return;
	app.textContent = '';

	app.prepend(Header());
	app.append(Main());
	app.append(Footer());

	Router();
	infiniteScroll();
};

export default App;
