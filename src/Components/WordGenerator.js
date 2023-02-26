//Importing useSelector to call the required slice of state
import { useSelector } from 'react-redux';
//Importing Winner component
import Winner from './Winner';
//Importing external styling sheet
import './WordGenerator.css';

/*Below is the function component that creates the random word elements and the functionality that decides if a letter is shown or not depending
on if the user has guessed correctly. I have generated the random word in App.js as the word needs to be created before any other components will
work correctly*/
function WordGenerator() {
    /*First I have used useSelector to get the required slice of state (game.word) and stored it in a variable. This contains the randomly generated
    word that was assigned to state in App.js */
    const word = useSelector((state) => state.game.word);
    
    //As the word variable is an object with nested objects, I've then used a for loop to push each index of the object into an empty array
    let wordArray = [];
    for(let i = 1; i <= 7; i++){
        wordArray.push(word[i]);
    }

    /*I then want to use the newly created wordArray to identify which letters should be shown to the user depending on if they have guessed the
    letter correctly or not. To do this, i've first created an empty array called finalWordArray.*/
    let finalWordArray = [];
    /*At this point i've also created a variable to store the number of correct guesses which I will use for a control statement below to identify
    when the user has won the game */
    let numOfCorrectGuesses = 0;
    /*I've then used the forEach() method to split wordArray into individual elements (letters) and used a control statement within this to identify
    if the letter.found value is true or false. If it is true, the letter.letter value will be pushed into the finalWordArray and the numOfCorrectGuesses
    variable is increased by 1*/
    wordArray.forEach(letter => {
        if (letter.found === true){
            finalWordArray.push(letter.letter);
            numOfCorrectGuesses++;
        } //If the user does not guess correctly, an empty space is pushed into the array instead so only the correctly guessed letters are shown to the user
        else {
            finalWordArray.push("");
        }
    });
    
    /*I have then used the map() method to create another array from finalWordArray to create the actual elements that are shown to the user. The
    map method applies a function to each element of the array, creating a new array from the output. In this instance, it's creating a div which
    displays each element (letter) from the original array. I've also used the index to create a unique key for each element.*/
    let wordItems = finalWordArray.map((letter, index) =>
        <div key={index}>{letter}</div>
    );

    //I've then used the numOfCorrectGuesses variable created above to identify which elements should be returned
    if (numOfCorrectGuesses === 7){
        //If the user has correctly guessed 7 letters (i've only included 7 letter words in my game), they will be shown the wordItems array AND the Winner component
        return (
            <div>
                <div className='wordContainer'>
                    {wordItems}
                </div>
                <Winner />
            </div>
        );
    }
    else { //Else they will be shown just the wordItems array
        return (
            <div className='wordContainer'>
                {wordItems}
            </div>
        );
    }
}

//Exporting WordGenerator component to use in App.js
export default WordGenerator;