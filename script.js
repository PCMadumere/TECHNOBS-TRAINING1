const menuOpen = document.querySelector(".bx-menu")
const menuClose = document.querySelector(".bx-x")
const nav = document.querySelector("nav ul")

menuOpen.addEventListener("click", function(){
    nav.style.top = "40%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})

menuClose.addEventListener("click", function(){
    nav.style.top = "-40%"
    menuClose.style.display = "none"
    menuOpen.style.display = "block"
})