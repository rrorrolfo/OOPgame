
class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }

    //adds letter placeholders to the display when the game starts.
    addPhraseToDisplay (phrase) {
        
        const a = [];
        const b = [];

       for ( let i = 0; i < phrase.length; i += 1) {
        a.push(phrase.charAt(i));
       }

       const c = a.map(letter => {

        if (letter !== " ") {
         b.push(`<li class="hide letter">${letter}</li>`);
        } else {
         b.push(`<li class="hide space">${letter}</li>`);
        }
       });

       return b.join("");
    }

    //checks to see if letter selected by player matches a letter in the phrase.
    checkLetter () {

    }

    //reveals the letter(s) on the board that matches player's selection.
    showMatchedLetter () {

    }

}