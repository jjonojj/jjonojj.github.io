let scr = document.getElementById("scr");

let items = [];

const sleep = ms => new Promise(r => setTimeout(r, ms));

for (let i = 0; i <= 127; i++) {
  items.push(String.fromCharCode(i));
}

async function rchars() {
    scr.innerText = ""
    for (let i = 0; i < 12; i++) {
        add();
        await sleep(30);
    }
}

function add() {
    scr.innerText += items[Math.floor(Math.random()*items.length)];
}

setInterval(rchars, 1000);