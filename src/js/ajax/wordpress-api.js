import loading from '../dom/loading';

// const DOMAIN = 'https://css-tricks.com';
const DOMAIN = 'https://malvestida.com';
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const POSTS = `${API_WP}/posts?_embed`;
const PAGES = `${API_WP}/pages`;
const CATEGORIES = `${API_WP}/categories`;
let page = 1;
let perPage = 4;

const wordpressApi = () => {
	const contentContainer = document.getElementById('content');
	const siteContainer = document.getElementById('site');
	const postsContainer = document.getElementById('posts');
	const templatePost = document.getElementById('template-post').content;
	const fragment = document.createDocumentFragment();

	if (
		!contentContainer ||
		!siteContainer ||
		!postsContainer ||
		!templatePost ||
		!fragment
	)
		return;

	getSiteData(siteContainer, SITE);
	getPostsWordpress(postsContainer, POSTS);
	infiniteScroll(postsContainer, POSTS);
};

const getSiteData = async (siteContainer, url) => {
	if (!siteContainer || !url) return;
	loading(siteContainer, 'Cargando');

	try {
		const response = await fetch(url);

		if (!response.ok) return await Promise.reject(response);

		const data = await response.json();

		data && document.querySelector('.loading').remove();
		showSite(siteContainer, data);
	} catch (ex) {
		console.log(ex);
		// showError(siteContainer, ex);
	}
};

const showSite = (siteContainer, data) => {
	const templateSite = document.getElementById('template-site').content;
	const fragment = document.createDocumentFragment();

	if (!siteContainer || !data || !templateSite || !fragment) return;

	const { name, description, timezone_string, url } = data;

	templateSite.querySelector('[data-namesite]').textContent = name;
	templateSite.querySelector('[data-website]').href = url;
	templateSite.querySelector('[data-website]').title = `Visita ${name}`;
	templateSite.querySelector('[data-website]').textContent = `Visita ${name}`;
	templateSite.querySelector('[data-timezone]').textContent = timezone_string;
	templateSite.querySelector('[data-description]').textContent = description;

	const templateClone = templateSite.cloneNode(true);
	fragment.append(templateClone);

	siteContainer.append(fragment);
};

const getPostsWordpress = async (postsContainer, url) => {
	if (!postsContainer || !url) return;
	loading(postsContainer, 'Cargando');

	try {
		const response = await fetch(`${url}&page=${page}&per_page=${perPage}`);

		if (!response.ok) return await Promise.reject(response);

		const data = await response.json();

		const results = data.map((element) => mapper(element));

		results && document.querySelector('.loading').remove();
		console.log(results);
		showPostsWordpress(postsContainer, results);
	} catch (ex) {
		console.log(ex);
	}
};

const showPostsWordpress = (postsContainer, data) => {
	const templatePost = document.getElementById('template-post').content;
	const fragment = document.createDocumentFragment();
	const fragmentCategories = document.createDocumentFragment();
	const fragmentTags = document.createDocumentFragment();

	if (
		!postsContainer ||
		!data ||
		!templatePost ||
		!fragment ||
		!fragmentTags ||
		!fragmentCategories
	)
		return;

	data.map(
		({
			id,
			title,
			image,
			link,
			date,
			author,
			avatar,
			excerpt,
			categories,
			tags,
			content,
		}) => {
			templatePost.querySelector('[data-image]').src = image;
			templatePost.querySelector('[data-image]').alt = title;
			templatePost.querySelector('[data-title]').textContent = title;
			templatePost.querySelector('[data-author]').textContent = author;
			templatePost.querySelector('[data-avatar]').src = avatar;
			templatePost.querySelector('[data-avatar]').alt = author;
			templatePost.querySelector('[data-date]').textContent = date;
			templatePost.querySelector('[data-link]').href = link;
			templatePost.querySelector('[data-excerpt]').innerHTML = excerpt;

			templatePost.querySelector('[data-categories]').textContent = '';
			categories.map(({ name }) => {
				const itemCategory = document.createElement('li');
				itemCategory.textContent = name;

				fragmentCategories.append(itemCategory);
			});
			templatePost
				.querySelector('[data-categories]')
				.append(fragmentCategories);

			templatePost.querySelector('[data-tags]').textContent = '';

			tags.forEach(({ name }) => {
				const itemTag = document.createElement('li');
				itemTag.textContent = name;
				fragmentTags.append(itemTag);
			});
			templatePost.querySelector('[data-tags]').append(fragmentTags);

			templatePost.querySelector('[data-public]').innerHTML = content;

			const cloneTemplate = templatePost.cloneNode(true);
			fragment.append(cloneTemplate);
		}
	);

	postsContainer.append(fragment);
};

const mapper = (object) => ({
	id: object?.id,
	title: object?.title?.rendered,
	author: object?._embedded?.author[0]?.name,
	avatar: object?._embedded?.author[0]?.avatar_urls['48'],
	image: object?._embedded['wp:featuredmedia'][0]?.source_url,
	date: new Date(object?.date).toLocaleString(),
	link: object?.link,
	excerpt: object?.excerpt?.rendered.replace(' [&hellip;]', '...'),
	categories: object?._embedded['wp:term'][0].map(({ name }) => ({
		name,
	})),
	tags: object?._embedded['wp:term'][1].map(({ name }) => ({
		name,
	})),
	content: object?.content?.rendered,
});

const infiniteScroll = (postsContainer, POSTS) => {
	window.addEventListener('scroll', (ev) => {
		/* 
			scrollTop: Distancia del scroll del top
			clientHeight: Altura de la venta visible (viewport)
			scrollHeight: Altura total de la págian
		*/

		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

		if (scrollTop + clientHeight >= scrollHeight) {
			page++;
			getPostsWordpress(postsContainer, POSTS);
			console.log('Cargando....');
		}
	});
};

export default wordpressApi;
