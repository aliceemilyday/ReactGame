
import { useState } from 'react';
import Help from './Help';
import './Header.css';

function Header(){
    const [showHelp, setShowHelp] = useState(false);

    const handleClick = () => {
        setShowHelp(current => !current);
    }

    return (
        <header>
            <h1 className='mainHeader'>Hangman</h1>
            <button type="button" onClick={handleClick}>{showHelp ? 'CLOSE' : 'HELP'}</button>
            {showHelp && (<Help />)}
        </header>
    );
}

export default Header;