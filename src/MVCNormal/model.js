/*
  The model is declarative to the controller (index.js) by its exports.
  The following names are reserved.

  reducerKey - (required) The key in the redux store for this module
  initialState - (required) The initial state that will be used in the reducer for initialization.
  initialUIState - (optional) If this is exported then simpler-redux will build a mapStateToProps
    function based on the keys in this object.
  selectors - (optional) If this is exported then simpler-redux will build a mapStateToProps
    function based on the selectors object.
  serviceFunctions - (optional) If this is exported then simpler-redux will be a mapDispatchToProps
    function based on the keys in this object. These will be the service functions exposed to the
    the react component in the props.
  noStoreParameterOnServiceFunctions = true (Optional) - By default, simpler-redux injects the store as the
    first parameter when any service function is called by the UI. The UI parameters follow.
    If this is set to true and exported then simpler-redux will not do this store injection.
  storeIsDefinedCallback - (Optional) If this is exported then simpler-redux will call this function
    with the simpler redux store as a parameter when the store becomes available to the react component.
    Use this to call the simpler-redux stateAccessors in order to gain access to
    setState, getState and reducerState.
    Example:
    let setState, reducerState
    export const storeIsDefinedCallback = store =>
      ({setState, reducerState} = stateAccessors(store, reducerKey, initialState))

  Note: If you present any redux state in the react component then you must define and export either
    a selectors object or an initialUIState object. Otherwise, you will not have any state in
    the props of the react component.
*/

// Define your reducer key. This is rquired.
export const reducerKey = 'mVCNormal'

// If you are not using shared state management with this module then you can use
// setState and getState. To use, setState(objectToMerge) and let c = getState().c.
let setState
let getState
let reducerState
export const storeIsDefinedCallback = (store, stateAccessors) =>
  ({ setState, getState, reducerState } = stateAccessors(store, reducerKey))

// TODO: Define your UI initial state. Do not export this if you define a selectors object.
export const uiInitialState = {
  // Example
  counter: 0
}

// TODO: Define your initial state. This is required.
export const initialState = {
  ...uiInitialState
}

// TODO: Define your selector functions for your UI state props keys if you need
// something more complicated than uiInitialState.
// Example: counter: state => state[reducerKey].counter
/*
export const selectors = {
}
*/

// TODO: Define your service functions for your UI using getState and setState to manage redux state.
export const serviceFunctions = {
  // Examples
  increment: () => setState({ counter: getState().counter + 1 }, 'increment'),
  decrement: () => reducerState.counter--
}
