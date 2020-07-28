import React, {useState, useEffect} from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './Search'

import './styles/App.css'

import HomePage from './HomePage'
import TrendingPage from './TrendingPage'
import CookieBar from './CookieBar'
import TrendingCarousel from './TrendingCarousel'

import Navbar from "./Navbar"
import Auth from "./Auth"
import DetailsPage from './DetailsPage'

export default function App() {

    return (
        <div className="App-header">
            <CookieBar/>
            {/* <Auth /> */}
            <Navbar/>
            <TrendingPage/>
            {/* <DetailsPage/> */}
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={DetailsPage} />
                    <Route exact path='/trending' component={TrendingPage}/>
                    <Route exact path='/game/:id' component={DetailsPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
