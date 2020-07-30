import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';


export default function DetailsPage(props) {
    const [game, setGame] = useState({})
    const [suggestedGames, setSuggestedGames] = useState({})
    const id = props.match.params.id
    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games/${id}`)
            .then(game => {
                console.log(game)
                setGame(game.data)
            })
            .catch(err => {
                console.log(`error: ${err}`)
              })
    }, [])

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games/${id}/suggested`)
            .then(suggested => {
                console.log(suggested)
                setGame(suggested)
            })
            .catch(err => {
                console.log(`error: ${err}`)
              })
    }, [])



    return (
        
        <>
            <br></br><br></br><br></br><br></br>
                <Card>
                    <Card.Img classname="card-img-top" variant="top" src={game.background_image} />
                </Card>
                <h2>{game.name}</h2> 

                <h3>{game.description_raw}</h3>

                {console.log(`Returned game: ${game}`)}
            
        </>
    )
}
