import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import './styles/homepagecard.css'
import './search.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
})

export default function HomePageCard() {
    const classes = useStyles()

    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const [games, setGames] = useState([])
    // Set up the checkboxes for filtering games
    const [checked, setChecked] = React.useState({
        PC: false,
        PlayStation: false,
        Xbox: false,
        Nintendo: false,

        Action: false,
        Strategy: false,
        RPG: false,
        Shooter: false,
        Adventure: false,
        Puzzle: false,
        Racing: false,
        Sports: false
    })

    //When user toggles a checkbox, update state to reflect the checked boxes
    const handleToggle = ({ target }) =>
        setChecked(s => ({ ...s, [target.name]: !s[target.name] }))

    axios.get('https://react-gaming-backend.herokuapp.com/')
        .then(gamesList => {
            setGames(gamesList.data)
        })

    return (
        <Card>
            <div className="checkboxContainer">
                {Object.keys(checked).map(key => (
                    <label className="label">{key}
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            key={key}
                            name={key}
                            checked={checked[key]}
                        />
                    </label>
                ))}
            </div>
            {games.map(game => (
                <CardActionArea key={games.id}>
                    <div>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={game.background_image}
                            title={game.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {game.name}
                            </Typography>
                        </CardContent>
                    </div>
                </CardActionArea>
            ))}
        </Card>
    )
}
