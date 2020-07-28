import React from 'react'

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
                        <Auth>
                        </Auth>
                    </Toolbar>

                </AppBar>
            </HideOnScroll>
            {/* <Toolbar /> */}

        </>
    )
}