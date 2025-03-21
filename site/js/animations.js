document.addEventListener("DOMContentLoaded", function() {
    let heroText = document.querySelector(".hero h1");
    heroText.style.opacity = "0";
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transition = "opacity 2s";
    }, 500);
});
