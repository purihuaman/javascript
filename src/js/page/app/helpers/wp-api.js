// const NAME = 'malvestida';
const NAME = 'css-tricks';
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const CATEGORIES = `${API_WP}/categories`;
const POST = `${API_WP}/posts`;
const PER_PAGE = 9;
const POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
const SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;
const currentPage = {
	page: 1,
};

export {
	NAME,
	DOMAIN,
	SITE,
	API_WP,
	CATEGORIES,
	POSTS,
	POST,
	SEARCH,
	PER_PAGE,
	currentPage,
};
