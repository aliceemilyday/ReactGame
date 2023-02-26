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



//Importing React & ReactDOM to create React app and render components
import React from 'react';
import ReactDOM from 'react-dom/client';
//Importing BrowserRouter to create refresh button 
import {BrowserRouter} from 'react-router-dom';
/*Importing Provider component from react-redux to ensure application has access to the store which is needed to ensure each component has
access to the relevant slices of state */
import { Provider } from 'react-redux';
//Importing store implementation created using configureStore function
import store from './store/store';
//Importing App component to create React element
import App from './App';

//Creating the React root element that displays all components to the user
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Implementing BrowserRouter to create refresh component that refreshes router
    //Implementing the Provider component and passing store as one of its props to ensure the store is correctly implemented
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);