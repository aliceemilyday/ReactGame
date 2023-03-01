//Importing useNavigate from react-router-dom to create refresh button that refreshes the browser router
import { useNavigate } from 'react-router-dom';
//Importing useState to get/set the state to show/hide specific elements
import { useState } from 'react';
//Importing Help component
import Help from './Help';
//Importing external styling sheet
import './Header.css';

function Header(){
    /*Creating showHelp and setShowHelp variables and assigning them to the initial state of false. This will be used to change the styling
    of the help button and to identify if the user has clicked on the button (to show them the Help component) */
    const [showHelp, setShowHelp] = useState(false);
    //First I've assigned the useNavigate() function to a variable
    const navigate = useNavigate();

    //I've then created a function thats called when the restart button (line 32) is clicked
    const handleRefresh = () => {
        //The function sets navigate to (0) which initiates a browser refresh
        navigate(0);
    }

    //Below I have createc the function that's triggered when the 'HELP' button is clicked
    const handleClick = () => {
        //The function changes the value of showHelp to whatever it was NOT previously. This is so the button can be continuously clicked. 
        setShowHelp(current => !current);
    }

    return ( //I have then returned the header elements, including the restart and help buttons
        <header>
            <h1 className='mainHeader'>Hangman</h1>
            <button type="button" className='refreshButton' onClick={handleRefresh}>RESTART</button>
            {/*Below I have created the button that shows the Help component when clicked on. If showHelp is TRUE, the buttons inner text
            will say 'CLOSE' so the user can exit the help page, and the help component will be shown. Until the button is clicked it will
            not be visible*/}
            <button type="button" className='helpButton' onClick={handleClick}>{showHelp ? 'CLOSE' : 'HELP'}</button>
            {showHelp && (<Help />)}
        </header>
    );
}

//Exporting Header component to use in App.js
export default Header;