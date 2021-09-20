let days;
let hours;
let minutes;
let seconds;

let setUpTime = () => {
    days = 132;
    hours = 12;
    minutes = 36;
    seconds = 31;
}

setUpTime();

let time_counter = setInterval(() => {
    seconds--;
    if(seconds < 0) {
        seconds = 59;
        minutes--;
        if(minutes < 0) {
            minutes = 59;
            hours--;
            if(hours < 0) {
                hours = 23;
                days--;
                if(days < 0) {
                    setUpTime();
                }
            }
        }
    }
    document.getElementsByClassName("time")[0].children[4].innerHTML = days;
    document.getElementsByClassName("time")[0].children[5].innerHTML = hours;
    document.getElementsByClassName("time")[0].children[6].innerHTML = minutes;
    document.getElementsByClassName("time")[0].children[7].innerHTML = seconds;
}, 1000);