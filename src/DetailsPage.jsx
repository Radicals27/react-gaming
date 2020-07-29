import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
                console.log(`error: ${error}`)
              })
    }, [])

    const getOverview = () =>{
        try{
            return game.description
        } catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <br></br><br></br><br></br><br></br>
            <h2>{id}</h2> 
            {console.log(`Returned game: ${game.name}`)}
            <h1>TESTING</h1> 
        </>
    )
}
