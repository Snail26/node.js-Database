# Snail26 node.js JSON database
This code creates a JSON file called `database.json` and adds functions to your code to easily be able to read and manipulate the JSON code just like you could with a database.
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
1. `addPath()`: Adds a JSON path
> Example: `addPath("table[subtable][subtable1]")`
#### Output in JSON:
>`{"table": {"subtable": {"subtable1": {}}}}`