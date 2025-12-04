const toggle = document.getElementById("modeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
});
