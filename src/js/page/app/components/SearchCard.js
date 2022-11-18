export function SearchCard({ id, title, poster, slug }) {
	const doc = document;

	const articlePost = doc.createElement('article');
	const figure = doc.createElement('figure');
	const image = doc.createElement('img');
	const titlePost = doc.createElement('h2');
	const textPost = doc.createElement('p');
	const link = doc.createElement('a');

	image.src = poster;

	poster.includes('camera') && image.classList.add('posts__poster');

	titlePost.textContent = title;
	link.href = `#/${slug}`;
	link.dataset.id = id;
	link.textContent = 'Ver publicación';

	articlePost.classList.add('posts__card');

	figure.appendChild(image);
	textPost.appendChild(link);
	articlePost.appendChild(figure);
	articlePost.appendChild(titlePost);
	articlePost.appendChild(textPost);

	return articlePost;
}
