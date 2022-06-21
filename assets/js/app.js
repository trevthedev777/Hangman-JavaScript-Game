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
        .map(
            letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ""}
                </span>
            `)
        .join("")}
    `;

    // When the user wins the round
    const innerWord = wordElement.innerHTML.replace(/\n/g, "");

    if (innerWord === selectedWord) {
        finalMessage.innerText = "Congratulations!, You won! 😀";
        popup.style.display = "flex";
    }
};

// Update wrong letters element
function updateWrongLettersElement() {
    console.log("Update Wrong");
};

// show notification
function showNotification() {
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
};

// Keydown Letter press
// setting the window as the event listener for key press and keydown
window.addEventListener("keydown", e => {
    // console.log(e.keycode)
    if (e.code >= 'KeyA' && e.code <= 'KeyZ') {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersElement();
            } else {
                showNotification();
            }
        }
    }
});


displayWord();