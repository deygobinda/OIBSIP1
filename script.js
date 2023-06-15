const btn = document.getElementById("toggle-btn")
const activeClass = document.getElementById("nav-links")
const navlinks = document.getElementsByClassName("nav-links-li")
const right = document.querySelectorAll('.feature-desc')
const left = document.querySelectorAll(".feature-img")
btn.addEventListener('click', function () {
    activeClass.classList.toggle("active")
}
)


