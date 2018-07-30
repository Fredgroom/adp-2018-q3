import store from './redux/store'
import {incrementCounter, decrementCounter} from './redux/modules/counter'
//ACTIONS
// ----------
//1. action for increment: INCREMENT_COUNTER
//2. action for decrement: DECREMENT_COUNTER

console.log(store.getState().counter)



store.dispatch(incrementCounter())
console.log(store.getState().counter);

store.dispatch(decrementCounter())
console.log(store.getState().counter);
