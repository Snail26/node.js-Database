const fs = require("fs");

class database {
    constructor(name) {
        this.dbName = name + ".json";
        if (!fs.existsSync(this.dbName)) {
            fs.writeFileSync(this.dbName, "{}");
            console.log(`File ${this.dbName} not found. Created ${this.dbName}.`);
        } else if (fs.readFileSync(this.dbName).toString() === "") {
            fs.writeFileSync(this.dbName, "{}");
        }
    }
    addPath(path) {
        const jsonDB = JSON.parse(fs.readFileSync(this.dbName));
        const lastPathes = path.replace(/\]/igm, "").split("[");    
        let currentObj = jsonDB;
        lastPathes.forEach((path1) => {
            if (!currentObj[path1]) {
                currentObj[path1] = {};
            }
            currentObj = currentObj[path1];
        }); 
        fs.writeFileSync(this.dbName, JSON.stringify(jsonDB));
    }   
    setPathValue(itemPath, value) {
        const jsonDB = JSON.parse(fs.readFileSync(this.dbName).toString());
        const pathParts = itemPath.split("[").map((part) => part.replace("]", ""));
        let lastObj = pathParts.pop();
        let currentObj = jsonDB;
        for (const pathPart of pathParts) {
            if (!currentObj[pathPart]) {
                throw new Error(`Error setting value: ${value}. Path undefined.`);
            }
            currentObj = currentObj[pathPart];
        }   
        currentObj[lastObj] = value;
        fs.writeFileSync(this.dbName, JSON.stringify(jsonDB));
    }   
    getItem(path) {
        const jsonDB = JSON.parse(fs.readFileSync(this.dbName).toString());
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
}
module.exports = database;