import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DEV_BACKEND_URL from './constants/const'

export default function DetailsPage() {
    const [game, setGame] = useState([])
    const id = game.id

    const getData = () => {
        try{
            axios.get(`http://localhost:4000/game/${id}`)
            .then(g => {
                console.log(g)
            })
        }catch(err){
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
                <p>
                </p>    
        </>
    )
}
