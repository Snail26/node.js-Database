const fs = require("fs");
const dbName = "database.json";

if (!fs.existsSync(dbName)) {
    fs.writeFileSync(dbName, "{}");
    console.log(`File ${dbName} not found. Created ${dbName}.`);
} else if (fs.readFileSync(dbName).toString() === "") {
    fs.writeFileSync(dbName, "{}");
}

function addPath(path) {
    const jsonDB = JSON.parse(fs.readFileSync(dbName));
    const lastPathes = path.replace(/\]/igm, "").split("[");

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
    const jsonDB = JSON.parse(fs.readFileSync(dbName).toString());
    const pathParts = itemPath.split("[").map((part) => part.replace("]", ""));

    let currentObj = jsonDB;
    for (const pathPart of pathParts) {
        if (!currentObj[pathPart]) {
            throw new Error(`Error setting value: ${value}. Path undefined.`);
        }
        currentObj = currentObj[pathPart];
    }
    console.log(currentObj);
    currentObj.value = value;
    fs.writeFileSync(dbName, JSON.stringify(jsonDB));
}


function getItem(path) {
    const jsonDB = JSON.parse(fs.readFileSync(dbName).toString());
    const pathParts = path.split("[").map((part) => part.replace("]", ""));

    let currentObj = jsonDB;
    for (const pathPart of pathParts) {
        if (!currentObj[pathPart]) {
            throw new Error(`Error getting value. Path undefined: ${path}`);
        }
        currentObj = currentObj[pathPart];
    }

    return currentObj;
}