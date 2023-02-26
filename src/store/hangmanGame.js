import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
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
    reducers: {
        addWord: (state, action) => {
            const randomWord = action.payload;
            for (let i = 0; i <= 6; i++){
                state.word[i+1].letter = randomWord[i];
            }
        },
        guessedLetter: (state, action) => {
            let letterGuess = action.payload;
            let guessedCorrectly = false;
            for (let i = 0; i <= 6; i++){
                if (letterGuess === state.word[i+1].letter){
                    state.word[i+1].found = true;
                    guessedCorrectly = true;
                }
            }

            if (guessedCorrectly === false){
                state.incorrectlyGuessedLetter.push(letterGuess);
            }
        },
    },
});

export const { addWord, guessedLetter } = gameSlice.actions;
export default gameSlice.reducer;