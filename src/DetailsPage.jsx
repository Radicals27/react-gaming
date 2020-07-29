import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DetailsPage(props) {
    const [game, setGame] = useState({})
    const id = props.match.params.id
    const {myGame} = props.location.state
    console.log(`My game: ${myGame}`)

    const getData = () => {
        try{
            axios.get(`https://react-gaming-backend.herokuapp.com/games/${id}`)
            .then(g => {
                console.log(`getData Game: ${g}`)
                setGame(g)
            })
        }catch(err){
            console.log("Sorry, no luck!")
            console.error(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() => {
    //     axios.get(`${DEV_BACKEND_URL}/game/${id}`)
    //         .then(gamesList => {
    //             console.log(gamesList)
    //             setGame(game.data)
    //         })
    // }, [id])

    const getOverview = () =>{
        try{
            return game.description
        } catch(err){
            console.log(err)
        }
    }

    return (
        <>
            { getData()}
            <br></br><br></br><br></br><br></br>
            <h2>{id}</h2> 
            {console.log(`Returned game: ${game.name}`)}
            <h1>TESTING</h1> 
        </>
    )
}
