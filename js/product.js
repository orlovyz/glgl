const productsBtn = document.querySelectorAll('.product__btn');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartNumb = document.querySelector('.nav__cart-number');
const fullPrice = document.querySelector('.fullprice');
let price = 0;
 
const randID = () => {
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
};
//random id for products

const normalPrice = () => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1');
};

const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} Ξ`;
};

const printNum = () => {
    let length = cartProductsList.querySelector('.cart-content__list').children.lenth;
    cartNumb.textContent = length;
    length > 0 ? cart.classList.add('#') : cart.classList.add('#');
};

const generateCartProduct = (img, title, price, id) => {
    return `
    <li class="cart-content__item">
                            <article class="cart-content__product cart-product data-id="${id}">
                                <img src="${img}" alt="1" class="cart-product" width="100px">
                                <div class="cart-product_text">
                                    <h3 class="cart-product__title">${title}</h3>
                                    <span class="cart-product__price">${price}</span>
                                </div>
                                
                            </article>
                        </li>
    `;
}

productsBtn.forEach(el => {
    el.closest('.product1').setAttribute('data-id', randID()); //rand id for each prod
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.product1');
        let id = parent.dataset.id;
        let img = parent.querySelector('.product__img').getAttribute('src');
        let title = parent.querySelector('.product__title').textContent;
        let priceNumber = parseInt(parent.querySelector('.product__price').textContent);

        //summ 
        plusFullPrice(priceNumber);
        console.log(price);
        //print fp
        printFullPrice();
        //add to cart
        cartProductsList.querySelector('.cart-content__list').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id))
        //count & print num
        printNum();
        //disabled btn
        self.disabled = true;

    });
})