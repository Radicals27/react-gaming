import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import {Container, Row, Col, Card} from 'react-bootstrap'

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
                console.log(`error: ${err}`)
              })
    }, [])

    return (
        <>
            <br></br><br></br><br></br><br></br>
            {/* <Container class="body">
                <Row xs={1} md={2}>
                    <Col xs={12} md={8}>
                        <Row>
                            <Card>
                                <Card.Img classname="card-img-top" variant="top" src={game.background_image} />
                                <Card.Body>
                                    <Card.Title>{game.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    <Col xs={6} md={4}>
                        {game.description_raw}
                    </Col>
                </Row> */}
                <Card>
                    <Card.Img classname="card-img-top" variant="top" src={game.background_image} />
                </Card>
                <h2>{game.name}</h2> 

                <h3>{game.description_raw}</h3>
                {console.log(`Returned game: ${game.name}`)}
            {/* {/* </Container> */}
            
        </>
    )
}
