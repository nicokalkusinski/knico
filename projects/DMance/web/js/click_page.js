document.getElementById("hover-area").addEventListener("mouseleave", () => {
    document.getElementById("hover-area").innerText = "Hover me";
})
document.getElementById("hover-area").addEventListener("mouseover", () => {
    document.getElementById("hover-area").innerText = "Click me";
})
document.getElementById("hover-area").addEventListener("click", () => {
    document.getElementById("hover-area").style.display = "none";

    document.getElementById("circle").style.width = "100vw";
    document.getElementById("circle").style.height = "100vh";
    document.getElementById("circle").style.borderRadius = "0";

    document.getElementById("click_page").style.opacity = "0";

    document.body.style.overflow = "auto";

    setTimeout(() => {
        document.getElementById("click_page").style.display = "none";
    }, 600);
})