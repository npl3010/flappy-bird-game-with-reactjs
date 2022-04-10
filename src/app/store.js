import { configureStore } from '@reduxjs/toolkit';
import fbgameReducer from 'features/fbgame/fbgameSlice';
import birdReducer from 'features/fbgame/birdSlice';

export const store = configureStore({
    reducer: {
        fbGame: fbgameReducer,
        bird: birdReducer,
    },
});