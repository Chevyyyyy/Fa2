const toggle = document.getElementById("modeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
});

// Scroll Reveal Animation
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
