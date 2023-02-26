//Importing useDispatch from react-redux to call the required action creator
import { useDispatch } from "react-redux";
//Importing guessedLetter action creator from store
import { guessedLetter } from "../store/hangmanGame";
//Importing external styling sheet
import './Letters.css';

//Array that contains all letters of the alphabet. I'll use this to create the letter elements that the user will click to pick a letter.
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Below is the Letters function component that displays the letters of the alphabet to the user for them to click and guess a letter
function Letters(){
    //Initiating the dispatch variable with useDispatch which will dispatch all the required actions to the reducer to enable us to modify state 
    const dispatch = useDispatch();

    /*I've then created a function that's triggered when the user clicks a letter button. The function takes the event as an argument so that I can
    use the e.target.innerHTML attribute to identify the letter on the button that the user has selected. I've then stored the value in a variable
    and called the guessLetter action creator using dispatch and sent the selectedVariable to use in action.payload */
    const handleButton = (e) => {
        let selectedLetter = e.target.innerHTML;
        dispatch(guessedLetter(selectedLetter))
        //I've then set the button to disabled so the user cannot click on it again
        e.target.disabled = true;
    }

    /*Below I have used the map() method to create the letter button elements. The method takes an array (alphabet) and creates a new array from it,
    after applying the specified function to each element of the original array. In this instance, i've created the button elements which display each
    letter of the alphabet. I've used the index to create a unique key for each element.*/
    const letterItems = alphabet.map((letter, index) =>
        //I've used an onClick event on each button that triggers the handleButton function when clicked
        <button type="button" key={"letter" + index} className="{letter}" onClick={handleButton} disabled={false}>{letter}</button>
    );

    return ( //I have then output the new letterItems array
        <div className="lettersContainer">
            {letterItems}
        </div>
    );
}

//Exporting component to use in App.js
export default Letters;