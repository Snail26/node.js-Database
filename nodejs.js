const fs = require("fs");
//fs preinstalled in node, no need for package.json
const dbName = "database.json";

function addPath(path) {
    var jsonDB = JSON.parse(fs.readFileSync(dbName));
    var lastPathes = [];
    path.replace("]", "").split("[").forEach((path) => {
        lastPathes.unshift(path);
        if (eval(`jsonDB[${lastPathes.join("][")}]`)) {

        }
    });
}
setPathValue("[`hai`][`hello`]", "[1, 2, 3]")
function setPathValue(itemPath, value) {
    var jsonDB = JSON.parse(fs.readFileSync(dbName).toString());
    eval(`jsonDB${itemPath} = {"value": ${value}};`);
    fs.writeFileSync(dbName, JSON.stringify(jsonDB));
}

function getItem() {
    return(JSON.parse(fs.readFileSync(dbName)));
}