// VARIABLES

const overlay = document.querySelector("#overlay");
const title = document.querySelector(".title");
const start_btn = document.querySelector("#btn__reset");
const phrase_to_guess = document.querySelector("#phrase ul");
const keyboard = document.querySelector("#qwerty");
const game__over_message = document.querySelector("#game-over-message");

let game = "";
let game_phrase = ""; 

//////// STARTING THE GAME ///////

//event listener for start game button 
start_btn.addEventListener("click", () => {

    resetDisplay();

});

/////// KEYBOARD FUNCTIONALITY ///////

//event listener for the keyboard keys
keyboard.addEventListener("click", (event) => {

    // letter clicked on the keyboard
    const flag_letter = event.target;

    //If the target is a letter on the keyboard the markbutton function is called
    if (flag_letter.className === "key") {

    markButton(flag_letter);
    
    }

});


//

const markButton = (flag_letter) => {

    //Disables the clicked key on the keyboard
    /////// CHECK THIS FOR DISABKING THE BUTTON flag_letter.setAttribute = ("disabled", true);
    //Calls the method that will asses the selection of the letter
    game.handleInteraction(flag_letter);
    
}

// 

const resetDisplay = () => {

    //Resets decoration of all keyboard keys
    const letters = document.querySelectorAll(".key");
    letters.forEach(letter => letter.className = "key");
    //Hides overlay when start button is clicked
    overlay.style.display = "none";
    //Creates new instance of a Game (game object)
    game = new Game();
    //Adds the phrase to the board
    game.startGame();

}