let httpCode = null;
let info0 = null;
let info1 = null;
let domain = window.location.hostname;
fetch("/error/errorinfo.json")
.then(response => {
    return response.json();
})
.then(data => httpCode = (data))
.then(() => {
    let pagett = document.getElementById("page-title");
    let tabtt = document.getElementById("tab-title");
    info0 = document.getElementById("info_0");
    info1 = document.getElementById("info_1");
    // fullErrCode = path.slice(path.lastIndexOf("/")+1,-5).replace("-",".");
    // errCode = parseInt(fullErrCode.substring(0,3));
    // if (fullErrCode.length >= 5) {
    //     subStat = fullErrCode.substring(fullErrCode.indexOf(".")+1);
    // };
    currentInfo = httpCode.find(info => info.code == errCode);
    if (errCode >= 500) {
        pagett.innerHTML = domain + " - Server Error";
    } else {
        pagett.innerHTML = domain + " - Client Error";
    }
    tabtt.innerHTML = currentInfo.err[subStat].info_0;
    document.getElementById("wait_notify").remove();
    info0.innerHTML = currentInfo.err[subStat].info_0;
    info1.innerHTML = currentInfo.err[subStat].info_1;
    document.getElementById("iis").innerHTML = "Powered by IIS v10.0.19041.1 / Windows 10 Pro 21H2";
})