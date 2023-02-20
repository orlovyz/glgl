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
},
{
    id : 4,
    title: "WEATHER",
    price: 85,
    url: './img/product/4.svg'

},
{
    id : 5,
    title: "FAKE LOVE",
    price: 90,
    url: './img/product/5.svg'
},
{
    id : 6,
    title: "WEATHER",
    price: 85,
    url: './img/product/6.svg'

},
{
    id : 7,
    title: "WEATHER",
    price: 85,
    url: './img/product/7.svg'

},
{
    id : 8,
    title: "WEATHER",
    price: 85,
    url: './img/product/8.svg'

}
];

const promise1 = new Promise(promiseBody);

 function promiseBody(resolve, reject) {
     setTimeout(() => {
         resolve(database);
     }, 1000);
 }

 
  promise1.then((result) => {
    const mapres = result.map((x) => generateCartProduct(x.url, x.title, x.price, x.id));
    let productHtmls = []
    for(let i = 0; i < result.length; i++) {
        const elem = result[i]
        const html = generateCartProduct(elem.url, elem.title, elem.price, elem.id);

        productHtmls.push(html)

    }
    const docwr =  document.getElementById('wrapper');
    
    for (let x of mapres){
        docwr.insertAdjacentHTML('beforeend', x);
    }
  });