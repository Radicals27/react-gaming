import React, {useState, useCallback, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Typography from '@material-ui/core/Typography'
import {Card} from 'react-bootstrap'


export default function TrendingCarousel() {
    const [games, setGames] = useState([])
    const getRawgApi = useCallback(async () => {
        try {
          // RAWG game trending call
          const response = await fetch(`https://react-gaming-backend.herokuapp.com/trending`)
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
              <Card>
                <Card.Img variant="top" src={game.background_image} />
              </Card>
                <Typography>{game.name}</Typography>
            </div>
                ))}
        </Carousel>
    )
}
