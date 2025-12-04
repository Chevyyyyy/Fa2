const toggle = document.getElementById("modeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
});

// SCROLL ANIMATION
const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

function checkPosition() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.animationPlayState = "running";
        }
    });
}

window.addEventListener("scroll", checkPosition);
window.addEventListener("load", checkPosition);

// TOGGLE SECTIONS ON NAVBAR CLICK
const navLinks = document.querySelectorAll(".navbar a[href^='#']");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // prevent default jump
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // add the slide-up-active class
        targetSection.classList.add("slide-up-active");

        // smooth scroll to section
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
