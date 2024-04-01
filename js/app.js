const headerBotPage = document.querySelector(".header-bot-page");
const menu = document.querySelector(".menu");
const  products = document.querySelector('.product_cards');
const Api_Url = 'https://dummyjson.com/products';


menu.addEventListener("click", () => {
  headerBotPage.classList.toggle("google");
});

//  API  ////////////////////////

// async function card(api){
//     let data = await fetch(api)
//     data
//     .json()
//     .then(res => console.log(res))
//     .then(data => {
//         creatCard(data)
//     })
//     // .catch(arr => console.log(arr))
// }
// card(Api_Url)

// function creatCard(list){
//    const fragment = document.createDocumentFragment();
//     list.products.slice(0, 8).forEach(element => {
//         const card = document.createElement("div");
//         card.className = "product_card";
//         card.innerHTML = `
//         <div data-id=${element.id}>
//             <div class="product_cart_img" >
//                 <img name="product-img" class="product_img_cat" src=${element.images[0]} alt="image">
//             <div  class="p_img_1">
//                 <img class="p_img_2" src="./images/product-Heart.svg" alt="">
//                 <img class="p_img_3" src="./images/product-eye.svg" alt="">
//             </div>
//             </div>
//             <p class="product_name" >${element.title.length > 20 ? element.title.slice(0, 20) + "..." : element.title}
//             </p>

//             <span class="product_price">${element.price} <img src="./images/product-- Star.svg" alt=""> <p>(36)</p></span>
//             </div>
//       `;
//     fragment.appendChild(card);
// });
//     products.appendChild(fragment)
// }


// // const card=(id)=>{
// //     window.open(`../pages/contact.html?id=${id}`, "_self")
// // }

// products.addEventListener('click', (e) =>{
//     if(e.target.name = "product-img"){
//         let id = e.target.closest("[data-id]").dataset.id
//        card(id)
//     }
// })


async function card(api){
    try {
        const response = await fetch(api);
        const data = await response.json();
        createCard(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
card(Api_Url)

function createCard(list){
    const fragment = document.createDocumentFragment();
    list.products.slice(0, 8).forEach(element => {
        const card = document.createElement("div");
        card.className = "product_card";



        /*
        "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
        */ 


      let str = `
      <div data-id=${element.id}>
                <div class="product_cart_img">
                    <img name="product-img" class="product_img_cat" src=${element.images[0]} alt="image">
                    <div class="p_img_1">
                        <img class="p_img_2" src="./images/product-Heart.svg" alt="">
                        <img class="p_img_3" src="./images/product-eye.svg" alt="">
                    </div>
                </div>
                <p class="product_name">${element.title.length > 20 ? element.title.slice(0, 20) + "..." : element.title}</p>
                <span class="product_price">${element.price} <img src="./images/product-- Star.svg" alt=""> <p>(36)</p></span>
            </div>`
        card.innerHTML =str;
        fragment.appendChild(card);
    });
    products.appendChild(fragment);
}

products.addEventListener('click', (e) => {
    if(e.target.name ="product-img"){
        let id = e.target.closest("[data-id]").dataset.id;

    
        navigateToProductDetailsPage(id);
    }
});

function navigateToProductDetailsPage(id) {
    window.open(`/pages/contact.html?id=${id}`, "_self");
}


///  LOGIN  ///////////////


const adminLink = document.querySelector(".admin__link")
function checkAdmin() {
    let isLogin = localStorage.getItem("token")
    if(isLogin){
        adminLink.innerHTML = "Admin"
        adminLink.setAttribute("href", "../pages/admin.html")
    }else{
        adminLink.innerHTML = "Sign In"
        adminLink.setAttribute("href " , "../pages/signup.html")
    }
}
checkAdmin()
