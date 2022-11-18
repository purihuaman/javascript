const element = () => {
	console.log(window.document);
	console.log(document);
	console.log(document.head);
	console.log(document.body);
	console.log(document.documentElement);
	console.log(document.links);
	console.log(document.doctype);
	console.log(document.characterSet);
	console.log(document.title);
	console.log(document.URL);
	console.log(document.images);
	console.log(document.forms);
	console.log(document.styleSheets);
	console.log(document.scripts);
};

export const elements = () => element();
