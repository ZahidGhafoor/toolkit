const store = require('./app/store');
const  iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions;

const cakeActions = require("./features/cake/cakeSlice").cakeActions

const fetchUsers = require("./features/user/userSlice").fetchUsers



// console.log("Initial State", store.getState());

// const unsub = store.subscribe(()=>{
//     console.log("updaed state===",store.getState());
// })



// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restoked(50))


// unsub()

store.dispatch(fetchUsers())

