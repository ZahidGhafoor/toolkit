import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numofCakes: 20,
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofCakes--
        },
        restoked: (state, action) => {
            state.numofCakes += action.payload
        }

    }
})

export default cakeSlice.reducer
export const {ordered, restoked} = cakeSlice.actions