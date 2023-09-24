let endDate = new Date("Aug 13, 2024 00:00:00").getTime();
const timerDay = document.getElementById("timer-days");
const timerHour = document.getElementById("timer-hours");
const timerMin = document.getElementById("timer-mins");
const timerSec = document.getElementById("timer-secs");
let now,t,days,hours,mins,secs = NaN;
let targetDate = new Date("Aug 13, 2024 00:00:00");
const params = new URLSearchParams(location.search);
if (params.get("fromWWW") == "true") {createPopup("You are really dumb, aren't you ?<br>You should know that I hate <code>www.</code> subdomain.")}
addTitle(1, false, true)
let timerFunc = setInterval(() => {
    let today = new Date();
    let timeLeft = targetDate.getTime() - today.getTime();
    if (timeLeft >= 0) {
        let daysLeft =  Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerDay.innerHTML = daysLeft + "d";
        timerHour.innerHTML = hoursLeft + "h";
        timerMin.innerHTML = minutesLeft + "m";
        timerSec.innerHTML = secondsLeft + "s";
    } else {
        document.getElementById("timer").innerHTML = "<a href='/event/birthday/'>The countdown is over!</a>";
        clearInterval(timerFunc);
    };
}, 1000);