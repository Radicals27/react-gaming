import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Axios from "axios"
import Search from './Search'

import './styles/App.css'

import GoogleLogin from "react-google-login"
import HomePage from './HomePage'
import CookieBar from './CookieBar'

import Navbar from "./Navbar"

export default function App() {
    return (
        <div class="App-header">
            <CookieBar/>
            <Navbar/>
            <Search/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
