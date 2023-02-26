//Create a React app that allows the user to play hangman. The game picks a random word and the user must guess the word letter by letter
//If the user guesses incorrectly, a piece of the hangman is shown. If the entire hangman is completed, the game is over and the user has lost.
//The game should meet the following criteria: 
    //It should feature atleast 4 different types of components that respond to user interaction
    //A number of components should be rendered using the map() method and have a unique key
    //User interaction should modify the state of some components
    //The user should be able to restart the game
    //The user should be informed if they have won/lost the game
    //There should be a 'help' button to inform the user of the rules of the game
    //The UI should be attractively styled and easy to use.


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);