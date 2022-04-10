import { configureStore } from '@reduxjs/toolkit';
import birdReducer from 'features/birdSlice';

export const store = configureStore({
    reducer: {
        bird: birdReducer,
    },
});