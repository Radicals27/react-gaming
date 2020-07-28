import React, { useState, useEffect } from "react"
import axios from 'axios'
import PropTypes from 'prop-types'
import {
    AppBar,
    Toolbar,
    Typography,
    Slide,
    Button,
    CssBaseline,
    useScrollTrigger,
    IconButton
} from '@material-ui/core'
// import WhatshotIcon from '@material-ui/icons'
import Search from './Search'
import './styles/Navbar.css'
import Auth from './Auth'

function HideOnScroll(props) {
    const { children, window } = props
    const trigger = useScrollTrigger({ target: window ? window() : undefined })

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

export default function Navbar(props) {
    // Find out if a user is already logged in
    const [user, setUser] = useState(false)
    const [error, setError] = useState(false)
    const url = "https://react-gaming-backend.herokuapp.com"

    useEffect(() => {
        axios.get(`${url}/users/me`, {
        withCredentials: true
        })
        .then(result => {
            setUser(result.data)
        })
    }, [])

    const handleLogOut = (e) => {
    e.preventDefault()
    axios.get(`${url}/users/logout`, {
        withCredentials: true
    })
        .then(() => {
        setUser(false)
        setError(false)
        })
    }
    return (
        <>
            {/* <CssBaseline /> */}
            <HideOnScroll {...props}>
                <AppBar colour="secondary">
                    <Toolbar>
                        <Typography variant="h6">REACT GAMING</Typography>
                        <Button>
                            Home
                        </Button>
                        <Button>
                            Our Mission
                        </Button>
                        <Search />
                        {user ? (
                            <>
                            <h2>Logged in as {user.displayName || user.username}</h2>
                            <button onClick={handleLogOut}>Log Out</button>
                            </>
                        ) : (null)}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {/* <Toolbar /> */}

        </>
    )
}