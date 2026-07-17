function scaricaPDF() {
    const link = document.createElement("a");
    link.href = "USS Valera   Ex Astris, Scientia (ultimo).pdf";
    link.download = "USS Valera   Ex Astris, Scientia (ultimo).pdf";
    link.click();
}
const starsContainer = document.getElementById("stars");

// crea 150 stelle
for (let i = 0; i < 150; i++) {
    let star = document.createElement("div");
    star.className = "star";

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;

    starsContainer.appendChild(star);
}

// animazione CSS dinamica
const style = document.createElement("style");
style.innerHTML = `
@keyframes twinkle {
    0% { opacity: 0.2; }
    50% { opacity: 1; }
    100% { opacity: 0.2; }
}
`;
document.head.appendChild(style);