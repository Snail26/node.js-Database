# Snail26 node.js JSON database
This code creates a JSON file called `database.json` and adds functions to your code to easily be able to read and manipulate the JSON code just like you could with a database and SQL code.
## How do I include this code into my node.js?
Simply copy and paste
```
var evalr;
fetch("https://raw.githubusercontent.com/Snail26/node.js-Database/main/nodejs.js").then(r => r.text().then((r) => {
    evalr = r;
    ready();
}));

function ready() {
    eval(evalr);
    // your code here
}
```
.
## How do I use it? What are the functions?
1. `addPath(path)`: Adds a JSON path.
> Syntax `addPath(path);`
#####
> Example: `addPath("table[subtable][subtable1]")`
#### Output in JSON:
>`{"table": {"subtable": {"subtable1": {}}}}`

2. `setPathValue(path, value)`: Sets a path's value.
> Syntax `setPathValue(path, value);`
#####
> Example `setPathValue("table[subtable][subtable1]", "This is subtable1's value!");`
#### Output in JSON:
>`{"table": {"subtable": {"subtable1": {"value": "This is subtable1's value!"}}}}`

3. `getItem(path)`: Returns a path's value and subpathes.
> Syntax `getItem(path);`
#####
> Example `getItem("table[subtable][subtable1]");`
#### Output in Console from JSON:
>`{ value: 'New Value' }`