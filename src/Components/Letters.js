import { useDispatch } from "react-redux";
import { guessedLetter } from "../store/hangmanGame";
import './Letters.css';

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function Letters(){
    const dispatch = useDispatch();

    const handleButton = (e) => {
        let selectedLetter = e.target.innerHTML;
        dispatch(guessedLetter(selectedLetter))
        e.target.disabled = true;
    }

    const letterItems = alphabet.map((letter, index) =>
        <button type="button" key={"letter" + index} className="{letter}" onClick={handleButton} disabled={false}>{letter}</button>
    );

    return (
        <div className="lettersContainer">
            {letterItems}
        </div>
    );
}

export default Letters;