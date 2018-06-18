// Controller
import { connectWithStore, generalReducer } from 'simpler-redux'
import uiComponent from './view'
import * as modelDefinition from './model'

/*
TODO: Add the component below from connectWithStore to your react tree.
Example:

import MVCNormal from './MVCNormal'

const App = () =>
  <Provider store={simplerReduxStore}>
    <MVCNormal />
  </Provider>
*/
export default connectWithStore({ uiComponent, ...modelDefinition })

export const reducerKey = modelDefinition.reducerKey
export const reducer = generalReducer(modelDefinition.reducerKey, modelDefinition.initialState)
/*
TODO: Add the generated reducer above to the global reducers object using reducerKey and reducer.
A sample entry in the reducers object is shown below.

import { reducerKey as mvcNormalReducerKey, reducer as mvcNormalReducer } from './MVCNormal'

const reducersObject = {
  [mvcNormalReducerKey]: mvcNormalReducer
}
*/
