import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: {
        value: 0
    },
    name: 'CounterReducer',
    reducers: {
        sumCount(state, action: PayloadAction<number>) {
            state.value = state.value + action.payload;
        },
        subtCount(state, action: PayloadAction<number>) {
            state.value = state.value - action.payload;
        },
        resetValue(state, action: PayloadAction<number>) {
            state.value = 0;
        }
    }
})

export const { sumCount, subtCount } = counterSlice.actions
export default counterSlice.reducer