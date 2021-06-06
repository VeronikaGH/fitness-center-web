import React, { Component } from "react";
import {Container, Tab, Nav, Row, Col, Card, CardDeck} from "react-bootstrap";

import img1 from "../assets/bg2.jpg";
import img2 from "../assets/bg3.jpg";
import img3 from "../assets/bg4.jpg";
import box from "../assets/t1.jpg";
import tbox from "../assets/t2.jpg";
import mix from "../assets/t4.jpg";
import self from "../assets/t3.jpg";

export default class About extends Component {
    render() {
        return(
            <Container>
                <h1 className="text-dark text-center">About us</h1>
                <Tab.Container id="left-tabs-example"  defaultActiveKey="first">
                    <Row>
                        <Col sm={2} >
                            <Nav variant="pills"className="flex-column mt-2" >
                                <Nav.Item >
                                    <Nav.Link eventKey="first"> GYM </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> CROSSFIT </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> GROUP CLASSES </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth"> FIGHT CLUB </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                    <Row className="m-3">
                                        <Col className="3"><img src={img1} height="250px" width="auto" /></Col>
                                        <Col> 
                                        <h1 className="text-center">GYM</h1>
                                            <h5>The gym areas of the fitness club network "Fitness":</h5>
                                            <ul>
                                                <li>Modern simulators, simple and safe</li>
                                                <li>Functional equipment to provide a full range of exercises</li>
                                                <li>The latest ventilation system for maximum comfort during training</li>
                                                <li>Services of qualified trainers - with the selection of a training program and technical support to eliminate the risk of injuries</li>
                                                <li>A subscription system that provides a pleasant price level against the background of the first-class service of our club</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className="m-3">
                                        <Col className="3"><img src={img2} height="250px" width="auto"/></Col>
                                        <Col> 
                                        <h1 className="text-center">CROSSFIT</h1>
                                            <h5>Cross training / FIT Cross in "Fitness":</h5>
                                            <ul>
                                                <li>Well-balanced system of mixed loads</li>
                                                <li>A fitness program that is suitable for everyone, regardless of age and level of athletic training</li>
                                                <li>A combination of such sports as: running, rowing (on special rowing machines), jumping (with a rope or on obstacles), climbing on a rope, working with free weights (dumbbells, kettlebells, barbells), exercises on rings. This is a sport for those who want to get in good physical shape, strengthen the health and endurance of the body</li>
                                                <li>Support of the trainer, competent performance of exercises without harm to health</li>
                                                <li>The competitive and friendly atmosphere of the group encourages you to reach new heights</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className="m-3">
                                        <Col className="3"><img src={img3} height="250px" width="auto"/></Col>
                                        <Col> 
                                        <h1 className="text-center">GROUP CLASSES</h1>
                                            <h5>"Fitness" group programs are:</h5>
                                            <ul>
                                                <li>Excellent physical condition and excellent company of like-minded people. Nothing is more stimulating for active physical activity than group training. This is an indescribable powerful energy and a charge of positive emotions!</li>
                                                <li>More than 10 types of group training (interval training, abs & sag training, strength classes, Yoga, Pilates, stretching, Zumba, etc.)</li>
                                                <li>Flexible training schedule – you can choose a convenient time for training</li>
                                                <li>The most popular group programs in the world</li>
                                                <li>Affordable prices</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row className="m-3">
                                        <h1 className="text-center">FIGHT CLUB</h1>
                                        <ul>
                                            <li>The zone of training of fighting skills of Pride Fitness is 4 types of martial arts for adults and 3 types for children: SAMBO, KUDO, TAEKWONDO.</li>
                                            <li>Classes in the club are suitable for both trained participants and beginners.</li>
                                            <li>Everyone who wants to master new sports skills, regardless of the level of training and physical fitness, is invited to become a member of the Fitness martial arts club!</li>
                                        </ul>
                                        <CardDeck>
                                            <Row >
                                                <Col> 
                                                    <Card height="auto">
                                                        <Card.Img className="mt-5 p-3"variant="top" height="auto" width="auto"src={box}/>
                                                        <Card.Body>
                                                            <Card.Title className="text-center mt-3">Box</Card.Title>
                                                            <Card.Text>
                                                                A type of martial arts that combines traditional boxing techniques with general physical fitness.
                                                                Boxing training includes loads on the whole body. 
                                                                In terms of muscle development and fitness of the cardiovascular and respiratory systems, boxing is one of the leaders. The main qualities that this sport develops are endurance, speed, and coordination of movements.
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col> 
                                                    <Card height="auto">
                                                        <Card.Img className="mt-5 p-3"variant="top"  height="auto" width="auto"src={mix}/>
                                                        <Card.Body>
                                                            <Card.Title className="text-center mt-3">MIX Fight</Card.Title>
                                                            <Card.Text>
                                                                MIX Fight is a mixed martial arts class that combines the techniques of judo, sambo, muay thai, kickboxing and boxing.<br/>
                                                                Thanks to the combination of wrestling and striking techniques of the main types of martial arts, MIX Fight is an excellent means of self-defense, perfectly develops coordination and flexibility.
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row >
                                                <Col> 
                                                    <Card height="auto">
                                                        <Card.Img className="mt-5 p-3"variant="top" height="auto" width="auto"src={self}/>
                                                        <Card.Body>
                                                            <Card.Title className="text-center mt-3">Self-defense</Card.Title>
                                                            <Card.Text>
                                                                A unique system of training against street attacks. 
                                                                The realities of life show that there are no rules in this match, and automatism and knowledge of several techniques are often important.
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col> 
                                                    <Card height="auto">
                                                        <Card.Img className="mt-5 p-3"variant="top" height="auto" width="auto"src={tbox}/>
                                                        <Card.Body>
                                                            <Card.Title className="text-center mt-3">Thai boxing</Card.Title>
                                                            <Card.Text>
                                                                Thai boxing, or Muay Thai, is a Thai martial art derived from the ancient Thai martial art Muay Boran.
                                                                In modern Muay Thai, you can strike with your fists, feet, shins, elbows and knees — because of this, Muay Thai is called the "battle of the eight limbs".
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </CardDeck>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
