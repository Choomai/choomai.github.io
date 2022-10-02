let dir = null;
let type_info = null;
const file_ext_map = {
    "exe": "Application",
    "msi": "Windows Installer Package",
    "jar": "Executable Jar File",
    "apk": "Android Package",
    "============================================":"=",
    "001": "Split Archive File",
    "img": "Disc Image File",
    "iso": "Disc Image File",
    "============================================":"=",
    "rar": "WinRAR archive",
    "7z": "7-Zip archive",
    "zip": "ZIP archive",
    "ozip": "Encrypted ZIP archive",
    "============================================":"=",
    "psd": "Photoshop Document",
    "dng": "Digital Negative Image",
    "raw": "Raw Image Data",
    "bmp": "Bitmap Image",
    "png": "PNG Image",
    "gif": "Graphic Interchange Format",
    "jpeg": "JPEG Image",
    "jpg": "JPEG Image",
    "jfif": "JPEG Bitmap Graphic",
    "============================================":"=",
    "wav": "WAVE Audio",
    "flac": "Free Lossless Audio Codec",
    "ogg": "Ogg Vorbis",
    "mp3": "MP3 Audio",
    "============================================":"=",
    "mp4": "MPEG-4 Video",
    "mkv": "Matroska Video",
    "mov": "QuickTime Movie",
    "ts": "Transport Stream Video",
    "flv": "Flash Video File",
    "============================================":"=",
    "url": "Internet Shortcut",
    "txt": "Text Document",
    "rtf": "Rich Text Document",
    "pdf": "PDF Document",
    "doc": "Word 97-2003 Document",
    "docx": "Word Document",
    "xls": "Excel 97-2003 Worksheet",
    "xlsx": "Excel Worksheet",
    "ppt": "PowerPoint 97-2003 Presentation",
    "pptx": "PowerPoint Presentation",
};
function rmvPls_wait() {
    const wait_notify = document.getElementById("wait_notify");
    if (dir) {
        wait_notify.remove();
    } else {
        wait_notify.innerHTML = "<b style=\"color:#FF0000;background:rgba(0,0,0,20%)\">An error occurred while trying to fetch dirinfo.json<br></b>";
    }
};
function chkSize(inp) {
    if (inp>1024) {return true} else {return false};
};
function createNameStat(name, path, type, file_ext) {
    let td = document.createElement("td");
    td.setAttribute("class","name");
    let a = document.createElement("a");
    if (type == "file") {
        file_ext = file_ext.slice(1);
        if (!isNaN(Number(file_ext.substring(0,1)))) {
            a.setAttribute("class","a"+file_ext);
        } else {
            a.setAttribute("class",file_ext);
        };
    } else {
        a.setAttribute("class","dir");
    }
    a.setAttribute("href","/dl/" + path);
    a.textContent = name;
    td.appendChild(a);
    return td;
};
function createSubStats(sub, type, subdata) {
    let td = document.createElement("td");
    switch(sub) {
        case 0:
            td.setAttribute("class","mtime");
            subdata = new Date(subdata);
            subdata = subdata.toLocaleDateString("vi-VN");
            td.textContent = subdata;
            break;
        case 1:
            td.setAttribute("class","type");
            if (type == "directory") {
                td.textContent = "<dir>";
            } else {
                subdata = subdata.slice(1);
                td.setAttribute("class","type");
                type_info = file_ext_map[subdata] ?? subdata.toUpperCase() + " File";
                td.textContent = type_info;
            };
            break;
        case 2:
            subdata = subdata/1024;
            td.setAttribute("class","size");
            if (chkSize(subdata)) {
                subdata = subdata/1024;
                if (chkSize(subdata)) {
                    subdata = subdata/1024;
                    if (chkSize(subdata)) {
                        subdata = subdata/1024;
                        td.textContent = subdata.toFixed(2) + " TB";
                    };
                    td.textContent = subdata.toFixed(2) + " GB";
                } else {
                    td.textContent = subdata.toFixed(2) + " MB";
                };
            } else {
                td.textContent = subdata.toFixed(2) + " KB";
            };
            break;
    }
    return td;
};