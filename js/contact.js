

const Api_Url = "https://dummyjson.com/products";
const contactBox = document.querySelector(".contact_box");

async function fetchData(api) {
    try {
      const path = new URLSearchParams(window.location.search);
      const id = path.get("id");
      const response = await fetch(`${api}/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      createData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

fetchData(Api_Url);

function createData(product) {
    const contactBox = document.querySelector(".contact_box");
    contactBox.innerHTML = `
      <div class="contact_control_stil">
          <img class="contact_control_stil_img" src=${product.images[0]} alt="">
          <img class="contact_control_stil_img" src=${product.images[1]} alt="">
          <img class="contact_control_stil_img" src= ${product.images[2]} alt="">
          <img class="contact_control_stil_img" src= ${product.images[3]} alt="">
      </div>
      <div class="contact_control">
          <img src="${product.thumbnail}" alt="">
      </div>
      <div class="contact_information">
          <h1 class="contact_h1">${product.name}</h1>
          <div class="star">
              <img src="../images/contact-star.svg" alt=""> 
              <span>(150 Reviews) |</span>
              <p>In Stock</p>
          </div>
          <h2 class="contact_h2">$${product.price}</h2>
          <p class="contact_p">${product.description}</p>
          <div class="lll"></div>
          <div class="contact_color">
              <p>Colours:</p>
              <img src="../images/contact-colors.svg" alt="">
          </div>
          <div class="size">
              <h3>Size:</h3>
              <span>
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
              </span>
          </div>
          <div class="contact_math">
              <div class="contact_math_1">
                  <p class="contact_math_1_p burchak">-</p>
                  <p class="contact_math_2_p burchak">2</p>
                  <p class="contact_math_3_p burchak">+</p>
              </div>
              <button class="ww_btn">Buy Now</button>
              <img class="ww" src="../images/contact-heart.svg" alt="">
          </div>
          <div class="contact_camyon">
              <img src="../images/contact-camyon.svg" alt="">
              <div class="contact_camyon_text">
                  <h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
              </div>
          </div>
          <div class="contact_camyon_next">
              <img src="../images/contact-strelka-1111111.svg" alt="">
              <div class="contact_camyon_text">
                  <h3>Return Delivery</h3>
                  <p>Free 30 Days Delivery Returns. Details</p>
              </div>
          </div>
      </div>`;
  }
  
