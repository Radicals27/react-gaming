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
import Mission from './Mission'

export default function App() {
    const [user, setUser] = useState(false)

    return (
        <div className="App-header">
            <CookieBar/>
            <Navbar user={user} setUser={setUser}/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={TrendingPage} />
                    <Route exact path='/games/:id' render={(props) => <DetailsPage {...props} />} />
                    <Route exact path='/login' component={Auth} />
                    <Route exact path='/mission' component={Mission} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
