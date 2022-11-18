const SearchForm = () => {
	const doc = document;

	const form = doc.createElement('form');
	const inputSearch = doc.createElement('input');

	inputSearch.type = 'search';
	inputSearch.name = 'search';
	inputSearch.placeholder = 'Buscar...';
	inputSearch.autocomplete = 'off';

	form.classList.add('search-form');

	form.append(inputSearch);

	if (location.hash.includes('#/search'))
		inputSearch.value = localStorage.getItem('wpSearch');

	doc.addEventListener('search', (ev) => {
		if (!ev.target.matches('input[type="search"]')) return false;

		if (!ev.target.value) localStorage.removeItem('wpSearch');
	});

	form.addEventListener('submit', (ev) => {
		ev.preventDefault();
		if (!ev.target.matches('.search-form')) return false;

		const valueSearch = ev.target.search.value;
		localStorage.setItem('wpSearch', valueSearch);
		location.hash = `#/search?search=${valueSearch}`;
	});

	return form;
};

export default SearchForm;
