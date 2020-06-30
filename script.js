const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// gets base time when browser opens
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
// sets initial hand positions to base time
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {
// Hands will move without regard to actual computer clock. If Java is paused ot throttled, time shown on clock will bw wrong.
    hrPosition = hrPosition+(360/12/60/60); // 360deg/12hr/60min/60sec
    minPosition = minPosition+(360/60/60); // 360deg/60min/60sec
    secPosition = secPosition+(360/60); // 360deg/60sec
// Thes transformations must come after the position calcs or they will be one second slow.
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000); // runs every 1000ms or 1sec
