/*
The model is declarative to the controller in (index.js) by its exports.
The following names are reserved for exporting from this model code.

reducerKey - (required) The key in the redux store for this module
initialState - (required) The initial state that will be used in the reducer for initialization.
initialUIState - (optional) If this is exported then simpler-redux will build a mapStateToProps
  function based on the keys in this object.
selectors - (optional) If this is exported then simpler-redux will build a mapStateToProps
  function based on the selectors object.
serviceFunctions - (optional) If this is exported then simpler-redux will build a mapDispatchToProps
  function based on the keys in this object. These will be the service functions exposed to the
  the react component in the props.
noStoreParameterOnServiceFunctions = true (Optional) - By default, simpler-redux injects the store as the
  first parameter when any service function is called by the UI. The UI parameters follow.
  If this is set to true and exported then simpler-redux will not do this store injection.
storeIsDefinedCallback(store, stateAccessors) - (Optional) If this is exported then simpler-redux will call
  this function with the simpler redux store as a parameter when the store becomes available to the react
  component. Use this to call the simpler-redux stateAccessors in order to gain access to
  setState, getState and reducerState.
  Example:
  let setState, reducerState
  export const storeIsDefinedCallback = (store, stateAccessors) =>
    ({setState, reducerState} = stateAccessors(store, reducerKey, initialState))
isDynamicReducer - (Optional) This supports dynamic reducer loading. For this, simpler-redux
    automatically takes care of building the reducer and loading it into the reducers object.

Note: If you present any redux state in the react component then you must define and export either
  a selectors object or an initialUIState object. Otherwise, you will not have any state in
  the props of the react component.
*/

// Define your reducer key. This is rquired.
export const reducerKey = 'mVCNormal'

//
// TODO: Define your initialUIState object. Do not export this if you define a selectors object.
// Simpler-redux builds a mapStateToProps from this object below.
// Therefore, every key defined in initialUIState will automatically be in the props of
// the react component with their associated current state values.
//
export const initialUIState = {
  // Example
  counter: 0
}

//
// TODO: Define your initial state. This is required and will be the shape of your
// state at the reducerKey.
// This is the initial state for the generated reducer.
//
export const initialState = {
  ...initialUIState
}

// TODO: Define your selector functions for your UI state props keys if you need
// something more complicated than uiInitialState.
// Example: counter: state => state[reducerKey].counter
/*
export const selectors = {
}
*/

/*
reducerState is a proxy that wraps the simpler-redux store. This allows simple syntatic sugar
access to the redux state at the reducerKey.
For example, reducerState.isFetching translates to a redux store.getState()[reducerKey][isFetching].
reducerState.isFetching = true translates to a redux state transition at reduxState[reducerKey][isFetching]
setState(objectToMerge, [type])
getState().keyInThisReducerState
*/
let setState
let getState
let reducerState
export const storeIsDefinedCallback = (store, stateAccessors) =>
  ({ setState, getState, reducerState } = stateAccessors(store, reducerKey, initialState))

/*
TODO: Define your service functions for your UI by using reducerState, getState and setState to manage
redux state. The serviceFunctions object is used by simpler-redux to build a mapDispatchToProps
function. Therefore, every key below will automatically be in the props of the react component and will be
associated with the function at the key below. Hence, based on the below, increment and decrement
will be in the props. So, onClick={props.increment} in the react component will cause the increment
function below to be called when the html element is clicked. The serviceFunctions definition is all
that you need to do to make that happen.
*/
export const serviceFunctions = {
  // Examples
  increment: () => setState({ counter: getState().counter + 1 }, 'increment'),
  decrement: () => reducerState.counter--
}

// This supports dynamic reducer loading. With this, simpler-redux automatically
// builds the reducer and loads it when the react component is constructed. So,
// You do not have to load the reducer into the global reducer object. If you have your
// own code splitting logic then do not use this. 
export const isDynamicReducer = true
