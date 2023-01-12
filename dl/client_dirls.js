let dir = null;
let type_info = null;
function rmvPls_wait() {
    const wait_notify = document.getElementById("wait_notify");
    if (dir) {wait_notify.remove();} else {
        wait_notify.innerHTML = "<b style=\"color:#F00\">An error occurred while trying to fetch dirinfo<br></b>";
    }
};
function chkSize(inp) {
    if (inp>1024) {return true} else {return false};
};
function addAddressBar(path_inp, user) {
    const addrBar = document.getElementById("addr-bar");
    const doubleLS = document.createTextNode(" » ");
    let pathLink = document.createElement("a");
    if (isDL(0)) {pathLink.href = "/dl/" + path_inp + "/";} // For directory dl
    else if (isDL(1)) {pathLink.href = "/" + path_inp + "/";} // For subdomain dl
    pathLink.innerHTML = user;
    addrBar.appendChild(doubleLS);
    if (path_inp != "") {addrBar.appendChild(pathLink);}
};
function createNewRow (inp) {
    let tr = document.createElement("tr");
    tr.id = inp;
    tr.setAttribute("class","items");
    document.getElementById("list").appendChild(tr);
};
function createNameStat(name, path, type, file_ext) {
    let td = document.createElement("td");
    td.classList.add("name");
    let a = document.createElement("a");
    let isURL = false;
    if (type == "file") {
        file_ext = file_ext.slice(1);
        if (file_ext == "url") {
            fetch(name)
            .then(response => {return response.text();}).then(data => hyplink = (data))
            .then(() => {a.href = hyplink;isURL = true;a.classList.add("url");});
        } else {
            if (isNaN(Number(file_ext[0]))) {a.classList.add(file_ext)} else {a.classList.add("a"+file_ext)};
        }
    } else {
        path = path + "/"; // Stop 301 HTTP code in logs
        a.classList.add("dir");
    }
    if (isDL(0) && !isURL) {a.href = "/dl/"+path} // For directory dl
    if (isDL(1) && !isURL) {a.href = "/"+path} // For subdomain dl
    a.textContent = name;
    td.appendChild(a);
    return td;
};
function createSubStats(sub, type, subdata) {
    let td = document.createElement("td");
    switch(sub) {
        case 0:
            td.classList.add("mtime");
            subdata = new Date(subdata);
            subdata = subdata.toLocaleDateString("vi-VN");
            td.textContent = subdata;
            break;
        case 1:
            td.classList.add("type");
            if (type == "directory") {td.textContent = "<dir>";} else {
                subdata = subdata.slice(1);
                td.classList.add("type");
                type_info = file_ext_map[subdata] ?? subdata.toUpperCase() + " File";
                td.textContent = type_info;
            };
            break;
        case 2:
            subdata = subdata/1024;
            td.classList.add("size");
            if (chkSize(subdata)) {
                subdata = subdata/1024;
                if (chkSize(subdata)) {
                    subdata = subdata/1024;
                    td.textContent = subdata.toFixed(2) + " GB";
                } else {td.textContent = subdata.toFixed(2) + " MB";};
            } else {td.textContent = subdata.toFixed(2) + " KB";};
            break;
    };
    return td;
};
const file_ext_map = {
    "exe": "Application",
    "msi": "Windows Installer Package",
    "cmd": "Windows Command Script",
    "bat": "Windows Command Script",
    "com": "MS-DOS Application",
    "ps1": "Windows PowerShell Script",
    "vbscript": "Visual Basic Script",
    "sh": "Bash Shell Script",
    "jar": "Executable Jar File",
    "apk": "Android Package",
    "xapk": "Compressed Android Package",
    "apkm": "Android App Bundle Mirror",
    "============================================":"=",
    "001": "Split Archive File",
    "img": "Disc Image File",
    "iso": "Disc Image File",
    "============================================":"=",
    "rar": "WinRAR archive",
    "7z": "7-Zip archive",
    "zip": "ZIP archive",
    "gz": "GZIP archive",
    "tgz": "GZIP Tar File",
    "lz4": "LZ4 archive",
    "ozip": "Encrypted ZIP archive",
    "============================================":"=",
    "psd": "Photoshop Document",
    "ai": "Adobe Illustrator Artwork",
    "svg": "Scalable Vector Graphics",
    "eps": "Encapsulated PostScript",
    "dng": "Digital Negative Image",
    "raw": "Raw Image Data",
    "gpr": "GoPro Raw Image",
    "srw": "Samsung Raw Image",
    "bmp": "Bitmap Image",
    "png": "PNG Image",
    "webp": "WebP Image",
    "gif": "Graphic Interchange Format",
    "jpeg": "JPEG Image",
    "jpg": "JPEG Image",
    "jfif": "JPEG Bitmap Graphic",
    "============================================":"=",
    "wav": "WAVE Audio",
    "flac": "Lossless Audio Codec",
    "ogg": "Ogg Vorbis",
    "mp3": "MP3 Audio",
    "============================================":"=",
    "mp4": "MPEG-4 Video",
    "mkv": "Matroska Video",
    "webm": "WebM Video",
    "mov": "QuickTime Movie",
    "ts": "Transport Stream Video",
    "flv": "Flash Video File",
    "============================================":"=",
    "url": "Internet Shortcut",
    "txt": "Text Document",
    "rtf": "Rich Text Document",
    "md": "Markdown Document",
    "pdf": "PDF Document",
    "doc": "Word 97-2003 Document",
    "docx": "Word Document",
    "xls": "Excel 97-2003 Worksheet",
    "xlsx": "Excel Worksheet",
    "ppt": "PowerPoint 97-2003 Presentation",
    "pptx": "PowerPoint Presentation",
    "pptm": "PowerPoint Macro-Enabled Presentation",
};