import store from './redux/store'

//ACTIONS
// ----------
//1. action for increment: INCREMENT_COUNTER
//2. action for decrement: DECREMENT_COUNTER

console.log(store.getState().counter)

const incrementCount = () => {
    return { type: 'INCREMENT_COUNTER'}
}

const decrementCount = () => {
    return { type: 'DECREMENT_COUNTER'}
}

store.dispatch(incrementCount())
console.log(store.getState().counter);

store.dispatch(decrementCount())
console.log(store.getState().counter);
