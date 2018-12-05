<h1 align="center">OOPgame</h1>
<p align="center">Browser-based, word guessing game: "Phrase Hunter."</p>

<h2 align="center">How it works</h2>

A random quote is selected, separated in letters and displayed in a hidden way, the user is able to choose a letter by either clicking a letter on the onscreen keyborad or in the keyboard of the user´s device. 

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the game board displays the chosen letters on the screen.

A player continues to select letters until they guess they phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly 5 times, a losing screen appears.

A player can guess a letter only once. 

<h2 align="center">Structure of the project</h2>

The program is held in three JavaScript files:

  - `app.js` performs basic DOM selection, add event handlers, and to reset the game when it ends
  - `Phrase.js` creates a Phrase class to handle the creation of phrases
  - `Game.js` creates a Game class with methods for starting and ending the game, handling interactions, getting random phrases, checking for a win, and removing a life counter.
