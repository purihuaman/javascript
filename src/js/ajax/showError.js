const showErrors = (errors) => {
	const tableSaints = document.getElementById('table-saints');
	if (!tableSaints) return;

	const tfoot = document.createElement('tfoot');
	const row = document.createElement('tr');
	const message = document.createElement('td');
	tfoot.textContent = '';

	message.textContent = `${errors.status} - ${errors.message}`;
	message.setAttribute('colspan', '3');
	message.classList.add('text-center', 'text-red-400');
	row.append(message);
	tfoot.append(row);

	tableSaints.append(tfoot);
};

export default showErrors;
