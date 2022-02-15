const login = document.querySelector(".login-form");
const signup = document.querySelector(".signup-form");
const sbtn = document.getElementById("sign-up-btn");
const lbtn = document.getElementById("log");

sbtn.addEventListener('click',() => {
    login.style.display = "none";
    signup.style.display = "flex";
})

lbtn.addEventListener('click',() => {
    signup.style.display = "none";
    login.style.display = "flex";
})
