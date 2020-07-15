import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function HomePage() {
    const [games, setGames] = useState([])

    useEffect(() =>{
        axios.get(`https://api.rawg.io/api/games`)
            .then(res =>{
                console.log(res)
                setGames(res.data.results)
            })
    },[])


    return (
        <div>
            <ul>
                {games.map(game =>(
                    <li key={game.id}>{game.name} {game.released}</li>
                ))}
            </ul>
        </div>
    )
}

