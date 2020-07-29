import React, { useState, useEffect, useCallback } from 'react'
import {Card, CardActionArea, CardActions, CardContent, Grid, GridList, GridListTile} from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import TrendingCarousel from './TrendingCarousel'
import { Link } from 'react-router-dom'

export default function TrendingPage(){
     //ALL games from the API, called once at start
    const [games, setGames] = useState([])
    const [data, setDataIsReady] = useState([])
    //The actual games we will display, which will be filtered by checkboxes
    const [gamesToDisplay, setGamesToDisplay] = useState([])

    // Set up the checkboxes for filtering games
    const [genres, setGenres] = React.useState({
        Action: false,
        Strategy: false,
        RPG: false,
        Shooter: false,
        Adventure: false,
        Puzzle: false,
        Racing: false,
        Sports: false
    })

    const [platforms, setPlatforms] = React.useState({
        PC: false,
        PlayStation: false,
        Xbox: false,
        Nintendo: false,
    })

    // Track the previous state of all checkboxes
    const [previousGenres, setPreviousGenres] = React.useState({})
    const [previousPlatforms, setPreviousPlatforms] = React.useState({})

    //When user toggles a checkbox, update state to reflect the checked boxes
    const handleToggleGenre = ({ target }) => {
        setGenres(s => ({ ...s, [target.name]: !s[target.name] }))
    }

    const handleTogglePlatform = ({ target }) => {
        setPlatforms(s => ({ ...s, [target.name]: !s[target.name] }))
    }

    //Returns an array of game objects that meet the filtered criteria
    function filterGames(gamesArray, platforms, genres) {
        let anyCheckedBoxes = false
        let filteredGames = []

        for (let [key, value] of Object.entries(platforms)) {
            if (value === true)
                anyCheckedBoxes = true
            //use 'key' or 'value'
        }
        for (let [key, value] of Object.entries(genres)) {
            if (value === true)
                anyCheckedBoxes = true
            //use 'key' or 'value'
        }
        //return all games if there are no checked boxes
        if (!anyCheckedBoxes) {
            return gamesArray
        }

        //Go through each game returned from the API
        for (let i = 0; i < games.length; i++) {
            //Go through each PLATFORM for the game
            for (let j = 0; j < games[i].parent_platforms.length; j++) {
                //Check if the games platform/s include the checked platform/s
                for (let [key, value] of Object.entries(platforms)) {
                    if (value === true && games[i].parent_platforms[j].platform.name === key && !filteredGames.includes(games[i])) {
                        filteredGames.push(games[i])
                    }
                }
            }
        }
        console.log(`Games array: ${gamesArray}`)
        for (let i = 0; i < games.length; i++) {
            //Go through each GENRE for the game
            for (let j = 0; j < games[i].genres.length; j++) {
                //Check if the games genre/s include the checked genres
                for (let [key, value] of Object.entries(genres)) {
                    if (value === true && games[i].genres[j].name === key && !filteredGames.includes(games[i])) {
                        filteredGames.push(games[i])
                    }
                }
            }
        }
        return filteredGames
    }

    const getRawgApi = useCallback(async () => {
        try {
          // _RAWG game details call
          const response = await fetch(`https://react-gaming-backend.herokuapp.com/trending`)
          const json = await response.json()
          console.log(json.results)
          setGames(json.results)
          setGamesToDisplay(json.results)
          setDataIsReady(true)

        console.log(games)
        } catch (e) {
          console.error(e)
        }
      }, [])
    
      useEffect(() => {
        getRawgApi()
      }, [getRawgApi])

      useEffect(() => {
        //If no checkboxes are ticked, display all games
        if (filterGames(games, platforms, genres) == games)
            setGamesToDisplay(games)
        if (previousGenres !== genres) {
            console.log("genre changed")
            setPreviousGenres(genres)
            setGamesToDisplay(filterGames(games, platforms, genres))
        }
        if (previousPlatforms !== platforms) {
            console.log("platform changed")
            setPreviousPlatforms(platforms)
            setGamesToDisplay(filterGames(games, platforms, genres))
        }
    })
    
    return(
        <div>

            <TrendingCarousel/>
            <Typography>
                Trending games: 
            </Typography>
            <GridList cols={3}>\
            { Object.values(games).map(game => (
                <GridListTile key={games.id}>
                    <Link to={`/games/${game.id}`}>
                        <Card>
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
                    </Card>
                </Link>
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