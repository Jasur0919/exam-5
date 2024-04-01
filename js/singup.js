const form = document.querySelector(".form");
const email = form.querySelector(".email");
const password = form.querySelector(".password");

const API_URL = "https://fakestoreapi.com/auth/login";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value === ""){
        email.style = `border-bottom: 1px solid red`
    }
    if(password.value === ""){
        password.style = `border-bottom: 1px solid red`
    }

    let user = {
        username: email.value,
        password: password.value
    }
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token);
        if(data.token){
            window.location.replace("../pages/admin.html");
        }
    })
    .catch(err => console.log(err))
})
