import PostCard from '../components/PostCard';
import { addLoading, removeLoading } from '../components/Router';
import { SearchCard } from '../components/SearchCard';
import ajax from './ajax';
import { MAPPER_POSTS, MAPPER_POSTS_SEARCH } from './mapper-post';
import { currentPage, POSTS, SEARCH } from './wp-api';

export default async function infiniteScroll() {
	let query = localStorage.getItem('wpSearch');
	let apiURL = '';
	let Component = ''; // High Order Component (HOC)

	window.addEventListener('scroll', async (ev) => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
		const { hash } = window.location;

		if (scrollTop + clientHeight >= scrollHeight) {
			currentPage.page++;

			if (!hash || hash === '#/') {
				apiURL = `${POSTS}&page=${currentPage.page}`;
				Component = PostCard;
			} else if (hash.includes('#/search')) {
				apiURL = `${SEARCH}${query}&page=${currentPage.page}`;
				Component = SearchCard;
			} else {
				return false;
			}

			addLoading();
			await ajax({
				url: apiURL,
				success: (posts) => {
					const fragment = document.createDocumentFragment();
					const postsContainer = document.getElementById('posts');

					if (hash === '#/') {
						const newPosts = posts.map((post) => MAPPER_POSTS(post));
						newPosts.map((post) => fragment.appendChild(Component(post)));
					} else {
						const newPostsSearch = posts.map((post) =>
							MAPPER_POSTS_SEARCH(post)
						);
						newPostsSearch.map((post) => fragment.appendChild(Component(post)));
					}

					postsContainer.appendChild(fragment);
					removeLoading();
				},
			});
		}
	});
}
