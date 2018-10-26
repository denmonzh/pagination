import {combineReducers} from 'redux'
import dataUserReducer from './redusers'


export default combineReducers({
    dataUsers: dataUserReducer
})