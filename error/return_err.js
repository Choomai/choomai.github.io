let httpCode = null;
let info0 = null;
let info1 = null;
let domain = window.location.hostname;
let pagett = document.getElementById("page-title");
let tabtt = document.getElementById("tab-title");
main_info = "404 - File or directory not found.";
sub_info = "The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.";
info0 = document.getElementById("info_0");
info1 = document.getElementById("info_1");
// fullErrCode = path.slice(path.lastIndexOf("/")+1,-5).replace("-",".");
// errCode = parseInt(fullErrCode.substring(0,3));
// if (fullErrCode.length >= 5) {
//     subStat = fullErrCode.substring(fullErrCode.indexOf(".")+1);
// };
pagett.innerHTML = domain + " - Client Error";
tabtt.innerHTML = main_info
info0.innerHTML = main_info;
info1.innerHTML = sub_info;