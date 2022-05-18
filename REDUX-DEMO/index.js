const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators= redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware

const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()



const cake_order = "CAKE ORDERED"
const icecream_order = "ICE-CREAM_ORDER"



const orderCake = () => {
    return {
        type: cake_order,
        quantity: 1
    }
}

const ordericeCream = () => {
    return {
        type: icecream_order,
        quantity: 1
    }
}

const initialStateCake = {
    numOfCakes: 10
}
const initialStateIceCream = {
    numOfIceCream: 20
}

const cakereducer = (state = initialStateCake, action) => {
    if (action.type == cake_order) {
        return { numOfCakes: state.numOfCakes - 1 }
    } else {
        return state
    }

}

const iceCreamReducer = (state = initialStateIceCream, action) => {
    if (action.type == icecream_order) {
        return { numOfIceCream: state.numOfIceCream - 1 }
    } else {
        return state
    }
}

const rootReducers = combineReducers({
    cake: cakereducer,
    iceCream: iceCreamReducer
})



const store = createStore(rootReducers)

console.log("initial state", store.getState())


const unsub = store.subscribe(() => {
    console.log("update state", store.getState());
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())


const actions = bindActionCreators({orderCake,ordericeCream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.ordericeCream()
actions.ordericeCream()
actions.ordericeCream()
unsub()
