import React, { useState } from "react"
import ReactDOM from 'react-dom'
import './styles/App.css'
import GoogleLogin from "react-google-login"
import HomePage from './HomePage'
import Search from './Search'
import Axios from "axios"

export default function App() {
    const handleClick = (event) => {
        event.preventDefault()
        Axios.get('http://localhost:4000/ping') 
            .then(res => console.log(res))

    }

    return (
        <div class="App-header">
            <button onClick={handleClick}>
                Click Me
            </button>
            <HomePage />
        </div>
    )
}
