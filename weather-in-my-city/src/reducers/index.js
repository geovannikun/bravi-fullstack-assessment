import { combineReducers } from 'redux'
import weather from './weatherReducer.jsx'

const rootReducer = combineReducers({
    weather
})

export default rootReducer