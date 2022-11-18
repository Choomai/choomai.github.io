let output = document.getElementById("arg-output");
function createArg() {
    let username = document.getElementById("username").value;
    let color = document.getElementById("color").value;
    let size = document.getElementById("size").value;
    let rotate = document.getElementById("rotate").value;
    let wiggle = document.getElementById("wiggle").value;
    if (isHex.test(color) || isHexWithHashtag.test(knownColor[color]) || color === "" || color == "rgb") {
        output.classList.add("arg-output");
        output.target = "_blank";
        output.href = location.href + "heart/";
        if (username) {output.href = output.href + "?name=" + encodeURI(username)};
        if (size) {output.href = output.href + "&size=" + size};
        if (color) {output.href = output.href + "&color=" + encodeURI(color)};
        if (rotate === "false") {output.href = output.href + "&rotate=" + rotate};
        if (wiggle === "false") {output.href = output.href + "&wiggle=" + wiggle};
        output.innerHTML = output.href;
    } else {
        output.innerHTML = "Wrong format!";
    };
};