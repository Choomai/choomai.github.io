fetch("https://choomai.tk/dl/dirinfo.json")
.then(response => {
    return response.json();
})
.then(data => dir = (data))
.then(() => {
    slashMap = [];
    for (let i = 0; i < path.length; i++) {
        if (path[i] == "/") {
            slashMap.push(i);
        };
    };
    slashCount = slashMap.length;
    function createNewRow (inp) {
        let tr = document.createElement("tr");
        tr.setAttribute("id",inp);
        tr.setAttribute("class","items");
        document.getElementById("list").appendChild(tr);
    };
    let dir_prefix = dir;
    if (path != "/") {
        for (let i = 0; i < slashCount-1; i++) {
            console.log("Passed layer "+i+" of dirinfo.json");
            dir_prefix = dir_prefix.children.find(data => data.name == path.substring(slashMap[i]+1,slashMap[i+1]));
        }
    }
    function addItem(val) {
        let prefix = document.getElementById(val);
        prefix.appendChild(createNameStat(dir_prefix.children[val].name,dir_prefix.children[val].path,dir_prefix.children[val].type,dir_prefix.children[val].extension)); // Name
        prefix.appendChild(createSubStats(0,dir_prefix.children[val].type,dir_prefix.children[val].mtime)); // Date modified
        prefix.appendChild(createSubStats(1,dir_prefix.children[val].type,dir_prefix.children[val].extension)); // Type
        prefix.appendChild(createSubStats(2,dir_prefix.children[val].type,dir_prefix.children[val].size)) // Size
    };
    rmvPls_wait();
    for (let i = 0; i < dir_prefix.children.length; i++) {
        // Add files & folders one by one
        createNewRow(i);
        addItem(i);
    };
});