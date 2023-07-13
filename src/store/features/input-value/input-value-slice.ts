import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InputValueState {
    value: number
}

const initialState: InputValueState = {
    value: 0,
}

export const inputValueSlice = createSlice({
    name: 'input-value',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { change } = inputValueSlice.actions

export default inputValueSlice.reducer


//https://jsonplaceholder.typicode.com/todos
