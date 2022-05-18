import { createSlice } from "@reduxjs/toolkit";
import {ordered as cakeOrdered} from "../cake/cakeSlice"



const initialState = {
    numOfIceCreams: 20
}

const IceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restoked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    }
})


export default IceCreamSlice.reducer
export const {ordered, restoked} = IceCreamSlice.actions
