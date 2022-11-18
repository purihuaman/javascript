const uploadDragAndDrop = () => {
	const dragDropZone = document.getElementById('drop-zone');

	if (!dragDropZone) return;

	dragDropZone.addEventListener('dragover', (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		dragDropZone.querySelector('p').classList.add('active');
		// console.log(ev);
	});

	dragDropZone.addEventListener('dragleave', (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		dragDropZone.querySelector('p').classList.remove('active');
		// console.log(ev);
	});

	dragDropZone.addEventListener('drop', (ev) => {
		ev.preventDefault();
		const files = [...ev.dataTransfer.files];

		// console.log(files);
		// console.log(ev.dataTransfer.items[0].getAsFile());

		files.forEach((element) => progressUpload(element));
		dragDropZone.querySelector('p').classList.remove('active');
	});
};

const uploader = (file) => {
	if (!file) return;

	const xhrRequest = new XMLHttpRequest();
	const formData = new FormData();

	formData.append('file', file);

	xhrRequest.addEventListener('readystatechange', (ev) => {
		if (xhrRequest.readyState !== 4) return;

		if (xhrRequest.status >= 200 && xhrRequest.status < 300) {
			const resp = JSON.parse(xhrRequest.responseText);
			console.log(resp);
		} else {
			const message = xhrRequest.statusText || 'Ocurrio un error';
			console.log(`Error ${xhrRequest.status}: ${message}`);
		}
	});

	xhrRequest.open('POST', '/src/php/uploader.php');
	xhrRequest.setRequestHeader('enc-type', 'multipart/form-data');
	xhrRequest.send(formData);
};

const progressUpload = (file) => {
	const progressContainer = document.getElementById('progres');
	const progressBar = document.createElement('progress');
	const text = document.createElement('span');

	if (!progressContainer || !progressBar || !text) return;

	progressBar.value = 0;
	progressBar.max = 100;
	progressBar.classList.add('progres__bar');
	progressContainer.classList.add('progres');

	progressContainer.append(progressBar);
	progressContainer.append(text);

	const fileReader = new FileReader();

	fileReader.readAsDataURL(file);

	fileReader.addEventListener('progress', (ev) => {
		const progress = parseInt((ev.loaded * 100) / ev.total);
		progressBar.value = progress;
		text.innerHTML = `<b>${file.name} - ${progress}%</b>`;
	});

	fileReader.addEventListener('loadend', (ev) => {
		uploader(file);
		setTimeout(() => {
			progressContainer.removeChild(progressBar);
			progressContainer.removeChild(text);

			if (!progressContainer.hasChildNodes())
				progressContainer.classList.remove('progres');
		}, 3000);
	});
};

export default uploadDragAndDrop;
