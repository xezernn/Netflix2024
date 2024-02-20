import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Style/font.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/index.js'
import UserContext from './Context/UserContext.jsx'
import DataContext from './Context/DataContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <DataContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </DataContext>
  </Provider>
)
