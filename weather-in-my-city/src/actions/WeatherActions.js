import * as ActionTypes from '../constants/ActionTypes'

export const addWeather= (city, country, temp) => ({ type: ActionTypes.SET_WEATHER, city, country, temp })