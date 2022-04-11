import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pipeHeight: 200,
    distanceTopPipeAndBottomPipe: 100,
    distanceLeftPipeAndRightPipe: 200,
    xPos: 350,
    yPos: -1,
    countPairsOfPipes: 4,
    firstPairOfPipesToBeShown: 0
};

const pipeSlice = createSlice({
    name: 'pipe',
    initialState,
    reducers: {
        movePipeToLeft(state) {
            if (state.xPos > -75) {
                state.xPos = state.xPos - 10;
            } else {
                if (state.firstPairOfPipesToBeShown < state.countPairsOfPipes - 1) {
                    state.xPos += state.distanceLeftPipeAndRightPipe;
                    state.firstPairOfPipesToBeShown += 1;
                } else {
                    state.xPos += state.distanceLeftPipeAndRightPipe;
                    state.firstPairOfPipesToBeShown = 0;
                }
            }
        },
    },
});

export const {
    movePipeToLeft,
} = pipeSlice.actions;
export default pipeSlice.reducer;