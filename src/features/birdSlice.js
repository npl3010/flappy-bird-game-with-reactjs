import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
};

const birdSlice = createSlice({
    name: 'bird',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        },
    },
});

export const {
    increment,
    decrement,
    incrementByAmount
} = birdSlice.actions;
export default birdSlice.reducer;