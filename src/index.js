import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './Components/App'
import ErrorBoundary from './Components/ErrorBoundry'
import BookStoreService from './Services/BookstoreServices'
import { BookStoreServiceProvider } from './Components/BookstoreServicesContext/BookStoreService'

import store from './store'

const bookstoreService = new BookStoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>, 
  document.getElementById('root'))