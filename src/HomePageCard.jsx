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

    // useEffect(() => {
    //     fetch('/users')
    //         .then(res => console.log(res)) })
    //     axios.get(`https://api.rawg.io/api/games`)
    //     .then(res =>{
    //         console.log(res.data.results)

    // setGames(axios.get('http://react-gaming-backend.herokuapp.com'))
    //console.log(axios.get('http://react-gaming-backend.herokuapp.com/'))
    console.log(axios.get('http://localhost:4000/'))
    axios.get('http://localhost:4000/')
        .then(gamesList => {
            setGames(gamesList.data)
        })

    return (
        <Card>
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
