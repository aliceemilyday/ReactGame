import { configureStore } from '@reduxjs/toolkit';
import gameReducer from "./hangmanGame";

export default configureStore({
    reducer: {
        game: gameReducer,
    },
});