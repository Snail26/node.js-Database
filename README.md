# Snail26 node.js JSON database
This code creates a JSON file with any name you specify and adds functions to your code to easily be able to read and manipulate the JSON code just like you could with a database and SQL code. You can also have multiple databases at once.
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
    const myDatabase = new database("name");
    // your code here
}
```
.
## How do I use it? What are the functions?
### 1. You need to define the database you are working with first:
This creates a new database and file:
> `const myDatabase = new database("whateverNameYouWant")`
### 2. `myDatabase.addPath(path)`: Adds a JSON path.
> Syntax `myDatabase.addPath(path);`
#####
> Example: `myDatabase.addPath("table[subtable][subtable1]")`
#### Output in JSON:
>`{"table": {"subtable": {"subtable1": {}}}}`

### 3. `myDatabase.setPathValue(path, value)`: Sets a path's value.
> Syntax `myDatabase.setPathValue(path, value);`
#####
> Example `myDatabase.setPathValue("table[subtable][subtable1]", "This is subtable1's value!");`
#### Output in JSON:
>`{"table": {"subtable": {"subtable1": {"value": "This is subtable1's value!"}}}}`

### 4. `myDatabase.getItem(path)`: Returns a path's value and subpathes.
> Syntax `myDatabase.getItem(path);`
#####
> Example `myDatabase.getItem("table[subtable][subtable1]");`
#### Output in Console from JSON:
>`{ value: 'This is subtable1's value!' }`