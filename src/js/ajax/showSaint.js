const showSaints = (saints) => {
	const tableSaints = document.querySelector('#table-saints tbody');
	const tableFoot = document.querySelector('#table-saints tfoot');
	const templateSaints = document.getElementById('template-saints').content;
	const fragment = document.createDocumentFragment();
	if (!saints || !tableSaints || !templateSaints || !fragment) return;
	tableSaints.textContent = '';
	tableFoot && tableFoot.remove();

	saints.forEach((saint) => {
		templateSaints.querySelector('[data-id]').dataset.id = saint.id;
		templateSaints.querySelector('[data-name]').textContent = saint.name;
		templateSaints.querySelector('[data-constelation]').textContent =
			saint.constelation;
		templateSaints.querySelector('[data-edit]').dataset.edit = saint.id;
		templateSaints.querySelector('[data-edit]').dataset.name = saint.name;
		templateSaints.querySelector('[data-edit]').dataset.constelation =
			saint.constelation;
		templateSaints.querySelector('[data-delete]').dataset.delete = saint.id;

		const cloneTemplate = document.importNode(templateSaints, true);

		fragment.append(cloneTemplate);
	});

	tableSaints.append(fragment);
};

export default showSaints;
