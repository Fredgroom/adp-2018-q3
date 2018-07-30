import {combineReducers} from 'redux'
import counterReducer from './modules/counter'
import nameReducer from './modules/name'

export default combineReducers({
    counter: counterReducer,
    name: nameReducer,
})

