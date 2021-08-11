window.addEventListener('DOMContentLoaded', () => {
    let area = document.getElementById("examples");
    let circleProps = {
        amount: 100,
        size: [100, 250],
        color: ["#973046","#262d37","#f23252"],
        opacity: [0.1, 1]
    }
    createOrbs(area, circleProps.amount, circleProps.size, circleProps.color, circleProps.opacity);
});

function rand_int(min, max) {
    return Math.floor(Math.random() * ((max+1) - min) + min);
}

function createOrbs(area, amount, size_range, color_range, opacity_range) {
    //get size
    let getSize = () => {
        let min = size_range[0];
        let max = size_range[1];
        return rand_int(min, max);
    }

    
    //get height and width of the area.
    let width = area.offsetWidth;
    let height = area.offsetHeight;
    
    //choose size, color, opacity, and position
    for(let i = 0; i < amount; i++) {
        let size = getSize();

        let position = [rand_int(0, width), rand_int(0, height)];
        
        let circle = document.createElement("div");
        circle.className = "background_circle";
        circle.style.width = size + "px";
        circle.style.height = size + "px";
        circle.style.left = (position[0]-size) + "px";
        circle.style.top = position[1] + "px";
        area.appendChild(circle);
    }
}