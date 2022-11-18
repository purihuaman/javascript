const fileUpload = () => {
	const files = document.getElementById('files');
	const filesInput = document.getElementById('btn-file');

	if (!files || !filesInput) return;

	addEventListener('change', (ev) => {
		if (ev.target === filesInput) {
			// const files = Array.from(ev.target.files);
			const files = [...ev.target.files];

			files.forEach((element) => progressUpload(element));
		}
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
	const filesInput = document.getElementById('btn-file');
	const progressContainer = document.getElementById('progres');
	const progressBar = document.createElement('progress');
	const text = document.createElement('span');

	if (!progressContainer || !progressBar || !text || !filesInput) return;

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
			filesInput.value = '';

			if (!progressContainer.hasChildNodes())
				progressContainer.classList.remove('progres');
		}, 3000);
	});
};

export default fileUpload;
