class Hangman {
    constructor(word, maxGuesses) {
        this.word = word.split('');
        this.remainingGuesses = maxGuesses;
        this.guessedLetters = [];
        this.status = "playing";
    }

    get puzzle() {
        let output = '';
        this.word.forEach( (letter) => {
            if(this.guessedLetters.includes(letter.toLowerCase()) || letter === ' ') {
                output += letter;
            } else {
                output += '*';
            }
        });
        return output;
    }

    guess(letter) {
        const upperCaseLetter = letter.toUpperCase();
        const lowerCaseLetter = letter.toLowerCase();
        const isUnique = !this.guessedLetters.includes(lowerCaseLetter); 
        /* If the word does not include either the upper or lower case letter */
        const isBadGuess = !this.word.includes(lowerCaseLetter) && !this.word.includes(upperCaseLetter);
        /* if unique guess */
        if(isUnique) {
            /* only store the lower case varient to simplify comparisons against guessedLetters */
            this.guessedLetters.push(lowerCaseLetter);
            /* using spread syntax 
             * guessedLetters = [...guessedLetters, lowerCaseLetter];
             * */
            console.log(this.guessedLetters);
            /* if no match in word; reduce remainingGuesses */
            if(isBadGuess) {
                --this.remainingGuesses;
            }
        }
    }

    calculateStatus() {
        const finished = this.word.every( (letter) => this.guessedLetters.includes(letter.toLowerCase()) || letter === ' ');
        if (this.remainingGuesses === 0) {
            this.status = "failed";
        } else if(finished) {
            this.status = "finished";
        } else {
            /* no change; this.status = "playing" */
        }
    }

    get statusMessage() {
        const status = this.status;
        if(status === "playing") {
            return `Guesses Remaining: ${this.remainingGuesses}`;
        } else if(status === "finished") {
            return `Great work! You guessed the word!`;
        } else {
            return `Nice try! The phrase was: ${this.word.join('')}`;
        };
    }
}

export {
    Hangman as default
}
