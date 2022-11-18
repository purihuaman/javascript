import Showdown from 'showdown';

const myBlog = () => {
	const basicJs = document.getElementById('basic-js');

	getMarkdownFiles('javascript', basicJs);
};

const getMarkdownFiles = async (nameFile, element) => {
	try {
		if (!nameFile || !element) return;

		const fileRoute = `/src/markdown/${nameFile}.md`;

		const response = await fetch(fileRoute);
		if (!response.ok) return await Promise.reject(response);

		const fileData = await response.text();

		showInfo(fileData, element);
	} catch (ex) {
		showErrors(ex, element);
	}
};

const showInfo = (info, element) => {
	if (!info || !element) return;

	element.innerHTML = new Showdown.Converter().makeHtml(info);
};

const showErrors = (error, element) => {
	const textsContent = document.createElement('p');
	if (!error || !element || !textsContent) return;

	const message = error.statusText || 'Ocurrió un error';

	textsContent.textContent = `Error ${error.status}: ${message}`;
	element.append(textsContent);
};

export default myBlog;
