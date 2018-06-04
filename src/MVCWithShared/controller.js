import Component from './view'
import { serviceFunctions, selectors } from './model'
import { connectWithStore } from 'simpler-redux'

export default connectWithStore({
  uiComponent: Component,
  selectors,
  serviceFunctions
})
