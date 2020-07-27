import React, {useState, useCallback, useEffect} from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Typography from '@material-ui/core/Typography'
require('dotenv').config()

export default function TrendingCarousel() {
    const [games, setGames] = useState([])
    const getRawgApi = useCallback(async () => {
        try {
          // _RAWG game details call
          const response = await fetch(`${BACK_END_URL}/trending`)
          const json = await response.json()
          console.log(json.results)
          setGames(json.results)

        console.log(games)
        } catch (e) {
          console.error(e)
        }
      }, [])
    
      useEffect(() => {
        getRawgApi()
      }, [getRawgApi])

    return (
        <Carousel showArrows={true}>
        {Object.values(games).map(game => (
            <div>
                <img src={game.background_image} alt="atler"/>
                <Typography>{game.name}</Typography>
            </div>
                ))}
        </Carousel>
    )
}
