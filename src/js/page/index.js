import App from './App';
import { currentPage } from './app/helpers/wp-api';

window.addEventListener('DOMContentLoaded', App);
window.addEventListener('hashchange', () => {
	currentPage.page = 1;
	App();
});
