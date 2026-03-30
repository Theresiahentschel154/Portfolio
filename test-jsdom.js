const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const code = fs.readFileSync('dist/index.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (msg) => { console.error("PAGE ERROR:", msg); });
virtualConsole.on("warn", (msg) => { console.warn("PAGE WARN:", msg); });
virtualConsole.on("info", (msg) => { console.info("PAGE INFO:", msg); });
virtualConsole.on("log", (msg) => { console.log("PAGE LOG:", msg); });

// Make it run scripts
const dom = new JSDOM(code, {
    runScripts: "dangerously",
    resources: "usable",
    virtualConsole
});
