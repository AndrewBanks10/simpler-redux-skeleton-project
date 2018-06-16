// Controller
import { connectWithStore, generalReducer } from 'simpler-redux'
import uiComponent from './view'
import * as modelDefinition from './model'

export default connectWithStore({ uiComponent, ...modelDefinition })
export const reducerKey = modelDefinition.reducerKey
export const reducer = generalReducer(modelDefinition.reducerKey, modelDefinition.initialState)
// TODO: Add the reducer for this file to reducers.js using reducerKey and reducer.