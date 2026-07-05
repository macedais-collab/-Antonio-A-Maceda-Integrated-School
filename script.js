const aboutImage = document.getElementById("aboutImage");
const imageOverlay = document.getElementById("imageOverlay");

aboutImage.addEventListener("click", () => {
    imageOverlay.classList.add("show");
});

imageOverlay.addEventListener("click", (e) => {
    if (e.target === imageOverlay) {
        imageOverlay.classList.remove("show");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        imageOverlay.classList.remove("show");
    }
});