import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
//import { makeStyles } from '@material-ui/core/styles'
import {Card, CardActionArea, CardContent, Grid, GridList, GridListTile} from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia'
//import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DEV_BACKEND_URL from './constants/const'

export default function TrendingPage(){
    const [games, setGames] = useState([])
    const [data, setDataIsReady] = useState([])

    const getRawgApi = useCallback(async () => {
        try {
          // _RAWG game details call
          const response = await fetch('http://localhost:4000/trending')
          const json = await response.json()
          console.log(json.results)
          setGames(json.results)
          setDataIsReady(true)

        console.log(games)
        } catch (e) {
          console.error(e)
        }
      }, [])
    
      useEffect(() => {
        getRawgApi()
      }, [getRawgApi])
    return(
        <div>
            <Typography>
                Trending games: 
            </Typography>
            <GridList cols={3}>\
            { Object.values(games).map(game => (
                <GridListTile key={games.id}>
                    <CardActionArea key={game.id}>
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

                </GridListTile>
                            ))}
            </GridList>
        </div>
    )
}

// render(
//     <GridList cols={3}>
//       {nums.map(n => {
//         return (
//           <GridListTile key={n}>
//             <Demo key={n} num={n} />
//           </GridListTile>
//         );
//       })}
//     </GridList>,
//     rootElement
//   );