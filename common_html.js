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
const dummytxt = [ // Is there any JS function to create dummy text ?
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Egestas erat imperdiet sed euismod nisi porta. Eget nullam non nisi est sit. Faucibus et molestie ac feugiat sed. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc aliquet bibendum enim facilisis gravida. Velit dignissim sodales ut eu. Faucibus turpis in eu mi. Mauris rhoncus aenean vel elit scelerisque mauris. Massa massa ultricies mi quis hendrerit dolor magna eget.",
    "Arcu dui vivamus arcu felis bibendum ut tristique. Mauris nunc congue nisi vitae suscipit. Orci ac auctor augue mauris. Ac odio tempor orci dapibus ultrices in. Sit amet nisl purus in mollis nunc sed. In vitae turpis massa sed elementum tempus egestas sed sed. Placerat vestibulum lectus mauris ultrices. Ultrices in iaculis nunc sed augue. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. In nibh mauris cursus mattis molestie a iaculis at. In cursus turpis massa tincidunt.",
    "Felis donec et odio pellentesque diam volutpat commodo. Dignissim convallis aenean et tortor at risus. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Tincidunt tortor aliquam nulla facilisi cras fermentum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Sit amet est placerat in egestas erat imperdiet sed euismod. Elit duis tristique sollicitudin nibh. Elit eget gravida cum sociis natoque penatibus et magnis. Tortor dignissim convallis aenean et tortor at risus viverra. Ullamcorper sit amet risus nullam eget. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Aliquet enim tortor at auctor. Massa tempor nec feugiat nisl pretium.",
    "Donec ultrices tincidunt arcu non sodales. Neque vitae tempus quam pellentesque nec nam aliquam. Diam maecenas sed enim ut sem viverra. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Eget nulla facilisi etiam dignissim. Habitant morbi tristique senectus et. Lacinia quis vel eros donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Dolor magna eget est lorem ipsum dolor. Quis lectus nulla at volutpat diam ut. Convallis posuere morbi leo urna molestie at elementum eu. Feugiat vivamus at augue eget arcu dictum."
];
// End prep.
function createPopup(content) {
    let popup_container = document.createElement("div");
    let popup = document.createElement("div");
    let closeButton = document.createElement("span");
    popup_container.id = "popup-container"
    popup_container.classList.add("container-fullpage");
    popup.id = "popup"; 
    popup.classList.add("popup");
    closeButton.classList.add("close-popup");
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("onclick","removePopup()");
    popup.textContent = content;
    popup.appendChild(closeButton);
    docElem.style.setProperty("--blur-amount","5px");
    docElem.style.setProperty("--alpha-amount","30%");
    popup_container.appendChild(popup);
    document.body.appendChild(popup_container);
    setTimeout(() => { // Do the transition
        const appendPopup = document.getElementById("popup-container");
        appendPopup.style.transform = "translateY(0%)";
        appendPopup.style.filter = "opacity(1)";
    }, 50);
};
function removePopup() {
    const appendPopup = document.getElementById("popup-container");
    docElem.style.setProperty("--blur-amount","0px");
    docElem.style.setProperty("--alpha-amount","0%");
    appendPopup.style.transform = "translateY(-75vh)";
    appendPopup.style.filter = "opacity(0)";
    setTimeout(() => {appendPopup.remove()},500);
}
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
    for (let i = 0; i <= 2; i++) {
        const urlMap = [
            "https://facebook.com/uranidiot0606",
            "https://twitter.com/choomai0",
            "https://github.com/Choomai"
        ];
        const imgMap = [
            "/dl/imgs/Facebook.svg",
            "https://cdn-icons-png.flaticon.com/128/733/733579.png",
            "https://github.githubassets.com/favicons/favicon-dark.svg"
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
function addTitle(type) {
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
            if ((!document.title) && (isDL(0) || isDL(1))) {
                document.title = currentDir + " - Server Repository";
            } else if ((!document.title)) {document.title = currentDir};
            try {
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
                if (!pagett.textContent) {
                    pagett.innerHTML = " - " + path;
                    pagett.prepend(domain);
                };
            } catch (err) {console.warn("Can't find any page-tt HTML tags.")}
            break;
    };
};
try {addContact(NaN)} catch (err) {console.warn("Can't find any contacts HTML tags to add.")}
// If current page is /dl/*, return no-hyperlink title
if (path.substring(0,3) == "/dl" || location.hostname.substring(0,2) == "dl") {addTitle(0)} else {addTitle(1)};