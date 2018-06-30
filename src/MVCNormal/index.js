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

/*
TODO:
The below is only needed if you currently have your own code splitting logic. Given
export const isDynamicReducer = true is in the model, simpler-redux automatically
supports dynamic reducer loading.

However, if you do use your own dynamic load of reducers then do your add reducer with the below.

export const reducerKey = modelDefinition.reducerKey
export const reducer = generalReducer(modelDefinition.reducerKey, modelDefinition.initialState)

*/
