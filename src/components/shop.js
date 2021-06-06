import React, { render, Component, useState} from "react";
import {Container, Nav, CardDeck, Card, Button, Row, Col, Tab, Tabs, Form} from "react-bootstrap";
import "./shop.css";


export default class Shop extends Component {
      render() {
        return(
            <>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </Card.Header>
                    
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>          
                 </Card>
            </Container>
            <Container style={{
                "min-height": "100vh",
                "vertical-align": "middle",
                "display": "flex",
                "font-family": "sans-serif",
                "font-size": "0.8rem",
                "font-weight": "bold"}}>
                <Card style={{    
                    "margin": "auto",
                    "max-width": "950px",
                    "width": "90%",
                    "box-shadow": "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    "border-radius": "1rem",
                    "border": "transparent",
                    "background-color": "#fff",
                    "padding": "4vh 5vh",
                    "border-bottom-left-radius": "1rem",
                    "border-top-left-radius": "1rem"
                }}>
                    <Row>
                        <Col className="col-8 cart">
                            <Card.Title className="mb-5">
                                <h4><b className="font-size: 1.5rem">Season Tickets</b></h4>
                            </Card.Title>
                            <Row className="border-top border-bottom">
                                <Row className="main align-items-center" style={{"margin": "0",
                                    "padding": "2vh 0",
                                    "width": "100%"}}>
                                    <Col className="col-2 p-0"><img className="img-fluid" style={{"width": "3.5rem"}}src="https://i.imgur.com/1GrakTl.jpg"/></Col>
                                    <Col>
                                        <div class="row text-muted">Shirt</div>
                                        <div class="row">Cotton T-shirt</div>
                                    </Col>
                                    <Col><a href="#" style={{"text-decoration": "none"}}className="color-black">-</a><a href="#" style={{"text-decoration": "none"}}className="border color-black">1</a><a href="#">+</a> </Col>
                                    <Col>&euro; 44.00 <span className="close" style={{    "margin-left": "auto",
    "font-size": "0.7rem"}}>&#10005;</span></Col>
                                </Row>
                            </Row>
                            <Row>
                                <Row className="main align-items-center" style={{    "margin": "0",
    "padding": "2vh 0",
    "width": "100%"}}>
                                    <Col className="col-2 p-0"><img className="img-fluid"style={{"width": "3.5rem"}} src="https://i.imgur.com/ba3tvGm.jpg"/></Col>
                                    <Col>
                                        <Row className="text-muted">Shirt</Row>
                                        <Row>Cotton T-shirt</Row>
                                    </Col>
                                    <Col> <a href="#" style={{"text-decoration": "none"}}className="color-black">-</a><a href="#" style={{"text-decoration": "none"}}className="border color-black">1</a><a href="#">+</a> </Col>
                                    <Col>&euro; 44.00 <span className="close" style={{    "margin-left": "auto","font-size": "0.7rem"}}>&#10005;</span></Col>
                                </Row>
                            </Row>
                            <Row className="border-top border-bottom">
                                <Row class="main align-items-center" style={{    "margin": "0",
    "padding": "2vh 0",
    "width": "100%"}}>
                                    <Col className="col-2 p-0"><img className="img-fluid" style={{"width": "3.5rem"}}src="https://i.imgur.com/pHQ3xT3.jpg"/></Col>
                                    <Col>
                                        <Row className=" text-muted">Shirt</Row>
                                        <Row>Cotton T-shirt</Row>
                                    </Col>
                                    <Col> <a href="#" className="color-black"  style={{"text-decoration": "none"}}>-</a><a href="#" style={{"text-decoration": "none"}}className="border color-black">1</a><a href="#">+</a> </Col>
                                    <Col>&euro; 44.00 <span className="close" style={{    "margin-left": "auto",
    "font-size": "0.7rem"}}>&#10005;</span></Col>
                                </Row>
                            </Row>
                            <Row className="back-to-shop" style={{"margin-top": "4.5rem"}}><a href="#">&leftarrow;</a><span className="text-muted">Back to shop</span></Row>
                        </Col>
                        <Col className="col-md-4 summary" style={{    "background-color": "#ddd",
    "border-top-right-radius": "1rem",
    "border-bottom-right-radius": "1rem",
    "padding":" 4vh",
    "color": "rgb(65, 65, 65)",
    "border-top-right-radius": "unset",
    "border-bottom-left-radius": "1rem"}}>
                            <div>
                                <h5 style={{"margin-top": "4vh"}}><b>Summary</b></h5>
                            </div>
                            <hr style={{"margin-top": "1.25rem"}}/>
                            <Row>
                                <Col style={{"padding-left":"0"}}>ITEMS 3</Col>
                                <Col className="text-right">&euro; 132.00</Col>
                            </Row>
                            <Form style={{"padding": "2vh 0"}}>
                                <p>SHIPPING</p> <select style={{    "border": "1px solid rgba(0, 0, 0, 0.137)",
    "padding": "1.5vh 1vh",
    "margin-bottom": "4vh",
    "outline": "none",
    "width": "100%",
    "background-color": "rgb(247, 247, 247)"}}>
                                    <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                                </select>
                                <p>GIVE CODE</p> <input id="code" style={{    "border": "1px solid rgba(0, 0, 0, 0.137)",
    "padding": "1vh",
    "margin-bottom": "4vh",
    "outline": "none",
    "width": "100%",
    "background-color": "rgb(247, 247, 247)",    "background-image": "linear-gradient(to left, rgba(255, 255, 255, 0.253), rgba(255, 255, 255, 0.185)), url('https://img.icons8.com/small/16/000000/long-arrow-right.png')",
    "background-repeat": "no-repeat", "background-position-x": "95%", "background-position-y": "center"}} placeholder="Enter your code"/>
                            </Form>
                            <Row style={{"border-top": "1px solid rgba(0,0,0,.1)","padding": "2vh 0"}}>
                                <Col>TOTAL PRICE</Col>
                                <div className="text-right">&euro; 137.00</div>
                            </Row> 
                            <Button className="btn" style={{"background-color": "#000", "border-color": "#000",
    "color": "white",
    "width": "100%",
    "font-size": "0.7rem",
    "margin-top": "4vh",
    "padding": "1vh",
    "border-radius": "0"}}>CHECKOUT</Button>
                        </Col>
                    </Row>
                </Card>
            
                            </Container>
                            </>
        );
    };
};



