// DOM Elements
const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

// The Hangman Body Elements
const figureParts = document.querySelector("figure-part");
// Connect an API to generate random words in future releases
const words = [
    "application", 
    "programming", 
    "interface", 
    "wizard"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// Set right and wrong choices as empty arrays
const correctLetters = [];
const wrongLetters = [];

// Show the hidden word
function displayWord() {
    wordElement.innerHTML = `
        ${selectedWord
        .split("")
        .map(letter => `
        <span class="letter">
            ${correctLetters.includes(letter) ? letter : ""}
            </span>
            `).join("")
        }
    `;

    // When the user wins the round
    const innerWord = wordElement.innerHTML.replace(/\n/g, "");

    if (innerWord === selectedWord) {
        finalMessage.innerText = "Congratulations!, You won! 😀";
        popup.style.display = "flex";
    }
};

displayWord();