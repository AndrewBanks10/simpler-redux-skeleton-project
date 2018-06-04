import { generalReducer } from 'simpler-redux'

export const reducerKey = 'mVCWithShared'

// TODO: Define your initial state
const initialState = {
}

// TODO: Define your selector functions for your UI state props keys.
// Example: counter: state => state[reducerKey].counter
export const selectors = {
}

// TODO: Define your service functions for your UI
// Example: increment: store => store.setRState(reducerKey, {counter: store.getRState(reducerKey).counter + 1}, 'increment')
export const serviceFunctions = {
}

export const reducer = generalReducer(reducerKey, initialState)
// TODO: Add the reducer for this file to reducers.js using reducerKey and reducer.
