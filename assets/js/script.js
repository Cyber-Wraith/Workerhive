document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".particles");
    if (!container) return;

    for (let i = 0; i < 14; i++) {
        let c = document.createElement("div");
        c.classList.add("circle");

        let size = Math.random() * 14 + 6;
        c.style.width = size + "px";
        c.style.height = size + "px";
        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = 6 + Math.random() * 6 + "s";

        container.appendChild(c);
    }
});
