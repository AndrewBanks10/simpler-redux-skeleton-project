import Component from './view'
import { serviceFunctions, selectors, storeIsDefinedCallback } from './model'
import { connectWithStore } from 'simpler-redux'

export default connectWithStore({
  uiComponent: Component,
  selectors,
  serviceFunctions,
  storeIsDefinedCallback,
  usingStateAccessors: true
})
