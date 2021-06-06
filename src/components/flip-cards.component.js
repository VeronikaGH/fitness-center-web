import React, { Component } from "react";
import {Container, CardDeck, Card, Row, Col, Button} from "react-bootstrap";
import './style.css';

export default class FlipCards extends Component {
    render() {
        return(
            <Container className="mb-3 mt-5">
                <h2 className="text-center">Our advantages</h2>
                <CardDeck className="m-3">
                    <Row>
                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-3 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Professional team</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p> 
                                                Highly qualified and responsive staff <hr/>   
                                                Certified specialists <hr/>   
                                                Current athletes </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>

                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-3 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Effective training</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p> 
                                                Individual and effective training plan <hr/>
                                                Coach's attention and technique adjustments<hr/>
                                                Master classes of fitness professionals 

                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>

                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-3 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Crossfit Zone</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p>
                                                Individual and group training sessions<hr/>
                                                Quick result<hr/>
                                                Specialized equipment<hr/>
                                                Team spirit<hr/>
                                                Competitive excitement
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                       
                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-3 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Crossfit Zone</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p> 
                                                Subscription system <hr/>
                                                Unlike the system of purchasing annual cards to fitness clubs, in PrideFitness you buy monthly subscriptions only for the services that you need.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>

                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-3 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Our capabilities</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p>
                                                A wide grid of schedules for group programs, crossfit workouts, and fight club<hr/>
                                                Always great music and energy, friendly atmosphere
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardDeck>
            </Container>
        )
    }
};

/*
  <Row>
                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-4 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Professional team</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p> 
                                                Highly qualified and responsive staff <hr/>   
                                                Certified specialists <hr/>   
                                                Current athletes </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>

                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-4 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Effective training</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p> 
                                                Individual and effective training plan <hr/>
                                                Coach's attention and technique adjustments<hr/>
                                                Master classes of fitness professionals 

                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>

                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-4 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Crossfit Zone</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p>
                                                Individual and group training sessions<hr/>
                                                Quick result<hr/>
                                                Specialized equipment<hr/>
                                                Team spirit<hr/>
                                                Competitive excitement
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                       
                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-4 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Crossfit Zone</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p> 
                                                Subscription system <hr/>
                                                Unlike the system of purchasing annual cards to fitness clubs, in PrideFitness you buy monthly subscriptions only for the services that you need.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>

                        <Col className="flip-card">
                            <div className="flip-card-inner">
                                <div height="380px" border="white" className="flip-card-front" >
                                    <Card.Body> 
                                        <svg width="100" height="100" fill="currentColor" class="bi bi-check2-square m-4 pt-2" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>         
                                        <hr/>                          
                                        <Card.Title className="text-center mt-2">Our capabilities</Card.Title>
                                    </Card.Body>
                                </div>
                                <div height="380px" border="white" className="flip-card-back">
                                    <Card.Body>
                                        <Card.Text>
                                            <p>
                                                A wide grid of schedules for group programs, crossfit workouts, and fight club<hr/>
                                                Always great music and energy, friendly atmosphere
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>

                    </Row>
                    */