import React, { useState } from "react"
import ReactDOM from 'react-dom'
import './styles/App.css'
import GoogleLogin from "react-google-login"
import HomePage from './HomePage'


import Search from './Search'

export default function App() {
    return (
        <div class="App-header">
            {/* <HomePage /> */}
            <HomePage />
        </div>
    )
}
