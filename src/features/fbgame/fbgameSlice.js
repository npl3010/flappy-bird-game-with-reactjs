import { createSlice } from '@reduxjs/toolkit';

/**
 * initialState = {
 *   gameState: 'stopped' | 'playing' | 'paused',
 * }
 */
const initialState = {
    gameState: 'stopped',
    gameWidth: 350,
    gameHeight: 500
};

const fbgameSlice = createSlice({
    name: 'fbgame',
    initialState,
    reducers: {
        startGame(state) {
            state.gameState = 'playing';
        },
    },
});

export const {
    startGame,
} = fbgameSlice.actions;
export default fbgameSlice.reducer;