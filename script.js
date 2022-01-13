const ham = document.querySelector(".hamburger");
const nav = document.querySelector('nav ul')
ham.addEventListener('click', () => {
    ham.classList.toggle("change");
    nav.classList.toggle("slide")
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});