var more = window.document.getElementById("More")
var menu = window.document.getElementById("menu-more")
var dark_light = window.document.getElementById("toggle-dark-light")
var html = window.document.documentElement
more.addEventListener("click", function() {
    menu.classList.toggle("flex")
})
dark_light.addEventListener("click", function() {
    html.classList.toggle("dark")
    if(html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light") 
    }
})
window.onload= function() {
    var savetheme = localStorage.getItem("theme")
    if(savetheme === "dark") {
        html.classList.add("dark")
    }
    else if(savetheme === "light") {
        html.classList.remove("dark")
    }
}