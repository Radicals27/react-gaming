import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'

export default function DetailsPage(props) {
    const [game, setGame] = useState({})
    const id = props.match.params.id

    // const getData = () => {
    //     try{
    //         axios.get(`https://react-gaming-backend.herokuapp.com/games/${id}`)
    //         .then(g => {
    //             console.log(`getData Game: ${g}`)
    //             setGame(g)
    //         })
    //     }catch(err){
    //         console.log("Sorry, no luck!")
    //         console.error(err)
    //     }
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

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

    return (
        <>
            <br></br><br></br><br></br><br></br>

            <image src={game.background_image}/>

            <h2>{game.name}</h2> 

            <h3>{game.description_raw}</h3>
            {console.log(`Returned game: ${game.name}`)}
        </>
    )
}
