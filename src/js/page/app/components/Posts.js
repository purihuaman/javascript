const PostsContent = () => {
	const postsContainer = document.createElement('section');
	postsContainer.id = 'posts';
	postsContainer.classList.add('posts', 'grid');

	return postsContainer;
};

export default PostsContent;
