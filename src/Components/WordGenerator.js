import { useSelector } from 'react-redux';
import Winner from './Winner';
import './WordGenerator.css';

function WordGenerator() {
    const word = useSelector((state) => state.game.word);
    
    let wordArray = [];
    for(let i = 1; i <= 7; i++){
        wordArray.push(word[i]);
    }

    let finalWordArray = [];
    let numOfCorrectGuesses = 0;
    wordArray.forEach(letter => {
        if (letter.found === true){
            finalWordArray.push(letter.letter);
            numOfCorrectGuesses++;
        } else {
            finalWordArray.push("");
        }
    });
    
    let wordItems = finalWordArray.map((letter, index) =>
        <div key={index}>{letter}</div>
    );


    if (numOfCorrectGuesses === 7){
        return (
            <div>
                <div className='wordContainer'>
                    {wordItems}
                </div>
                <Winner />
            </div>
        );
    }
    else {
        return (
            <div className='wordContainer'>
                {wordItems}
            </div>
        );
    }
}

export default WordGenerator;