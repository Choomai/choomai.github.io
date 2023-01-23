let info0 = document.getElementById("info_0");
let info1 = document.getElementById("info_1");
currentInfo = httpCode.find(info => info.code == errCode);
addTitle(1);
document.title = currentInfo.err[subStat].info_0;
document.getElementById("wait_notify").remove();
info0.innerHTML = currentInfo.err[subStat].info_0;
info1.innerHTML = currentInfo.err[subStat].info_1;
document.getElementById("service").innerHTML = "Powered by IIS v10.0.19041.1 / Windows 10 Pro 22H2";