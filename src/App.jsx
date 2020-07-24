import React, {useState, useEffect} from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './Search'

import './styles/App.css'

import HomePage from './HomePage'
import TrendingPage from './TrendingPage'
import CookieBar from './CookieBar'

import Navbar from "./Navbar"
import Auth from "./Auth"

export default function App() {
    

    return (
        <div className="App-header">
            <CookieBar/>
            <Auth />
            <Navbar/>
            <Search/>
            <TrendingPage/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/trending' component={TrendingPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
