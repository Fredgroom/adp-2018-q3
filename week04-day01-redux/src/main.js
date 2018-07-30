import store from './redux/store'

//ACTIONS
// ----------
//1. action for increment: INCREMENT_COUNTER
//2. action for decrement: DECREMENT_COUNTER

console.log(store.getState().counter)

store.dispatch({ type: 'INCREMENT_COUNTER' })
console.log(store.getState().counter);

store.dispatch({ type: 'DECREMENT_COUNTER'})
console.log(store.getState().counter);
