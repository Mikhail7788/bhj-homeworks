const quantity = document.getElementsByClassName('product__quantity-value');
const addProduct = document.getElementsByClassName('product__add');
const cartProducts = document.querySelector('.cart__products');
const product = document.getElementsByClassName('product');
const plusProduct = document.getElementsByClassName('product__quantity-control_inc');
const minusProduct = document.getElementsByClassName('product__quantity-control_dec');

for (let index = 0; index < quantity.length; index++) {

    plusProduct[index].addEventListener('click', () => {
        quantity[index].textContent++;
    })

    minusProduct[index].addEventListener('click', () => {
        quantity[index].textContent--;

        if (quantity[index].textContent < '1') {
            quantity[index].textContent = '1'
        }
    });
    addProduct[index].addEventListener('click', () => {

        if(quantity[index].textContent === '0') {
            return
        }
        for (let i = 0; i < cartProducts.children.length; i++) {
            if (cartProducts.children[i].dataset.id === product[index].dataset.id) {
                return cartProducts.children[i].querySelector('.cart__product-count').textContent = Number(cartProducts.children[i].querySelector('.cart__product-count').textContent) + Number(quantity[i].textContent);
            }
        }

        cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product[index].dataset.id}">
                <img class="cart__product-image" src="${product[index].querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${quantity[index].textContent}</div>
            </div>
            `); 
    });
}