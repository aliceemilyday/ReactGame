//Importing useDispatch from react-redux to call the required action creator
import { useDispatch } from 'react-redux';
//Importing addWord action from store
import { addWord } from './store/hangmanGame'
//Importing external components
import Header from './Components/Header';
import words from './Components/Words';
import WordGenerator from './Components/WordGenerator';
import Letters from './Components/Letters';
import IncorrectGuesses from './Components/IncorrectGuesses';
import Hangman from './Components/Hangman';
//Importing external styling sheet
import './App.css';


function App() {
  //Initiating the dispatch variable with useDispatch which will dispatch all the required actions to the reducer to enable us to modify state 
  const dispatch = useDispatch();

  /*Generating a random word from the array of words imported from Words.js. The below formula generates a random number using Math.random() and
  I have multiplied it by the length of the words array. I've then used Math.floor() to round the number down to the largest integer and converted
  the output to uppercase so I can use this to match against the individual letters. I've stored the random word in a variable and sent the variable
  to the store using the action creator 'addWord'. I have added this formula as the first piece of code in App.js as it's the first thing that
  needs to be done before the rest of the code can run*/
  const randomWord = words[Math.floor(Math.random()*words.length)].toUpperCase();
  dispatch(addWord(randomWord));

  //Below I have returned all of the individual components created
  return (
    <div className="App">
      <Header />
      <WordGenerator />
      <Hangman />
      <Letters />
      <IncorrectGuesses />
    </div>
  );
}

//Exporting App component to use in index.js
export default App;