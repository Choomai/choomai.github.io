let endDate = new Date("Aug 13, 2023 00:00:00").getTime();
const timerDay = document.getElementById("timer-days");
const timerHour = document.getElementById("timer-hours");
const timerMin = document.getElementById("timer-mins");
const timerSec = document.getElementById("timer-secs");
let now,t,days,hours,mins,secs = NaN;
let timerFunc = setInterval(() => {
    now = new Date().getTime();
    t = endDate - now;
    if (t >= 0) {
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        secs = Math.floor((t % (1000 * 60)) / 1000);
        timerDay.innerHTML = days + "<span class=\"smhd\">d</span>";
        timerHour.innerHTML = hours + "<span class=\"smhd\">h</span>";
        timerMin.innerHTML = mins + "<span class=\"smhd\">m</span>";
        timerSec.innerHTML = secs + "<span class=\"smhd\">s</span>";
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
        clearInterval(timerFunc);
    };
}, 100);