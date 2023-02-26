//Importing external styling sheet
import './Help.css';

//Below is the function component created to display the 'Game Rules' to the user when the help button is clicked
function Help() {
    return (
        <div className='help'>
            <h2>Game Rules</h2>
            <p>
                The object of the game is to guess the word before the stick figure is hung. <br/><br/>
                Pick a letter from the alphabet list and if you've guessed correctly, you will be shown the letter in the word.<br/>
                If you've guessed incorrectly, a piece of the hangman will be drawn.<br/>
                You have 10 guesses to correctly guess the 7 letter word. 10 incorrect guesses means game over.<br/>
                Each letter you guess will be marked off so you don't guess the same letter twice. <br/>
                Enjoy!
            </p>
        </div>
    );
}

//Exporting component to Header.js
export default Help;