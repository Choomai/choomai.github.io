/* 
    Using RANDOM.ORG API to generate an integer (range: 1 to 3)
    Key Name: "choomai-web", License: Developer
    Daily limits: 1000 reqs/day & 250000 bits/day, Rate limit: 10 reqs/second
*/
let ranInt = NaN;
let totalClick = 0;
let hasClicked = false;
let vid = null;
function vidbase() {
    document.getElementById("txt").innerHTML = "<b style='color:yellow'>WARN: Scripts may close only the windows that were opened by them.</b><br><video id='vid' class='fullscreen' loop></video>";
    vid = document.getElementById("vid");
};
function vid_reqfs(vid_inp) {
    hasClicked = true;
    window.onbeforeunload = function() {
        if (hasClicked) return true;
    };
    vid.src = vid_inp;
    vid.requestFullscreen();
    vid.play();
};
function closetab() {
    if (!document.webkitIsFullScreen) {
        window.close();
    }
};
function redirect() {
    if(document.getElementById("continue").checked) {
        // alert("I've disabled this option because someone won't let me enable it...");
        vidbase();
        vid_reqfs("userdebug.mp4");
        vid.style.objectFit = "cover";
    }
    else if(document.getElementById("vidoverlay").checked) {
        // Try your luck here 😂
        document.getElementById("txt").innerHTML = "Wait...";
        fetch("https://api.random.org/json-rpc/4/invoke", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "jsonrpc":"2.0",
                "method":"generateIntegers",
                "id":0,
                // "params":{"apiKey":"913f26a3-6209-4ca4-b45a-aeac662594ce","n":1,"min":1,"max":5}
            })
        })
        .then(response => {return response.json();})
        .then(response => {
            if (!response.error) {
                random = (response.result);
                ranInt = response.result.random.data[0];
                console.log("Request left: "+random.requestsLeft);
                console.log("Bits left: "+random.bitsLeft);
                vidbase();
                switch(ranInt) {
                    case 1: vid_reqfs("chuitheconcac.mp4");
                    break;
                    case 2: vid_reqfs("frifai.mp4");
                    break;
                    case 3: vid_reqfs("fnaf%20jumpscare.mp4");
                    break;
                    case 4: vid_reqfs("rickroll.mp4");
                    break;
                    case 5: vid_reqfs("jumpscare.mp4");
                    break;
                }
                document.addEventListener('fullscreenchange', closetab, false);
            } else {
                document.getElementById("txt").innerHTML = "<b style='color:red'>"
                    + "Failed to get random number from&nbsp;"
                    + "<a style='color:white' href='https://random.org target='_blank' rel='noopener noreferrer'>RANDOM.ORG</a>.<br>"
                    + `Error Code: ${response.error.code}<br>`
                    + `Error Message: ${response.error.message}`
                    + "</b><br>"
            }
        })
    }
};
function redirectV2() {
    // Is this an easter egg ? 😂
    totalClick++;
    if (totalClick <= 1) {alert("This function has been disabled by the owner of this webiste.")}
    else if (totalClick > 1 && totalClick <= 3) {alert("Thi? f?nct?on has been d?sabled by the own?r o? this webi?te.")}
    else if (totalClick > 3 && totalClick <= 4) {alert("T?i? f?nct\\on ha? be?? d$s\\bl/d ?y t?? own?r o? t?!? w?bi?te.")}
    else if (totalClick > 4 && totalClick <= 6) {alert("T¾i¾ f@n¾t$o& ha½ ?e?? d$?a?¾?? ?y t$? o!n¼r o? t\\½? w?b?½te.")}
    else if (totalClick == 7) {alert("Press OK to ignore the waring.");redirect()}
    else if (totalClick > 7) {redirect()};
};
// For countdown
// let endDate = new Date("Aug 13, 2023 00:00:00").getTime();
// const timerDay = document.getElementById("timer-days");
// const timerHour = document.getElementById("timer-hours");
// const timerMin = document.getElementById("timer-mins");
// const timerSec = document.getElementById("timer-secs");
// setInterval(() => {
//     let now = new Date().getTime();
//     let t = endDate - now;
//     if (t >= 0) {
//         let days = Math.floor(t / (1000 * 60 * 60 * 24));
//         let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         let secs = Math.floor((t % (1000 * 60)) / 1000);
//         timerDay.innerHTML = days + "<span class='label'>d</span>";
//         timerHour.innerHTML = hours + "<span class='label'>h</span>";
//         timerMin.innerHTML = mins + "<span class='label'>m</span>";
//         timerSec.innerHTML = secs + "<span class='label'>s</span>";
//     } else {
//         document.getElementById("timer").innerHTML = "The countdown is over!";
//     }
// }, 1000);