function guessingGame() {
    let gameOver = false;
    let guessCount = 0;
    return function (guess) {
        if (gameOver) {
            return ("The game is over, you already won!")
        }

        let answer = Math.round(Math.random() * 100);
        if (guess < answer) {
            guessCount++
            return `${guess} is too low!`
        } else if (guess > answer) {
            guessCount++
            return `${guess} is too high!`
        } else {
            guessCount++
            gameOver = true;
            return `You win! You found ${answer} in ${guessCount} guesses.`
        }
    }


}

module.exports = { guessingGame };
