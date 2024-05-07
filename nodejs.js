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
    const jsonDB = JSON.parse(fs.readFileSync(dbName));
    const lastPathes = path.replace("]", "").split("[");

    let currentObj = jsonDB;
    lastPathes.forEach((path1) => {
        if (!currentObj[path1]) {
            currentObj[path1] = {};
        }
        currentObj = currentObj[path1];
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