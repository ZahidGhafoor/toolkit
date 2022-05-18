import {configureStore} from "@reduxjs/toolkit"

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from "../features/iceCream/iceCreamSlice"
import userReducer from '../features/user/userSlice'



// import reduxLogger from 'redux-logger'
// const { getDefaultMiddleware } = require("@reduxjs/toolkit")
// const logger = reduxLogger.crea

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})



export default store