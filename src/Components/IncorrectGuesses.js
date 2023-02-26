import { useSelector } from 'react-redux';
import './IncorrectGuesses.css';

function IncorrectGuesses() {
    const incorrectLetters = useSelector((state) => state.game.incorrectlyGuessedLetter);

    const letterItems = incorrectLetters.map((letter, index) =>
        <div key={"letter" + index}>{letter}</div>
    );

    return (
        <div>
            <h2 className='incorrectHeader'>Incorrect Guesses:</h2>
            <div className="incorrectLettersContainer">
                {letterItems}
            </div>
        </div>
    );
}

export default IncorrectGuesses;