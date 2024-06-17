"use strict";

import Hangman from "./hangman"
import getPuzzle from "./requests"

const wordCount = window.document.querySelector("#wordCount");
const maxGuesses = window.document.querySelector("#maxGuesses");
const puzzle = window.document.querySelector("#puzzle");
const remainingGuesses = window.document.querySelector("#guesses");
const reset = window.document.querySelector("#reset");
let words = 1;
let guesses = 1;
let game = {};

const startGame = async () => {
    try {
        const puzzlePhrase = await getPuzzle(words);
        game = new Hangman(puzzlePhrase, guesses);
        render();
    } catch(error) {
        console.log(error);
   }
}

const render = () => {
    puzzle.innerHTML = "";
    remainingGuesses.textContent = game.statusMessage;


    game.puzzle.split('').forEach(element => {
        console.log(element);
        let letter = document.createElement("span");
        letter.textContent = element;
        puzzle.appendChild(letter);
    });
}

window.addEventListener("keypress", (event) => {
    if(game.status === "playing") {
        const key = event.key;
        game.guess(key);
        game.calculateStatus();
        render();
    }
})

wordCount.addEventListener("change", (event) => {
    words = event.target.value;
});

maxGuesses.addEventListener("change", (event) => {
    guesses = event.target.value;
});

reset.addEventListener("click", async () => {
    startGame();
});

startGame();

