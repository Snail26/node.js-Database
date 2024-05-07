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
    if (jsonDB[itemPath] !== undefined) {
        jsonDB[itemPath] = { value };
    } else {
        throw new Error(`Error setting value: ${value}. Path undefined.`);
    }
    fs.writeFileSync(dbName, JSON.stringify(jsonDB));
}

function getItem(path) {
    const jsonDB = JSON.parse(fs.readFileSync(dbName).toString());
    return eval(`jsonDB${path}`);
}

// Example usage:
addPath("name[table1][table1:1]");
setPathValue("name[table1][table1:1]", "New Value");
console.log(getItem("name[table1][table1:1]"));
