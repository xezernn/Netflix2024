import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Style/font.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/index.js'
import UserContext from './Context/UserContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </Provider>
)
