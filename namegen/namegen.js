const consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j',
    'k', 'l', 'm', 'n', 'p', 'q', 'r',
    's', 't', 'v', 'w', 'x', 'y', 'z'
];

const vowels = ['a', 'e', 'i', 'o', 'u'];
let oldElement = document.getElementById("none");

function generateNames() {
    oldElement.classList.add("old");
    const combinations = ["vccvc", "cvccv", "vcv", "cvcv"];

    let element = document.createElement("div");
    for (const combo of combinations) {
        let name = "";
        for (const char of combo) {
            const randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
            const randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
            if (char == 'c') {
                name += randomConsonant;
            } else {
                name += randomVowel;
            }
        }

        element.innerHTML += name + "<br>";
    }

    oldElement = document.getElementById("names").insertBefore(element, document.getElementById("names").firstChild);
}