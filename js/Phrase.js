
class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }

    //adds letter placeholders to the display when the game starts.
    addPhraseToDisplay (phrase) {
        
        //holds array of letters
        const a = [];
        //holds list items with letters to display
        const b = [];

        //Iteration for separating each phrase in single letters and add each letter to variable "a"
       for ( let i = 0; i < phrase.length; i += 1) {
        a.push(phrase.charAt(i));
       }

       //Iteration for creating the list items that will hold each letter
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
        
            //hidden phrase to be compared against the chosen letter
        const flag_phrase = document.querySelectorAll(".letter");


        if (event.target.className === "key") {

            // letter clicked on the keyboard
            const flag_letter = event.target.textContent;

            //Iteration over the hidden phrase
            flag_phrase.forEach(letter => {

                let letter_to_compare = letter.textContent;

                //if the letters match, the letter will appear
                if (letter_to_compare === flag_letter) {
                    letter.className = "show letter";
                }
            });
        }
    }

    //reveals the letter(s) on the board that matches player's selection.
    showMatchedLetter () {

    }

}