const PostCard = (props) => {
	if (!props) return;

	const doc = document;
	const { id, image, title, date, link, slug } = props;

	const post = doc.createElement('article');
	const imageContainer = doc.createElement('img');
	const h2 = doc.createElement('h2');
	const text = doc.createElement('p');
	const time = doc.createElement('time');
	const linkA = doc.createElement('a');

	post.id = id;

	imageContainer.src = image;
	imageContainer.alt = title;

	h2.textContent = title;
	time.textContent = date;
	linkA.href = `#/${slug}`;
	linkA.textContent = 'Ver publicación';
	linkA.dataset.id = id;

	imageContainer.classList.add('posts__image');
	text.classList.add('posts__text');
	post.classList.add('posts__card');

	text.append(time);
	text.append(linkA);

	post.append(imageContainer);
	post.append(h2);
	post.append(text);

	doc.addEventListener('click', (ev) => {
		if (!ev.target.matches('.posts__card a')) return false;

		localStorage.setItem('wpPostId', ev.target.dataset.id);
	});

	return post;
};

export default PostCard;
