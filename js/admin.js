const adminLink = document.querySelector(".admin__link")
function checkAdmin() {
    let isLogin = localStorage.getItem("token")
    if(isLogin){
        adminLink.innerHTML = "Admin"
        adminLink.setAttribute("href" , "../pages/admin.html")
    }else{
        adminLink.innerHTML = "Sign In"
        adminLink.setAttribute("href " , "../pages/signup.html")
    }
}
checkAdmin()