import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    xPos: -1,
    yPos: 250,
    rotate: 0,
    transitionFlyUpMs: 350,
    transitionFlyDownMs: -1,
    transitionRotateMs: 150,
    birdWidth: 34,
    birdHeight: 24
};

const birdSlice = createSlice({
    name: 'bird',
    initialState,
    reducers: {
        letBirdFlyUp(state) {
            if (state.yPos > 0) {
                if (state.yPos - 50 >= 0) {
                    state.yPos = state.yPos - 50;
                    state.rotate = -30;
                } else {
                    state.yPos = 0;
                    state.rotate = -30;
                }
            }
        },
        letBirdFlyDown(state) {
            /**
             * 420 is the max value for 'top' property.
             * 420 = 500 - 80
             * (gameHeight = 500, foregroundHeight = 80)
             */
            if (state.yPos + 25 <= 420) {
                state.yPos = state.yPos + 25;
                state.rotate = 30;
            } else {
                console.log('The bird falls to the ground!');
            }
        },
        setBirdSize(state, action) {
            state.birdWidth = action.payload.w;
            state.birdHeight = action.payload.h;
        },
        setBirdXPos(state, action) {
            state.xPos = action.payload;
        },
    },
});

export const {
    letBirdFlyUp,
    letBirdFlyDown,
    setBirdSize,
    setBirdXPos
} = birdSlice.actions;
export default birdSlice.reducer;