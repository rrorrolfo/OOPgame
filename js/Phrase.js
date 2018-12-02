
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
    // flag_letter param is the letter clicked on the keyboard
    checkLetter (flag_letter) {

        if (flag_letter.className === "key") {

            //hidden phrase to be compared against the chosen letter
        const flag_phrase = document.querySelectorAll(".letter");

            //Iteration over the hidden phrase
            flag_phrase.forEach(letter => {

                let letter_to_compare = letter.textContent;

                //compares if letter match
                if (letter_to_compare === flag_letter.textContent) {
                //if the letters match, the letter will appear
                    this.showMatchedLetter(letter); 
                }
            });
        }
    }

    //reveals the letter(s) on the board that matches player's selection.
    //"item" param is the item that the class will be changed from hide to show
    showMatchedLetter (item) {
        //displays the matched letters
        item.className = "show letter";
    }

}