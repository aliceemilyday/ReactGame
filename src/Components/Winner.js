//Importing useNavigate from react-router-dom to create refresh button that refreshes the browser router
import { useNavigate } from 'react-router-dom';
//Importing external css file
import './Winner.css';

//The below function component displays the 'Winner' message whe the user has guessed 7 letters correctly
function Winner() {
    //First I've assigned the useNavigate() function to a variable
    const navigate = useNavigate();

    //I've then created a function thats called when the restart button (line 20) is clicked
    const handleClick = () => {
        //The function sets navigate to (0) which initiates a browser refresh
        navigate(0);
    }

    return ( 
        <div className='winner'>
            <h1>Winner!</h1>
            <button type="button" onClick={handleClick}>RESTART</button>
        </div>
    );
}

//Exporting component to use in WordGenerator.js
export default Winner;