let prefix = null;
function createNewRow (inp) {
    let tr = document.createElement("tr");
    tr.setAttribute("id",inp);
    document.getElementById("list").appendChild(tr);
};
setTimeout(() => {
    let dir_prefix = dir;
    function addItem(val) {
        prefix = document.getElementById(val);
        prefix.appendChild(createNameStat(dir_prefix.children[val].name,dir_prefix.children[val].path,dir_prefix.children[val].type,dir_prefix.children[val].extension));
        prefix.appendChild(createSubStats(0,dir_prefix.children[val].type,dir.children[val].mtime));
        prefix.appendChild(createSubStats(1,dir_prefix.children[val].type));
        prefix.appendChild(createSubStats(2,dir_prefix.children[val].type,dir.children[val].size))
    };
    rmvPls_wait()
    for (let i = 0; i < dir_prefix.children.length; i++) {
        createNewRow(i);
        addItem(i);
    }
}, 1800);