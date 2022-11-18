import { KEY_PUBLIC, KEY_SECRET } from '../constant/stripe-keys';

const URL_STRIPE = 'https://api.stripe.com/v1';

const stripe = () => {
	const productsContainer = document.getElementById('products');
	const templateProduct = document.getElementById('template-product').content;
	const fragment = document.createDocumentFragment();

	if (!productsContainer || !templateProduct || !fragment) return;

	const headersOptions = {
		headers: {
			Authorization: `Bearer ${KEY_SECRET}`,
		},
	};

	getProductsAndPrices(headersOptions).then(({ products, prices, error }) => {
		if (!error) {
			prices.forEach((element) => {
				const productData = products.filter(
					(product) => product.id === element.product
				);

				templateProduct.querySelector('[data-product]').dataset.product =
					element.id;

				templateProduct.querySelector('[data-image]').src =
					productData[0].images[0];
				templateProduct.querySelector('[data-name]').textContent =
					productData[0].name;
				templateProduct.querySelector('[data-price]').textContent =
					formatPrice(element);

				const cloneTemplate = templateProduct.cloneNode(true);
				fragment.append(cloneTemplate);
			});

			productsContainer.append(fragment);
		} else {
			console.log(error);
		}
	});

	addEventListener('click', (ev) => {
		if (!ev.target.matches('.product')) return;

		const priceProduct = ev.target.dataset.product;

		Stripe(KEY_PUBLIC)
			.redirectToCheckout({
				lineItems: [{ price: priceProduct, quantity: 1 }],
				mode: 'subscription',
				successUrl: 'http://localhost:3000/src/page/stripe-success.html',
				cancelUrl: 'http://localhost:3000/src/page/stripe-cancel.html',
			})
			.then((resp) => {
				console.log(resp);
				if (resp.error) {
					productsContainer.after(resp.error.message);
				}
			});
	});
};

const getProductsAndPrices = async (headersOptions) => {
	let error = '';
	let products = [];
	let prices = [];

	try {
		const responses = await Promise.all([
			fetch(`${URL_STRIPE}/products`, headersOptions),
			fetch(`${URL_STRIPE}/prices`, headersOptions),
		]);
		const result = await Promise.all(responses.map((resp) => resp.json()));

		products = result[0].data;
		prices = result[1].data;
	} catch (ex) {
		const message =
			ex.statusText || 'Ocurrió un error al conectarse con la API de Stripe';
		error = message;
	}

	return { products, prices, error };
};

const getProducts = async () => {
	try {
		const resp = await fetch(`${URL_STRIPE}/products`, {
			headers: {
				Authorization: `Bearer ${KEY_SECRET}`,
			},
		});

		const result = await resp.json();

		const listOfProducts = await result.data;
		console.log(listOfProducts);
	} catch (ex) {
		console.log(ex);
	}
};

const getPrices = async () => {
	try {
		const resp = await fetch(`${URL_STRIPE}/prices`, {
			headers: {
				Authorization: `Bearer ${KEY_SECRET}`,
			},
		});

		const result = await resp.json();
		const productPrices = await result.data;

		console.log(productPrices);
	} catch (ex) {
		console.log(ex);
	}
};

const formatPrice = ({ unit_amount_decimal, currency }) =>
	`S/. ${unit_amount_decimal.slice(0, -2)}.${unit_amount_decimal.slice(
		-2
	)} ${currency}`;

export default stripe;
