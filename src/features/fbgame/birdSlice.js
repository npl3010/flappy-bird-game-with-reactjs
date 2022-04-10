import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    xPos: -1,
    yPos: 250,
    transitionFlyUpMs: 350,
    transitionFlyDownMs: -1
};

const birdSlice = createSlice({
    name: 'bird',
    initialState,
    reducers: {
        letBirdFlyUp(state) {
            if (state.yPos - 50 >= 0) {
                state.yPos = state.yPos - 50;
            }
        },
        letBirdFlyDown(state) {
            if (state.yPos + 25 <= 400) {
                state.yPos = state.yPos + 25;
            }
        },
    },
});

export const {
    letBirdFlyUp,
    letBirdFlyDown,
} = birdSlice.actions;
export default birdSlice.reducer;