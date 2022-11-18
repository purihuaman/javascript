export function Error(message) {
	if (!message) return false;

	const content = document.createElement('article');
	const texts = document.createElement('p');

	content.classList.add('error');
	texts.classList.add('error__text');

	texts.innerHTML = message;
	content.appendChild(texts);

	return content;
}
