const createSlice = require("@reduxjs/toolkit").createSlice



const initialState = {
    numOfIceCreams: 10
}

const IceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    }
})


module.exports = IceCreamSlice.reducer
 const {ordered, restocked} = IceCreamSlice.actions
 
 export {ordered, restocked}