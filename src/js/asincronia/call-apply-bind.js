function saludar() {
	this.lugar = 'Global';

	console.log(`${this.lugar}`);
}

const obj = {
	lugar: 'Contexto objeto',
};

const callApplyBind = () => {
	// console.log(this);

	// saludar();

	saludar.call(obj);
};

export const callApplyBinds = () => callApplyBind();
