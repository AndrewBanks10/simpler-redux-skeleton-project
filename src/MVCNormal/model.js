import { generalReducer, stateAccessors } from 'simpler-redux'

export const reducerKey = 'mVCNormal'

// If you are not using shared state management with this module then you can use
// setState and getState. To use, setState(objectToMerge) and let c = getState().c.
let setState
let getState
export const storeIsDefinedCallback = store => {
  ({ setState, getState } = stateAccessors(store, reducerKey))
}

// TODO: Define your initial state
const initialState = {
}

// TODO: Define your selector functions for your UI state props keys.
// Example: counter: state => state[reducerKey].counter
export const selectors = {
}

// TODO: Define your service functions for your UI using getState and setState
export const serviceFunctions = {
  // Example
  increment: () => setState({ counter: getState().counter + 1 }, 'increment')
}

export const reducer = generalReducer(reducerKey, initialState)
// TODO: Add the reducer for this file to reducers.js using reducerKey and reducer.
