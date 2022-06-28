const ham = document.querySelector(".hamburger");
const nav = document.querySelector('nav ul')
ham.addEventListener('click', () => {
    ham.classList.toggle("change");
    nav.classList.toggle("slide")
});