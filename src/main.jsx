import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/globalStyles'
import Home from './Pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <GlobalStyle/>
      <Home/>
    </>
  </React.StrictMode>
)
