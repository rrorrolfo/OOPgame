// Hide layout when start button is clicked

const overlay = document.querySelector("#overlay");
const start_btn = document.querySelector("#btn__reset");

start_btn.addEventListener("click", () => {
    overlay.style.display = "none";
});
