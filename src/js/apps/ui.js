export class UI {
	constructor() {
		this.productList = document.getElementById('product-list');
	}

	addProduct(product) {
		const element = document.createElement('div');
		element.innerHTML = `
      <div class='card text-center bg-dark'>
        <div class='card-body'>
          <strong class='d-block text-capitalize'>Producto: ${product.getName}</strong>
          <strong class='d-block'>S/. ${product.getPrice}</strong>
          <strong class='d-block'>Año: ${product.getYear}</strong>

          <a href='#' class='btn btn-danger' data-uid=${product.getUid}>Eliminar</a>
        </div>
      </div>
    `;

		this.productList.append(element);
		this.showMessage('Agregado correctamente', 'success');
	}

	resetForm(productForm) {
		productForm.reset();
	}

	deleteProduct(ev) {
		if (ev.target.dataset.uid) {
			ev.target.parentElement.parentElement.remove();
			this.showMessage('Eliminado correctamente', 'danger');
		}
	}

	handleDelete() {
		this.productList.addEventListener('click', (ev) => {
			this.deleteProduct(ev);
		});
	}

	showMessage(message, cssClass) {
		const div = document.createElement('div');

		div.className = `alert alert-${cssClass} position-fixed fixed-top`;
		div.textContent = message;
		const app = document.querySelector('.row');
		app.before(div);

		setTimeout(() => {
			div.remove();
		}, 2000);
	}
}
