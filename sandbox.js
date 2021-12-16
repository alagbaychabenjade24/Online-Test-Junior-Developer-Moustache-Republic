const addBtn = document.querySelector('.product--add');
const selectedSize = document.querySelector('.selected__size');
const productActive = document.querySelector('.product--active');
const productActiveLists = document.querySelectorAll('.product--active li');
const cartContent = document.querySelector('.cart__content');
const cartItems = document.querySelector('.cart__items');
const errorMessage = document.querySelector('.error__message');
const cartItem = document.querySelector('header .cart .cart__items .item');
const cartItemImg = document.querySelector(
	'header .cart .cart__items .item img'
);
const cartItemName = document.querySelector(
	'header .cart .cart__items .item .product__details .product__name'
);
const cartItemSize = document.querySelector(
	'header .cart .cart__items .item .product__details .product__size .size'
);
const cartItemPrice = document.querySelector(
	'header .cart .cart__items .item .product__details .col .product__price'
);
const cartItemNumber = document.querySelector(
	'header .cart .cart__items .item .product__details .col .quantity'
);

const itemImg = document.querySelector('main .products .product img');
const itemName = document.querySelector(
	'main .products .product .product__details .product__name'
);
const itemPrice = document.querySelector(
	'main .products .product .product__details .product__price'
);

cartContent.addEventListener('click', () => {
	cartContent.classList.toggle('clicked--cart');

	cartItems.classList.toggle('cart__items--active');
});

productActiveLists.forEach(productActiveList => {
	productActiveList.addEventListener('click', function () {
		productActiveLists.forEach(res =>
			res.classList.remove('selection__color__change')
		);

		this.classList.add('selection__color__change');
	});
});

let itemNumber = 0;

addBtn.addEventListener('click', () => {
	errorMessage.classList.add('error__message--active');

	productActiveLists.forEach(productActiveList => {
		if (productActiveList.classList.contains('selection__color__change')) {
			cartItem.classList.add('item__show');
			cartItemImg.setAttribute('src', itemImg.getAttribute('src'));
			cartItemName.innerHTML = itemName.textContent;
			cartItemNumber.innerHTML = ++itemNumber + 'x';
			cartItemPrice.innerHTML =
				'$' +
				Number(itemPrice.textContent.replace(/[^0-9\.]+/g, '')) *
					Number(cartItemNumber.textContent.replace(/[^0-9\.]+/g, '')) +
				'.00';

			cartItemSize.innerHTML = productActiveList.textContent;

			errorMessage.classList.remove('error__message--active');
		} else {
			return true;
		}
	});
});
