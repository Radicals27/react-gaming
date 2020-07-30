import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';


export default function DetailsPage(props) {
    const [game, setGame] = useState({})
    const id = props.match.params.id
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const chevronWidth = 10
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
                <Card>
                    <Card.Img classname="card-img-top" variant="top" src={game.background_image} />
                </Card>
                <h2>{game.name}</h2> 

                <h3>{game.description_raw}</h3>
                {console.log(`Returned game: ${game.name}`)}
            { Object.values(game).map( g =>(
                <div style={{ padding: `0 ${chevronWidth}px` }}>
                    <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={20}
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<button>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                    >
                        <div style={{ height: 200, background: '#EEE' }}>
                            <Card>
                                {g.tags.image_background}
                            </Card>
                        </div>
                    </ItemsCarousel>
                </div>
            ))}
            
        </>
    )
}
