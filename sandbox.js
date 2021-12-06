const quantity = document.querySelector('.quantity');
const addBtn = document.querySelector('.product--add');
const selectedSize = document.querySelector('.selected__size');
const productActive = document.querySelector('.product--active');
const productActiveDivs = document.querySelectorAll('.product--active div');
const small = document.querySelector('.small');
const medium = document.querySelector('.medium');
const large = document.querySelector('.large');
const cartContent = document.querySelector('.cart__content');
const cartItems = document.querySelector('.cart__items');
const errorMessage = document.querySelector('.error__message');

cartContent.addEventListener('click', () => {
	cartContent.classList.toggle('clicked--cart');

	cartItems.classList.toggle('cart__items--active');
});

let value = 1;

addBtn.addEventListener('click', () => {
	productActiveDivs.forEach(productActiveDiv => {
		if (productActiveDiv.classList.contains('selection__color__change')) {
			quantity.textContent = `(${value++})`;
		} else {
			errorMessage.classList.add('error__message--active');
		}
	});
});

addBtn.addEventListener('click', () => {
	productActiveDivs.forEach(productActiveDiv => {
		if (productActiveDiv.classList.contains('selection__color__change')) {
			errorMessage.classList.remove('error__message--active');
		}
	});
});

const outputSelectedSize = () => {
	productActive.addEventListener('click', event => {
		selectedSize.innerHTML = event.target.textContent;
	});

	small.addEventListener('click', () => {
		small.classList.add('selection__color__change');

		medium.classList.remove('selection__color__change');
		large.classList.remove('selection__color__change');
	});

	medium.addEventListener('click', () => {
		medium.classList.add('selection__color__change');

		small.classList.remove('selection__color__change');
		large.classList.remove('selection__color__change');
	});

	large.addEventListener('click', () => {
		large.classList.add('selection__color__change');

		small.classList.remove('selection__color__change');
		medium.classList.remove('selection__color__change');
	});
};

outputSelectedSize();
