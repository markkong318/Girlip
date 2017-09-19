import { combineReducers } from 'redux'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    girlip: girlipReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const girlipReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return {...state, trip: action.payload.trip};
        default:
            return state;
    }
}

export default makeRootReducer
