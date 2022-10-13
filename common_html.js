// Prep.
let domain = null;
let path = location.pathname;
path = decodeURI(path);
let slashMap = [];
for (let i = 0; i < path.length; i++) {
    if (path[i] == "/") {
        slashMap.push(i);
    };
};
let slashCount = slashMap.length;
let currentDir = null;
if (path.substring(slashMap[slashCount-2]+1,slashMap[slashCount-1]) == "dl" || (path == "/" && location.hostname.substring(0,2) == "dl")) {
    currentDir = "/";
} else {
    currentDir = path.substring(slashMap[slashCount-2]+1,slashMap[slashCount-1]);
}
function isEmpty(inp) {
    if (inp == "") {return true} else {return false}
};
function isDL(inp) {
    tmp_path = location.pathname;
    tmp_host = location.hostname;
    if (inp == 0) {
        if (tmp_path.substring(0,3) == "/dl") {return true} else {return false};
    } else if (inp == 1) {
        if (tmp_host.substring(0,2) == "dl") {return true} else {return false};
    }
}
const tabtt = document.getElementById("tab-title");
const pagett = document.getElementById("page-title");
const contact = document.getElementById("contact");
// End prep.
function addContact(inp) {
    // let social = null;
    // let socialImg = null;
    // let email = document.createElement("h2")
    // email.setAttribute("class","center email");
    // if (inp == 1) {email.textContent = "Report bugs & corrupted files: "} else {email.textContent = "Email: "};
    // let emailURL = document.createElement("a")
    // emailURL.href = "mailto:nguyencaonguyen0944322545@gmail.com";
    // emailURL.style = "color:#4287F5";
    // emailURL.textContent = "nguyencaonguyen0944322545@gmail.com";
    // email.appendChild(emailURL);
    // contact.appendChild(email);
    for (let i = 0; i <= 3; i++) {
        const urlMap = [
            "https://facebook.com/uranidiot0606",
            "https://twitter.com/choomai0",
            "https://github.com/Choomai",
            "https://discord.gg/J8tsBMUfUY"
        ];
        const imgMap = [
            "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
            "https://cdn-icons-png.flaticon.com/128/733/733579.png",
            "https://github.githubassets.com/favicons/favicon-dark.svg",
            "https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
        ];
        social = document.createElement("a")
        social.href = urlMap[i];
        socialImg = document.createElement("img")
        socialImg.setAttribute("class","profile")
        socialImg.src = imgMap[i];
        social.appendChild(socialImg);
        contact.appendChild(social);
    }
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
            // Convert /dl/ to dl.*
            if (path.substring(0,3) == "/dl") {
                domain = "dl." + window.location.hostname;
                path = path.substring(3,path.length);
            };
            if (isEmpty(tabtt.textContent)) {
                // tabtt.innerHTML = path + " - " + domain;
                tabtt.innerHTML = currentDir + " - Server Repository";
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
                // tabtt.innerHTML = path + " - " + domain.textContent;
                tabtt.innerHTML = path.substring(slashMap[slashCount-2]+1,slashMap[slashCount-1]) + " - Server Repository";
            };
            if (isEmpty(pagett.textContent)) {
                pagett.innerHTML = " - " + path;
                pagett.prepend(domain);
            };
            break;
    }
};
addContact();
// If current page is /dl/*, return no-hyperlink title & "Report bugs & corrupted files: "
if (path.substring(0,3) == "/dl" || location.hostname.substring(0,2) == "dl") {addTitle(0)} else {addTitle(1)};