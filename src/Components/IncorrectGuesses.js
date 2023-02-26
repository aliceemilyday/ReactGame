//Importing useSelector to call the required slice of state
import { useSelector } from 'react-redux';
//Importing external styling sheet
import './IncorrectGuesses.css';

//The below function component creates the list of incorrectly guessed letters shown to the user at the bottom of the page
function IncorrectGuesses() {
    /*First I have used useSelector to get the required slice of state, which in this case is the incorrectlyGuessedLetter array, and stored
    it in a variable */
    const incorrectLetters = useSelector((state) => state.game.incorrectlyGuessedLetter);

    /*Below I have used the map() method to create the letter elements. The method takes an array (alphabet) and creates a new array from it,
    after applying the specified function to each element of the original array. In this instance, i've created the div elements which display each
    incorrect guessed letter. I've used the index to create a unique key for each element.*/
    const letterItems = incorrectLetters.map((letter, index) =>
        <div key={"letter" + index}>{letter}</div>
    );

    return ( //Finally I have returned the newly created letterItems array with the div elements
        <div className='incorrectGuesses'>
            <h2 className='incorrectHeader'>Incorrect Guesses:</h2>
            <div className="incorrectLettersContainer">
                {letterItems}
            </div>
        </div>
    );
}

//Exporting components to use in App.js
export default IncorrectGuesses;