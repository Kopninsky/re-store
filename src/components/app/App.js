import React from 'react'

import WithBookStoreService from '../HOC'

const App = ( { bookstoreService } ) => {
  console.log( bookstoreService.getBooks() )
  return(
    <React.Fragment>
      <h1>App</h1>
    </React.Fragment>
  )
}

export default WithBookStoreService()(App)