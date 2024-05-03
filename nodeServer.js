const fs = require("fs");
//fs is preinstalled... no need for package.json
const dbName = "database.snailbase";
/*
must be .snailbase file. Change the 'dbName' variable when accual
database name changed.
*/
class table {
    constructor(table1, content) {
        this.tablePath = table1
        this.content = content
    }
    get(table) {
        return(get(table, this.tablePath));
    }
}
function set(itemPath, content) {
    var lastItem = "main";
    var db = fs.readFileSync(dbName).toString();
    var content2 = `"${content.replace(/"/gm, "$\"").replace(/{/gm, "${").replace(/}/gm, "$}")}"`;
    itemPath.split("/").forEach((item) => {
        if (db.includes(item + " {") == false) {
            fs.writeFileSync(dbName, db.replace(lastItem + " {", `${lastItem} {\n\t${item} {}\n`));
            db = fs.readFileSync(dbName).toString();
        }
        if (db.includes(item + " {") && itemPath.split("/")[itemPath.split("/").length - 1] == item) {
            console.log(item);
            fs.writeFileSync(dbName, db.replace(item + " {", item + " {\n\t" + content2 + "\n"));
            db = fs.readFileSync(dbName).toString();
        }
        lastItem = item;
    });
}
set("table2/contents", `table2`);
function get(tableName, subtable) {
    var content = "";
    //Ignore lines starting with // so you can add comments to your database
    fs.readFileSync(dbName).toString().split("\n").forEach((line) => {
        if (line.trim().substring(0, 2) != "//") {
            content += line + "\n";
        }
    });
     console.log(content);
    if (subtable) {
        return(new table(tableName));
    }
    else {
        return(new table(tableName));
    }
}


console.log(get("a"));