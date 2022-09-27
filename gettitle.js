let domain = null;
let path = window.location.pathname;
path = decodeURI(path);
const tabtt = document.getElementById("tab-title");
const pagett = document.getElementById("page-title");
function isEmpty(inp) {
    if (inp == "") {return true} else {return false}
};
function addTitle(inp) {
    switch (inp) {
        case 0:
            domain = window.location.hostname;
            // If HTTP error, return Client / Server Error title
            if (typeof errCode == "number") {
                if (errCode >= 500) {
                    pagett.innerHTML = domain + " - Server Error";
                } else if (errCode >= 400) {
                    pagett.innerHTML = domain + " - Client Error";
                };
            };
            if (path.substring(0,3) == "/dl") {
                domain = "dl." + window.location.hostname;
                path = path.substring(3,path.length);
            };
            if (isEmpty(tabtt.textContent)) {
                tabtt.innerHTML = path + " - " + domain;
            };
            if (isEmpty(pagett.textContent)) {
                pagett.innerHTML = domain + " - " + path;
            };
            break;
        case 1:
            domain = document.createElement("a");
            domain.setAttribute("href","/");
            domain.setAttribute("class","title-txt")
            domain.textContent = window.location.hostname;
            // If HTTP error, return Client / Server Error title
            if (typeof errCode == "number") {
                if (errCode >= 500) {
                    pagett.innerHTML = " - Server Error";
                    pagett.prepend(domain);
                } else if (errCode >= 400) {
                    pagett.innerHTML = " - Client Error";
                    pagett.prepend(domain);
                };
            };
            if (isEmpty(tabtt.textContent)) {
                tabtt.innerHTML = path + " - " + domain.textContent;
            };
            if (isEmpty(pagett.textContent)) {
                pagett.innerHTML = " - " + path;
                pagett.prepend(domain);
            };
            break;
    }
};
// If the page is dl, return no-hyperlink
if (path.substring(0,3) == "/dl") {addTitle(0);} else {addTitle(1)};
// function willBeRemoved() {
//     if (confirm("I'm currently replacing \"setTimeout()\" with \"Async/Await\".\nReturn later or press \"OK\" to ignore this warning.")) {
//         window.location.href = "/dl";
//     };
// };