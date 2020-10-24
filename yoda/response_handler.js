// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];

let all_quotes = [dark_quotes, force_quotes, std_quotes];

var inputElement = document.getElementById("input-text");
inputElement.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        respond();
    }
});


function respond() {
    // Your Code Here
    var textElement = document.getElementById("yoda-text")
    var imageElement = document.getElementById("yoda-image")
    var inputElement = document.getElementById("input-text");

    // console.log(inputElement);

    var images = ["img/cute-std.jpg", "img/cute-force.jpg", "img/cute-dark.jpg", "img/regular-dark.jpg", "img/regular-force.jpg", "img/regular-std.jpg"];
    var imageInd;
    if (inputElement.value.includes("cute") || inputElement.value.includes("baby")) {
        imageInd = parseInt(Math.random()*3);
    }
    else if (inputElement.value.includes("force")){
        if (inputElement.value.includes("dark")) {
            imageInd = parseInt(Math.random()*2 + 2);
        }
        else {
            imageInd = parseInt(Math.random()*4 + 1);
        }
    }
    else {
        imageInd = parseInt(Math.random()*6);
    }
    imageElement.setAttribute("src", images[imageInd]);

    textElement.innerHTML = generateQuote(imageInd);
    document.getElementById("input-text").value = '';
    // console.log("Hello World!");
}

function generateQuote(imageInd) {
    if (imageInd > 2) {
        return all_quotes[imageInd-3][parseInt(Math.random()*5)];
    }
    numMs = Math.random()*20 + 1;
    return "H"+"m".repeat(numMs);
}