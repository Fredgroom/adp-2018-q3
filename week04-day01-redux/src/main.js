import store from './redux/store'
import {incrementCounter, decrementCounter} from './redux/modules/counter'
//ACTIONS
// ----------
//1. action for increment: INCREMENT_COUNTER
//2. action for decrement: DECREMENT_COUNTER
let unsubscribe = store.subscribe(() => {
    console.log('something changed in the store');
    console.log(store.getState().counter)
    })

store.dispatch(incrementCounter())
store.dispatch(decrementCounter())

unsubscribe();