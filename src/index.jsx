import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Login from './Login'
import Navbar from './Navbar'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
)