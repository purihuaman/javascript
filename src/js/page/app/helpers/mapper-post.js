const MAPPER_POSTS = (objectPosts) => ({
	id: objectPosts?.id,
	title: objectPosts?.title?.rendered,
	author: objectPosts?._embedded?.author[0]?.name,
	avatar: objectPosts?._embedded?.author[0]?.avatar_urls['48'],
	image:
		objectPosts?._embedded['wp:featuredmedia'][0]?.source_url ||
		'/assets/img/purihuaman.svg',
	date: new Date(objectPosts?.date).toLocaleString(),
	link: objectPosts?.link,
	slug: objectPosts?.slug,
});

const MAPPER_POSTS_SEARCH = (objectPosts) => ({
	id: objectPosts?.id,
	title: objectPosts?.title,
	poster:
		objectPosts?._embedded?.self[0]?.featured_media_src_url ||
		'/assets/img/camera.jpg',
	slug: objectPosts?._embedded?.self[0]?.slug,
});

export { MAPPER_POSTS, MAPPER_POSTS_SEARCH };
