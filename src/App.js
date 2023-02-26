import { useDispatch } from 'react-redux';
import { addWord } from './store/hangmanGame'
import Header from './Components/Header';
import words from './Components/Words';
import WordGenerator from './Components/WordGenerator';
import Letters from './Components/Letters';
import IncorrectGuesses from './Components/IncorrectGuesses';
import Hangman from './Components/Hangman';
import './App.css';


function App() {
  const dispatch = useDispatch();
  const randomWord = words[Math.floor(Math.random()*words.length)].toUpperCase();
  dispatch(addWord(randomWord));


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

export default App;