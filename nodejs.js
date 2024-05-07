const fs = require("fs");
//fs preinstalled in node, no need for package.json
const dbName = "database.json";
if (fs.existsSync(dbName) != true) {
    fs.appendFile(dbName, "{}", (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log(`File ${dbName} not found. Created ${dbName}.`)
        }
    });
}

function addPath(path) {
    var jsonDB = JSON.parse(fs.readFileSync(dbName));
    var lastPathes = [];
    path.replace("]", "").split("[").forEach((path) => {
        lastPathes.unshift(path);
        if (eval(`jsonDB[${lastPathes.join("][")}]`) == undefined) {
            eval(`jsonDB[${lastPathes.join("][")}]`) = {};
        }
    });
    fs.writeFileSync(dbName, JSON.stringify(jsonDB));
}
function setPathValue(itemPath, value) {
    var jsonDB = JSON.parse(fs.readFileSync(dbName).toString());
    if (eval(`jsonDB${itemPath}`) != undefined) {
        eval(`jsonDB${itemPath} = {"value": ${value}};`);
    }
    else {
        throw new Error(`Error setting value: ${value}. Path undefined.`);
    }
    fs.writeFileSync(dbName, JSON.stringify(jsonDB));
}

function getItem(path) {
    return(eval(`JSON.parse(fs.readFileSync(dbName))${path}`));
}