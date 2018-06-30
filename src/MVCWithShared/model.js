export const reducerKey = 'mVCWithShared'

// TODO: Define your initial state
export const initialState = {
}

// TODO: Define your selector functions for your UI state props keys.
// Example: counter: state => state[reducerKey].counter
export const selectors = {
}

// TODO: Define your service functions for your UI
// Example: increment: store => store.setRState(reducerKey, {counter: store.getRState(reducerKey).counter + 1}, 'increment')
export const serviceFunctions = {
}

// This supports dynamic reducer loading. With this, simpler-redux automatically
// builds the reducer and loads it when the react component is constructed. So,
// uou do not have to load the reducer into the global reducer object. If you have your
// own code splitting logic then do not use this. 
export const isDynamicReducer = true
