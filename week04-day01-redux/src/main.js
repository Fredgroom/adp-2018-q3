import store from './redux/store'
import {incrementCounter, decrementCounter} from './redux/modules/counter'
//ACTIONS
// ----------
//1. action for increment: INCREMENT_COUNTER
//2. action for decrement: DECREMENT_COUNTER


document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(incrementCounter())
    document.getElementById('count').innerHTML = store.getState().counter.count; 
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decrementCounter())
    document.getElementById('count').innerHTML = store.getState().counter.count; 
});

let unsubscribe = store.subscribe(() => {
    console.log('something changed in the store');
    console.log(store.getState().counter)
    })

store.dispatch(incrementCounter())
store.dispatch(decrementCounter())

unsubscribe(); 