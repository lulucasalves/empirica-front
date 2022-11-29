import React from 'react'
import ReactDOM from 'react-dom/client'

import 'styles/global.scss'

import { AppRoutes } from 'router'
import reportWebVitals from 'reportWebVitals'
import { Provider } from 'react-redux'
import store from 'store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
