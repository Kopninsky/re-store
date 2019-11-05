import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {HomePage, CartPage} from '../Pages'

const App = () => {
  return(
    <React.Fragment>
      <h1>App</h1>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
          />
        <Route
          path="/cart"
          component={CartPage}
          />
      </Switch>
    </React.Fragment>
  )
}

export default App