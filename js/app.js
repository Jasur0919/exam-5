const headerBotPage = document.querySelector(".header-bot-page");
const menu = document.querySelector(".menu");
const  products = document.querySelector('.product_cards');


const Api_Url = 'https://dummyjson.com/products';


menu.addEventListener("click", () => {
  headerBotPage.classList.toggle("google");
});

//  API  ////////////////////////

async function card(api){
    fetch(api)
    .then(res => res.json())
    .then(data => {
        creatCard(data.products)
    })
    .catch(arr => console.log(arr))
}
card(Api_Url)

function creatCard(list){
   const fragment = document.createDocumentFragment();
    list.slice(0, 8).forEach(element => {
        const card = document.createElement("div");
        card.className = "product_card";
        card.innerHTML = `
            <div class="product_cart_img">
                <img class="product_img_cat" src=${element.images[0]} alt="image">
            <div  class="p_img_1">
                <img class="p_img_2" src="./images/product-Heart.svg" alt="">
                <img class="p_img_3" src="./images/product-eye.svg" alt="">
            </div>
            </div>
            <p class="product_name" >${element.title.length > 20 ? element.title.slice(0, 20) + "..." : element.title}
            </p>

            <span class="product_price">${element.price} <img src="./images/product-- Star.svg" alt=""> <p>(36)</p></span>

      `;
    fragment.appendChild(card);
});
    products.appendChild(fragment)
}