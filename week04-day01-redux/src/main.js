import store from './redux/store'
import {incrementCounter, decrementCounter} from './redux/modules/counter'
import {updateCountName} from './redux/modules/name'

//---------------------------

document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(incrementCounter())
    document.getElementById('count').innerHTML = store.getState().counter.count; 
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decrementCounter())
    document.getElementById('count').innerHTML = store.getState().counter.count; 
});

//----------------------------
const nameInputField = document.getElementById("name")
const nameOutputField = document.getElementById("counted-name")

nameInputField.addEventListener("input", () => {
    store.dispatch(updateCountName(nameInputField.value))
    nameOutputField.textContent = store.getState().name.name
});


let unsubscribe = store.subscribe(() => {
    count.textContent = store.getState().counter.count
    console.log('something changed in the store');
    console.log(store.getState().counter)
    })

store.dispatch(incrementCounter())
store.dispatch(decrementCounter())


unsubscribe(); 

