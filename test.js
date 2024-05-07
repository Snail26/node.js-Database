var evalr;
fetch("https://raw.githubusercontent.com/Snail26/node.js-Database/main/nodejs.js").then(r => r.text().then((r) => {
    evalr = r;
    ready();
}));
function ready() {
    eval(evalr)
    setTimeout(() => {
        addPath("['snails']")
    }, 1000)
}