function createArg() {
    const output = document.getElementById("arg-output");
    const username = document.getElementById("username").value;
    const color = document.getElementById("color").value;
    const rotate = document.getElementById("rotate").value;
    const wiggle = document.getElementById("wiggle").value;
    if (isHex.test(color) || isHexWithHashtag.test(knownColor[color]) || color === "") {
        let hyperlink = document.createElement("a");
        hyperlink.classList.add("arg-output");
        hyperlink.target = "_blank";
        hyperlink.href = location.href + "heart/";
        if (username) {hyperlink.href = hyperlink.href + "?name=" + encodeURI(username)};
        if (color) {hyperlink.href = hyperlink.href + "&color=" + encodeURI(color)};
        if (rotate === "false") {hyperlink.href = hyperlink.href + "&rotate=" + rotate};
        if (wiggle === "false") {hyperlink.href = hyperlink.href + "&wiggle=" + wiggle};
        hyperlink.innerHTML = hyperlink.href;
        output.innerHTML = "";
        output.appendChild(hyperlink);
    } else {
        output.innerHTML = "Wrong format!";
    }
};