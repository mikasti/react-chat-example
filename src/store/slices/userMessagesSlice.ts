import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
    userProfileId: string | null,
    value: number,
    currentComponent: 'Messages' | 'Profile' | null;
}

// Define the initial state using that type
const initialState: CounterState = {
    userProfileId: null,
    currentComponent: null,
    value: 0,
}

const userMessagesSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = userMessagesSlice.actions


export default userMessagesSlice.reducer;