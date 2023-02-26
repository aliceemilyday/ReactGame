/*Importing createSlice from Redux toolkit to create a slice of state. I've only created 1 slice of state as all of the components and action
creators require access to the word stored in state*/
import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    //Name of slice of state that is implemented in store
    name: "game",
    //Setting initialState values
    /*The word objects contain each letter in the randomly generated word and a "found" value. If the user correctly guesses the letter, the found
    value is updated to true. The incorrectlyGuessedLetter array contains the letters that have not been guessed correctly which is displayed to
    the user on the web page and also used to know which hangman image to show */
    initialState: {
        word: {
            1: {
                letter: "",
                found: false,
            },
            2: {
                letter: "",
                found: false,
            },
            3: {
                letter: "",
                found: false,
            },
            4: {
                letter: "",
                found: false,
            },
            5: {
                letter: "",
                found: false,
            },
            6: {
                letter: "",
                found: false,
            },
            7: {
                letter: "",
                found: false,
            },
        },
        incorrectlyGuessedLetter: [],
    },
    //Below I have created the reducers used to manipulate the initial state
    reducers: {
        /*Below is the addWord action creator which is called in App.js when a random word has been generated. The purpose of this action is
        to push the randomly generated word into state.word created above*/
        addWord: (state, action) => {
            //The random word is sent to state as action.payload so I have stored it in a new variable
            const randomWord = action.payload;
            //I've then used a for loop to loop through each index of state.word and assign each letter of the randomWord variable to the state.word.letter
            for (let i = 0; i <= 6; i++){
                state.word[i+1].letter = randomWord[i];
            }
        },
        /*The below guessedLetter action creator is called in Letters.js when the user has guessed a letter. The Letters component sends the value
        of the guessed letter to the action function which is used to compare against the letters in state.word*/
        guessedLetter: (state, action) => {
            //First I have stored the selected letter from action.payload in a variable
            let letterGuess = action.payload;
            //I've then created another variable to use to identify if the user has guessed the letter correctly or not and set the value to false
            let guessedCorrectly = false;

            /*I have then created a for loop to loop through each index of state.word and used an if statement inside the loop to identify if the
            letterGuess variable is exactly equal to the letter value in each object of state.word. If it IS equal, the found value of state.word is
            updated to true for that letter and the guessedCorrectly variable is also updated to true. */
            for (let i = 0; i <= 6; i++){
                if (letterGuess === state.word[i+1].letter){
                    state.word[i+1].found = true;
                    guessedCorrectly = true;
                }
            }

            //I've then used the guessedCorrectly variable to push the incorrectly guessed letters into the array stored in state
            if (guessedCorrectly === false){
                state.incorrectlyGuessedLetter.push(letterGuess);
            }
        },
    },
});

//Exporting the action creators
export const { addWord, guessedLetter } = gameSlice.actions;
//Exporting the gameSlice reducer function which is implemented into store
export default gameSlice.reducer;