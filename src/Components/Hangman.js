import { useSelector } from 'react-redux';
import hangman0 from '../Images/hangman0.png';
import hangman1 from '../Images/hangman1.png';
import hangman2 from '../Images/hangman2.png';
import hangman3 from '../Images/hangman3.png';
import hangman4 from '../Images/hangman4.png';
import hangman5 from '../Images/hangman5.png';
import hangman6 from '../Images/hangman6.png';
import hangman7 from '../Images/hangman7.png';
import hangman8 from '../Images/hangman8.png';
import hangman9 from '../Images/hangman9.png';
import hangman10 from '../Images/hangman10.png';
import GameOver from './GameOver';

function Hangman() {
    const incorrectLetters = useSelector((state) => state.game.incorrectlyGuessedLetter);

    if (incorrectLetters.length === 0){
        return <img src={hangman0} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 1){
        return <img src={hangman1} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 2){
        return <img src={hangman2} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 3){
        return <img src={hangman3} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 4){
        return <img src={hangman4} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 5){
        return <img src={hangman5} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 6){
        return <img src={hangman6} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 7){
        return <img src={hangman7} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 8){
        return <img src={hangman8} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length === 9){
        return <img src={hangman9} alt="hangman game image"></img>
    }
    else if (incorrectLetters.length >= 10){
        return (
            <div>
                <img src={hangman10} alt="hangman game image"></img>
                <GameOver />
            </div>
        )
    } 
}

export default Hangman;