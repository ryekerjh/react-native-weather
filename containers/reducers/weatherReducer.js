import { combineReducers } from 'redux';

export const GET_WEATHER = 'GET_WEATHER';

const weather = (state = {}, action) => {
  switch(action.type) {
    case GET_WEATHER:
      return action.payload
  }
}

export const weatherReducer = weather;