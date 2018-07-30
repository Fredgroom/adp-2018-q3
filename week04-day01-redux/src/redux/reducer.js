export default (state = {count: 0} , action) => {

    switch (action.type) {
        case 'INCREMENT_COUNTER': {
            return Object.assign({}, state, {count: state.count + 1})
            //Increment the thing
        }
        case 'DECREMENT_COUNTER': {
            return Object.assign({}, state, {count: state.count - 1})
            //Decrement the thing
        }
        default: {
            return state
        }
    }
}

