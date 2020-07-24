import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
//import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
//import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default function TrendingPage(){
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/trending')
            .then(gamesList => {
                console.log(`Calling backend API for all games`)
                setGames(gamesList)
                console.log(gamesList)
            })
    }, [])

    return(
        <div>

        </div>
    )
}