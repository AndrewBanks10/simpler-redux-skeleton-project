import React from 'react'
import { Provider } from 'react-redux'
import simplerReduxStore from './reduxstore'
import MVCNormal from './MVCNormal'
import MVCWithShared from './MVCWithShared'

const App = () =>
  // TODO: Make sure you use the simplerReduxStore in the react-redux Provider.
  <Provider store={simplerReduxStore}>
    <div>
      <MVCNormal />
      <MVCWithShared />
    </div>
  </Provider>

export default App
