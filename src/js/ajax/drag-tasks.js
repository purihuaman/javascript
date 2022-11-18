const dragTasks = () => {
	const pendingTasks = document.getElementById('pending-tasks');
	const finishedTasks = document.getElementById('finished-tasks');

	if (!pendingTasks || !finishedTasks) return;

	pendingTasks.addEventListener('dragstart', (ev) => {
		// ev.preventDefault();
		/* 
      dataTransfer
        - setData: Establece información a compartir
        - getData: Establece información a obtener
     */
		ev.dataTransfer.setData('text/plain', ev.target.id);
		// ev.dataTransfer.getData('text');
	});

	pendingTasks.addEventListener('drag', (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		ev.target.classList.add('active');
	});

	pendingTasks.addEventListener('dragend', (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		ev.target.classList.remove('active');
	});

	finishedTasks.addEventListener('dragover', (ev) => {
		ev.preventDefault();
		// console.log(ev);
	});

	finishedTasks.addEventListener('drop', (ev) => {
		ev.preventDefault();

		const element = pendingTasks.querySelector(
			`#${ev.dataTransfer.getData('text')}`
		);

		finishedTasks.append(element);
		element.classList.remove('active');
	});
};

export default dragTasks;
