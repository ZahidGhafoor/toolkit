const redux = require("redux")
const createStore = redux.createStore

const produce = require("immer").produce

const initialState = {
    name: "zahid",
    adress: {
        street: "123",
        city: "kasur",
        state: "punjab"
    }
}

const STREET_UPDATED = "STREET_UPDATED"


const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     adress: {
            //         ...state.adress,
            //         street: action.payload
            //     }
            // }

            return produce(state,(draft)=>{
                draft.adress.street= action.payload
            })

        default:
            return state
    }
}

const store = createStore(reducer)

console.log("initial state=======", store.getState());

const unsub = store.subscribe(()=>{
console.log("updated state=======", store.getState());

})

store.dispatch(updateStreet("456"))
unsub()


