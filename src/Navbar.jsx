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

    useEffect(() => {
        axios.get(`https://react-gaming-backend.herokuapp.com/users/me`, {
        withCredentials: true
        })
        .then(result => {
            console.log(`User logged in: ${JSON.stringify(result.data)}`)
            setUser(result.data)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    }, [])

    const handleLogOut = (e) => {
    e.preventDefault()
    axios.get(`https://react-gaming-backend.herokuapp.com/users/logout`, {
        withCredentials: true
    })
        .then(() => {
            console.log(`User logged out`)
            setUser(false)
            setError(false)
        })
    }
    return (
        <>
            {/* <CssBaseline /> */}
            <HideOnScroll {...props}>
                <AppBar style={{ background: '#006400' }}>
                    <Toolbar>
                        <Typography variant="h6">REACT GAMING</Typography>
                        <Button variant="contained" color="primary" onClick={event => window.location.href='/'}>
                            Home
                        </Button>
                        <Button variant="contained" color="primary" onClick={event => window.location.href='/mission'}>
                            Our Mission
                        </Button>
                        <Search />
                        {user ? (
                            <>
                                <h5>Logged in as {user.displayName || user.username}</h5>
                                <div className="logOut">
                                    <Button variant="contained" color="primary" onClick={handleLogOut}>Log Out</Button>
                                </div>
                            </>
                        ) : (
                            <div className="logOut">
                                <Button variant="contained" color="primary" onClick={event => window.location.href='/login'}>
                                    Register/Sign In
                                </Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {/* <Toolbar /> */}

        </>
    )
}