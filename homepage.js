let endDate = new Date("Aug 13, 2023 00:00:00").getTime();
const timerDay = document.getElementById("timer-days");
const timerHour = document.getElementById("timer-hours");
const timerMin = document.getElementById("timer-mins");
const timerSec = document.getElementById("timer-secs");
setInterval(() => {
    let now = new Date().getTime();
    let t = endDate - now;
    if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        timerDay.innerHTML = days + "<span class='label'>d</span>";
        timerHour.innerHTML = hours + "<span class='label'>h</span>";
        timerMin.innerHTML = mins + "<span class='label'>m</span>";
        timerSec.innerHTML = secs + "<span class='label'>s</span>";
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
    }
}, 1000);