window.addEventListener("scroll", changeCss, false);

function changeCss () {
    let height = document.documentElement.clientHeight;
    var bodyElement = document.querySelector("body");
    let navbar = document.getElementById("nav_bar");
    if(this.scrollY > height) {
        navbar.style.position = "fixed"
        // navbar.style.top = "initial";
        // navbar.style.bottom = "0%";
        navbar.style.height = "5vh";
    } else {
        navbar.style.position = "absolute";
        // navbar.style.top = "0%";
        navbar.style.height = "10vh";
    }

    console.log(this.scrollY, height);
}