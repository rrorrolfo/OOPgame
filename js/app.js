// VARIABLES

const overlay = document.querySelector("#overlay");
const start_btn = document.querySelector("#btn__reset");
const phrase_to_guess = document.querySelector("#phrase ul");
const keyboard = document.querySelector("#qwerty");

let game = "";
let game_phrase = ""; 

//////// STARTING THE GAME ///////

//event listener for start game button 
start_btn.addEventListener("click", () => {

    //Hides overlay when start button is clicked
    overlay.style.display = "none";
    //Creates new instance of a Game (game object)
    game = new Game();
    //Creates new instance of a phrase (phrase object)
    game_phrase = new Phrase(game.getRandomPhrase());
    // Displays the hidden phrase to be guessed
    phrase_to_guess.innerHTML = game_phrase.addPhraseToDisplay(game_phrase.phrase);

});

/////// KEYBOARD FUNCTIONALITY ///////

//event listener for the keyboard keys
keyboard.addEventListener("click", (event) => {
    
    //checks if clicked letter on the keyboard is in the phrase
    game_phrase.checkLetter();

});
