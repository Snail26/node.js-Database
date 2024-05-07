# How do I include this code into my node.js?
Simply copy and paste `var evalr;
fetch("https://raw.githubusercontent.com/Snail26/node.js-Database/main/nodejs.js").then(r => r.text().then((r) => {
    evalr = r;
    ready();
}));

function ready() {
    eval(evalr);
}`.