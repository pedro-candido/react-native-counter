import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: 0,
    name: 'CounterReducer',
    reducers: {
        sumCount(state, action: PayloadAction<number>) {
            state = state + action.payload;
        },
        subtCount(state, action:PayloadAction<number>) {
            state = state - action.payload;
        }
    }
})

export const { sumCount, subtCount } = counterSlice.actions
export default counterSlice.reducer