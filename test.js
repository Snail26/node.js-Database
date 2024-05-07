fetch("https://raw.githubusercontent.com/Snail26/node.js-Database/main/nodejs.js").then(r => r.text().then((r) => {
    eval(r);
}))
function ready() {
    setTimeout(() => {
        addPath("[snails][snail1]")
    }, 1000)
}