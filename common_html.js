// Version 1.1.7@main

// Prep.
const docElem = document.documentElement;
let domain = null;
let path = decodeURI(location.pathname);
let slashMap = [];
for (let i = 0; i < path.length; i++) {
    if (path[i] == "/") {slashMap.push(i);};
};
let slashCount = slashMap.length;
let currentDir = null;
if (path.substring(slashMap[slashCount-2]+1,slashMap[slashCount-1]) == "dl" || (path == "/" && location.hostname.substring(0,2) == "dl")) {
    currentDir = "/";
} else {currentDir = path.substring(slashMap[slashCount-2]+1,slashMap[slashCount-1]);}
function isDL(inp) {
    tmp_path = location.pathname;
    tmp_host = location.hostname;
    if (inp == 0) {
        if (tmp_path.substring(0,3) == "/dl") {return true} else {return false};
    } else if (inp == 1) {
        if (tmp_host.substring(0,2) == "dl") {return true} else {return false};
    }
}
// End prep.
function createPopup(content, time) {
    let popup_html = document.createElement("dialog");
    let closeButton = document.createElement("span");
    popup_html.id = "popup";
    popup_html.classList.add("popup");
    closeButton.classList.add("close-popup");
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("onclick",'popup.close();setTimeout(() => popup.remove(), 500)');
    popup_html.innerHTML = content;
    popup_html.appendChild(closeButton);
    document.body.appendChild(popup_html);
    popup.showModal();
    if (time) {setTimeout(() => {setTimeout(popup.close())}, time)}
};
function addContact(type) {
    const contact = document.getElementById("contact");
    /* 
    let social,socialImg = null;
    let email = document.createElement("h2");
    email.setAttribute("class","center email");
    if (inp == 1) {email.textContent = "Report bugs & corrupted files: "} else {email.textContent = "Email: "};
    let emailURL = document.createElement("a")
    emailURL.href = "mailto:nguyencaonguyen0944322545@gmail.com";
    emailURL.style = "color:#4287F5";
    emailURL.textContent = "nguyencaonguyen0944322545@gmail.com";
    email.appendChild(emailURL);
    contact.appendChild(email); 
    */
    const urlMap = [
        "https://facebook.com/uranidiot0606",
        "https://twitter.com/choomai0",
        "https://github.com/Choomai"
    ];
    const imgMap = [
        "https://cdn.choomai.lol/icons/Facebook.svg",
        "https://cdn.choomai.lol/icons/Twitter.svg",
        "https://github.githubassets.com/favicons/favicon-dark.svg"
    ];
    const altMap = [
        "Facebook",
        "Twitter",
        "Github"
    ];
    for (let i = 0; i <= 2; i++) {
        social = document.createElement("a")
        social.href = urlMap[i];
        socialImg = document.createElement("img")
        socialImg.setAttribute("class","profile")
        socialImg.src = imgMap[i];
        socialImg.alt = altMap[i];
        social.appendChild(socialImg);
        contact.appendChild(social);
    }
};
function addTitle(type, withPath = true, forceReplace) {
    const pagett = document.getElementById("page-title");
    switch (type) {
        case 0:
            domain = location.hostname;
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
                domain = "dl." + location.hostname;
                path = path.substring(3,path.length);
            };
            if (!document.title && (isDL(0) || isDL(1))) {
                document.title = currentDir + " - Server Repository";
            } else if (!document.title) {document.title = currentDir};
            try {
                if (forceReplace) {pagett.innerHTML = "";};
                if (!pagett.textContent) {pagett.innerHTML = domain + " - " + currentDir};
            } catch (err) {console.warn("Can't find any page-tt HTML tags.")}
            break;
        case 1:
            domain = document.createElement("a");
            domain.setAttribute("href","/");
            domain.setAttribute("class","title-txt")
            domain.textContent = location.hostname;
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
            if ((!document.title) && (isDL(0) || isDL(1))) {
                document.title = currentDir + " - Server Repository";
            } else if (!document.title) {document.title = currentDir};
            try {
                if (forceReplace) {pagett.innerHTML = "";};
                if (!pagett.textContent) {
                    if (withPath) {pagett.innerHTML = " - " + path;};
                    pagett.prepend(domain);
                };
            } catch (err) {console.warn("Can't find any page-tt HTML tags.")}
            break;
    };
};
try {addContact(NaN)} catch (err) {console.warn("Can't find any contacts HTML tags to add.")}
// If current page is /dl/*, return no-hyperlink title
if (path.substring(0,3) == "/dl" || location.hostname.substring(0,2) == "dl") {addTitle(0)} else {addTitle(1)};