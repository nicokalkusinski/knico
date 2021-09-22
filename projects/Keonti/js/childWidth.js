let parents = document.getElementById("wrapper").children;
let children = document.getElementsByClassName("info");

console.log(parents, children);

for(let i = 0; i < parents.length - 1; i++) {
    children[i].style.width = parents[i].offsetHeight + "px";
    // console.log(children[i].style);
    // console.log(parents[i].offsetHeight);
}