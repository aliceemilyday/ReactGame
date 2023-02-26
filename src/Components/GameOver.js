//Importing useNavigate from react-router-dom to create refresh button that refreshes the browser router
import { useNavigate } from 'react-router-dom';
//Importing external styling sheet
import './GameOver.css';

//The below function component is shown to the user when they have had 10 incorrectly guessed letters
function GameOver() {
    //First I've assigned the useNavigate() function to a variable
    const navigate = useNavigate();

    //I've then created a function thats called when the restart button (line 20) is clicked
    const handleClick = () => {
        //The function sets navigate to (0) which initiates a browser refresh
        navigate(0);
    }

    return (
        <div className='gameOver'>
            <h1>Game Over</h1>
            <button type="button" onClick={handleClick}>RESTART</button>
        </div>
    );
}

//Exporting component to use in Hangman.js
export default GameOver;