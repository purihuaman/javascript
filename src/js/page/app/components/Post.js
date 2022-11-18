export function Post(props) {
	if (!props) return;

	const { id, title, date, content } = props;
	const formatDate = new Date(date).toLocaleString();

	const sectionPost = document.createElement('section');
	const asidePost = document.createElement('aside');
	const titlePost = document.createElement('h2');
	const timePost = document.createElement('time');
	const contentPost = document.createElement('article');

	sectionPost.id = id;
	sectionPost.classList.add('posts__unique');

	titlePost.textContent = title?.rendered;
	timePost.dataset.time = formatDate;
	timePost.textContent = formatDate;

	contentPost.innerHTML = content?.rendered;

	asidePost.append(titlePost);
	asidePost.append(timePost);

	sectionPost.append(asidePost);
	sectionPost.append(contentPost);

	return sectionPost;
}
