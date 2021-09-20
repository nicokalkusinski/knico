let navbar = document.getElementById("fix_nav");
let navbody = navbar.children[0];
navbody.style.top = "calc(50% - "+(navbody.offsetHeight/2)+"px)";

let items = navbody.children;

let sections = document.body.children;
console.log(sections, items);
console.log(sections[3].getBoundingClientRect());

let heights = [];
for(let i = 2; i < 8; i++) {
    heights[i-2] = sections[i].getBoundingClientRect().top;
}
console.log(heights);

document.addEventListener("scroll", () => {
    let currentScroll = document.documentElement.scrollTop;
    let vh = window.innerHeight;

    console.log(currentScroll);
    for(let i = 0; i < items.length; i++) {
        items[i].classList.remove("selected");
        items[i].classList.add("unselected");
    }
    for(let i = 0; i < heights.length; i++) {
        if(currentScroll+(vh/2) > heights[i] && currentScroll+(vh/2) < heights[i+1]) {
            items[i].classList.add("selected");
            items[i].classList.remove("unselected");
        }
    }
})

items[0].addEventListener("click", () => {document.getElementById("landing_page").scrollIntoView({behavior: "smooth"})});
items[1].addEventListener("click", () => {document.getElementById("djs").scrollIntoView({behavior: "smooth"})});
items[2].addEventListener("click", () => {document.getElementById("dancers").scrollIntoView({behavior: "smooth"})});
items[3].addEventListener("click", () => {document.getElementById("places").scrollIntoView({behavior: "smooth"})});
items[4].addEventListener("click", () => {document.getElementById("tickets-wrapper").scrollIntoView({behavior: "smooth"})});