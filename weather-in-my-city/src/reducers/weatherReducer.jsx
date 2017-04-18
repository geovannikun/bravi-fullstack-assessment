import * as ActionTypes from '../constants/ActionTypes.js'

const initialState = 
{
    city    : 'None',
    country : 'None',
    temp    : 0
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_WEATHER:
            return { ...state, city: action.city, country: action.country, temp: action.temp }
        default:
            return state
  }
}