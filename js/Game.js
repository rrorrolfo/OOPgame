
class Game {
    constructor (missed = 0, phrases = [
        "just do it",
        "go for it",
        "one more",
        "finish it",
        "you can",
        "come on",
        "almost there",
        "fail better",
        "try more",
        "work hard"
    ]) {
        this.missed = missed;
        this.phrases = phrases;
    }

    // randomly retrieves one of the phrases stored in the phrases array.
    getRandomPhrase () {
        let chosen_phrase =  this.phrases[Math.floor(Math.random() * this.phrases.length)];

        return chosen_phrase
    }

    //checks to see if the button clicked by the player matches a letter in the phrase.
        //If it does not, then removeLife() method is called
        //.If the selected letter matches,  showMatchedLetter() method is called on the phrase and then call the checkForWin() method.
    handleInteraction () {

    }

    //removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife () {

    }

    //this method checks to see if the player has selected all of the letters.
    checkForWin () {

    }

    //this method displays a message if the player wins or a different message if they lose.
    gameOver () {

    }

    //calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
    startGame() {

    }
}