const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".navbar-menu");
const navLink = document.querySelector(".navbar-link")

hamburger.addEventListener("click", mobileMenu);
navLink.forEach( n => {
    n.addEventListener("click", closeMobileMenu)
})

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function closeMobileMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}