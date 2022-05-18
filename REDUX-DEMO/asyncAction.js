const redux = require("redux")
const thunkMiddleWare = require("redux-thunk").default
const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware
const axios = require("axios")

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED"
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED"
const FETCH_USER_FAILED = "FETCH_USER_FAILED"

const fetchUserRequested = () => {
    return {
        type: FETCH_USER_REQUESTED
    }
}

const fetchUsersuccess = (users) => {
    return {
        type: FETCH_USER_SUCCEEDED,
        payload: users
    }
}
const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchUserRequested:
            return {
                ...state,
                loading: true
            }
        case fetchUsersuccess:
            return {
                loading: false,
                users: action.payload,
                error: ""
            }
        case fetchUserFailure:
            return {
                loading: false,
                users: [],
                error: action.payload
            }



        default:
            return state
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequested())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data.map((user) => user.id)
                // console.log("our user are=-----------", users)
                dispatch(fetchUsersuccess(users))
            })

            .catch((error) => { 

                dispatch(fetchUserFailure(error.message))
            })


    }
}


const store = createStore(reducer, applyMiddleWare(thunkMiddleWare))

store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())




