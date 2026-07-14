function scaricaPDF() {
    const link = document.createElement("a");
    link.href = "USS Valera   Ex Astris, Scientia (ultimo).pdf";
    link.download = "USS Valera   Ex Astris, Scientia (ultimo).pdf";
    link.click();
}