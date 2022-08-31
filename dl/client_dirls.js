fetch("https://choomai.ddns.net/dl/dirinfo.json")
.then(response => {
   return response.json();
})
.then(data => dir = (data));
let url_prefix = "/dl/";
let i = 0;
let user_type = "";
function rmvPls_wait() {
   document.getElementById("wait_notify").remove();
};
function chkSize(inp) {
   if (inp>1024) {return true} else {return false};
};
function createNameStat(name, path, type, file_ext) {
   let td = document.createElement("td");
   let a = document.createElement("a");
   if (type == "file") {
      a.setAttribute("class",file_ext.slice(1));
   } else {
      a.setAttribute("class","dir");
   }
   a.setAttribute("href",url_prefix + path);
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
            subdata = subdata.slice(1)
            switch(subdata) {
               case "zip":
                  user_type = "ZIP archive";
                  break;
               case "ozip":
                  user_type = "Encrypted ZIP archive";
                  break;
               case "rar":
                  user_type = "WinRAR archive";
                  break;
               case "iso","img":
                  user_type = "Disc Image File"
                  break;
            }
            td.setAttribute("class",user_type);
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
