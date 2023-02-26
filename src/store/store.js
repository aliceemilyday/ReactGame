//Importing configureStore from the redux toolkit
import { configureStore } from '@reduxjs/toolkit';
//Importing gameReducer to pass through configureStore
import gameReducer from "./hangmanGame";

//Exporting configureStore function with game reducer
export default configureStore({
    reducer: {
        game: gameReducer,
    },
});