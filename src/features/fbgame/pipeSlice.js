import { createSlice } from '@reduxjs/toolkit';

const generateRandomHeight = () => {
    return Math.floor(Math.random() * 201) + 50;
};

const initialState = {
    pipeWidth: 52,
    pipeHeightTop: 200,
    distanceTopPipeAndBottomPipe: 100,
    distanceLeftPipeAndRightPipe: 200,
    xPos: 350,
    yPos: -1,
    countPairsOfPipes: 4,
    firstPairOfPipesToBeShown: 0,
    pipeDataList: []
};

const pipeSlice = createSlice({
    name: 'pipe',
    initialState,
    reducers: {
        movePipesToLeft(state) {
            if (state.xPos > -75) {
                state.xPos = state.xPos - 10;
            } else {
                if (state.firstPairOfPipesToBeShown < state.countPairsOfPipes - 1) {
                    const currentIndex = state.firstPairOfPipesToBeShown;
                    // Which pipe will be placed at the first position:
                    state.xPos += state.distanceLeftPipeAndRightPipe;
                    state.firstPairOfPipesToBeShown += 1;
                    // Set new height:
                    state.pipeDataList[currentIndex].topHeight = generateRandomHeight();
                } else {
                    // Which pipe will be placed at the first position:
                    state.xPos += state.distanceLeftPipeAndRightPipe;
                    state.firstPairOfPipesToBeShown = 0;
                    // Set new height:
                    state.pipeDataList[state.countPairsOfPipes - 1].topHeight = generateRandomHeight();
                }
            }
        },
        generatePipeList(state) {
            const dataList = [];
            for (let i = 0; i < state.countPairsOfPipes; i++) {
                const randomTopHeight = generateRandomHeight();
                dataList.push({
                    topHeight: randomTopHeight
                });
            }
            state.pipeDataList = dataList;
        }
    },
});

export const {
    generatePipeList,
    movePipesToLeft,
} = pipeSlice.actions;
export default pipeSlice.reducer;