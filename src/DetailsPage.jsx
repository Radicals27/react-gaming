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
                <div style={{"padding":0,"maxWidth":"100%","margin":"0"}}>
                    <ItemsCarousel
                        infiniteLoop={false}
                        gutter={12}
                        activePosition={'center'}
                        chevronWidth={60}
                        disableSwipe={false}
                        alwaysShowChevrons={false}
                        numberOfCards={3}
                        slidesToScroll={3}
                        outsideChevron={false}
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                        rightChevron={'>'}
                        leftChevron={'<'}
                    >
                        <div style={{ height: 200, background: '#EEE' }}>
                            <Card>
                                <Card.Img>
                                    {g.tags.image_background}
                                </Card.Img>
                            </Card>
                        </div>
                    </ItemsCarousel>
                </div>
            ))}
            
        </>
    )
}
