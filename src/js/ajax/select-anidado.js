const selectAnidados = () => {
	const departments = document.getElementById('departments');
	const districts = document.getElementById('districts');
	if (!departments || !districts) return;
	getDepartments(departments, districts);
};

const getDepartments = async (departments, districts) => {
	try {
		const response = await fetch(
			'https://api.copomex.com/query/get_estados?token=991300ef-88e9-415b-af3f-141c74ad19f7'
		);

		if (!response.ok) return await Promise.reject(response);

		const data = await response.json();

		loadDepartments(data?.response?.estado, districts);
	} catch (ex) {
		showErrors(departments, ex);
	}
};

const loadDepartments = (data, districts) => {
	const departments = document.getElementById('departments');
	const fragment = document.createDocumentFragment();
	if (!departments || !fragment || !data || !districts) return;

	data.forEach((depart) => {
		const option = document.createElement('option');
		option.value = depart;
		option.textContent = depart;
		fragment.append(option);
	});

	departments.append(fragment);

	departments.addEventListener('change', (ev) => {
		getDistricts(ev.target.value, districts);
	});
};

const getDistricts = async (state, districts) => {
	try {
		const response = await fetch(
			`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=991300ef-88e9-415b-af3f-141c74ad19f7`
		);

		if (!response.ok) return await Promise.reject(response);
		const data = await response.json();
		loadDistricts(data?.response?.municipio);
	} catch (ex) {
		showErrors(districts, ex);
	}
};

const loadDistricts = (data) => {
	const districts = document.getElementById('districts');
	const fragment = document.createDocumentFragment();

	if (!data || !fragment || !districts) return;

	data.forEach((district) => {
		const option = document.createElement('option');
		option.value = district;
		option.textContent = district;
		fragment.append(option);
	});

	districts.append(fragment);
};

const showErrors = (element, error) => {
	const content = document.createElement('div');
	const texts = document.createElement('p');

	if (!element || !error || !content || !texts) return;

	const message = error.statusText || 'Ocurrió un error';
	texts.textContent = `Error ${error.status}: ${message}`;

	content.append(texts);
	element.append(content);
};

export default selectAnidados;
