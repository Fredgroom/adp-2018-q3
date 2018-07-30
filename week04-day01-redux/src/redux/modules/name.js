// Import the appropriate action creator

const UPDATE_COUNT_NAME= "UPDATE_COUNT_NAME"

export const updateCountName = (name) => {
    return { 
        type: UPDATE_COUNT_NAME, 
        name: name}
}

//--------------------------------------------

export default (state = {name: ''} , action) => {

    switch (action.type) {
        case UPDATE_COUNT_NAME: {
            return {...state, name: action.name}
        }
        default: {
            return state
        }
    }
}