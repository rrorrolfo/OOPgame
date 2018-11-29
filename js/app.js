// Hide layout when start button is clicked

const overlay = document.querySelector("#overlay");
const start_btn = document.querySelector("#btn__reset");
const phrase_to_guess = document.querySelector("#phrase")

let game = "";
let game_phrase = ""; 

start_btn.addEventListener("click", () => {
    //Hides overlay
    overlay.style.display = "none";
    //Creates new instance of a Game (game object)
    game = new Game();
    //Creates new instance of a phrase (phrase object)
    game_phrase = new Phrase(game.getRandomPhrase());
    // Displays the hidden phrase to be guessed
    phrase_to_guess.innerHTML = game_phrase.addPhraseToDisplay(game_phrase.phrase);
});




