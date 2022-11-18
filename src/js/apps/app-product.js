import { Product } from './product';
import { UI } from './ui';

const productForm = document.getElementById('product-form');

const hola = () => {
	const ui = new UI();

	productForm.addEventListener('submit', (ev) => {
		ev.preventDefault();

		const data = new FormData(productForm);
		const [name, price, year] = [...data.values()];

		if (!name.trim() || !price.trim() || !year.trim()) {
			return ui.showMessage('Complete los campos', 'warning');
		}

		const product = new Product(name, price, year);

		ui.resetForm(productForm);
		ui.addProduct(product);
	});

	ui.handleDelete();
};

export const appProduct = () => hola();
