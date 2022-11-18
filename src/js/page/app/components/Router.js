import ajax from '../helpers/ajax';
import { MAPPER_POSTS, MAPPER_POSTS_SEARCH } from '../helpers/mapper-post';

import { POST, POSTS, SEARCH } from '../helpers/wp-api';
import ContactForm from './ContactForm';
import { Error } from './Error';
import loader from './Loader';
import { Post } from './Post';
import PostCard from './PostCard';
import { SearchCard } from './SearchCard';

export async function Router() {
	const postsContainer = document.getElementById('posts');
	const fragment = document.createDocumentFragment();

	if (!postsContainer || !fragment) return;

	addLoading();
	postsContainer.textContent = '';

	// Hash router
	const { hash } = location;

	if (!hash || hash === '#/') {
		await ajax({
			url: POSTS,
			success: (posts) => {
				let newPosts = posts.map((post) => MAPPER_POSTS(post));

				newPosts.map((post) => fragment.append(PostCard(post)));

				postsContainer.append(fragment);
			},
		});
	} else if (hash.includes('#/search')) {
		const query = localStorage.getItem('wpSearch');

		if (!query) {
			removeLoading();
			return false;
		}

		await ajax({
			url: `${SEARCH}${query}`,
			success: (postsSearch) => {
				const fragment = document.createDocumentFragment();
				const newPostsSearch = postsSearch.map((post) =>
					MAPPER_POSTS_SEARCH(post)
				);

				if (newPostsSearch.length === 0) {
					const message = `
						No existen resultados de búsqueda para el término
						"<mark>${query}</mark>".
					`;

					fragment.appendChild(Error(message));
				} else {
					newPostsSearch.map((post) => fragment.append(SearchCard(post)));
				}

				postsContainer.classList.replace('grid', 'flexbox');
				postsContainer.appendChild(fragment);
			},
		});
	} else if (hash === '#/contact') {
		postsContainer.classList.replace('grid', 'flexbox');
		postsContainer.appendChild(ContactForm());
		console.log('Contacto');
	} else {
		const idPostStorage = Number(localStorage.getItem('wpPostId'));

		await ajax({
			url: `${POST}/${idPostStorage}`,
			success: (post) => {
				postsContainer.appendChild(Post(post));
			},
		});
	}

	removeLoading();
}

export const addLoading = () => {
	const doc = document;

	doc.querySelector('.loading')
		? doc.getElementById('spa').removeChild(doc.querySelector('.loading'))
		: document.getElementById('spa').append(loader('Cargando'));
};

export const removeLoading = () => {
	const spa = document.getElementById('spa');
	spa.querySelector('.loading') &&
		spa.removeChild(spa.querySelector('.loading'));
};
