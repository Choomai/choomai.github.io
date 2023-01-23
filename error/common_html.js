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
            break;
    };
};