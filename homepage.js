let endDate = new Date("Aug 13, 2023 00:00:00").getTime();
const timerDay = document.getElementById("timer-days");
const timerHour = document.getElementById("timer-hours");
const timerMin = document.getElementById("timer-mins");
const timerSec = document.getElementById("timer-secs");
let now,t,days,hours,mins,secs = NaN;
const params = new URLSearchParams(location.search);
if (params.get("fromWWW") == "true") {createPopup("You are really dumb, aren't you ?<br>You should know that I hate <code>www.</code> subdomain.")}
addTitle(1, false, true)
document.getElementById("nav-software").href = `javascript:createPopup('<a style="color:lime" href="/dl/">/dl</a>&nbsp;(choomai.ddns.net only)<br><a style="color:lime" href="https://dl.choomai.tk/">dl.choomai.tk</a> or <a style="color:lime" href="https://dl.choomai.xyz">dl.choomai.xyz</a>')`;
let timerFunc = setInterval(() => {
    now = new Date().getTime();
    t = endDate - now;
    if (t >= 0) {
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        secs = Math.floor((t % (1000 * 60)) / 1000);
        timerDay.innerHTML = days + "<span class='smhd'>d</span>";
        timerHour.innerHTML = hours + "<span class='smhd'>h</span>";
        timerMin.innerHTML = mins + "<span class='smhd'>m</span>";
        timerSec.innerHTML = secs + "<span class='smhd'>s</span>";
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
        clearInterval(timerFunc);
    };
}, 1000);