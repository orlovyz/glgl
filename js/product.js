const productsBtn = document.querySelectorAll('.product__btn');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartNumb = document.querySelector('.nav__cart-number');
const fullPrice = document.querySelector('.fullprice');
const database = [
{
    id : 1,
    title: "SPACE EYE",
    price: 100,
    url: './img/product/1.svg'
},
{
    id : 2,
    title: "FIZZY",
    price: 90,
    url: './img/product/2.svg'
},
{
    id : 3,
    title: "FEAR",
    price: 70,
    url: './img/product/3.svg'
}
];

let price = 0;

 
const randID = () => {
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
};
//random id for products


const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `currentPrice Ξ`;
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
        cartProductsList.querySelector('.cart-content__list').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
        //count & print num
        printNum();
        //disabled btn
        self.disabled = true;

    });
});

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(database);
    }, 1000);
  });

  promise1.then((result) => {
    const mapres = result.map((x) => generateCartProduct(x.url, x.title, x.price, x.id));
    const docwr =  document.getElementById('wrapper');
    
    for (let x of mapres){
        docwr.insertAdjacentHTML('beforeend', x);
    }
  });

  