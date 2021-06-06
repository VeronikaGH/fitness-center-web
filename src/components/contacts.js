import React, { Component } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import UserService from "../services/user.service";
import MyMap from "../components/map";
import "./style.css";

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
        response => {
            this.setState({
            content: response.data
            });
        },
        error => {
            this.setState({
            content:
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
            });
        }
        );
    }

    render() {
        return (
        <Container>
            <h1 className="text-dark text-center">Contacts</h1>
            <Row>
            <Col>                 
                <Card style={{"width": "400px", "border-color":"#c3c3c3", "background":"#fff", "border-radius": "15px",  "box-shadow": "0px 10px 10px rgb(0 0 0 / 30%)"}}>
                    <h1 className="text-center m-2">Contact us</h1>
                    <Row className="text-center">
          

                    <svg  width="15" height="15" fill="currentColor" class="bi bi-geo-alt m-1" viewBox="0 0 16 16" style={{"border":"1px", "border-color":"#343a40"}}>
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>

                    <p>Russia, Vladimir, Mira street, 34</p>
               </Row>
                <Row className="text-center">
        
                    <svg width="15" height="15" fill="currentColor" class="bi bi-telephone m-1" viewBox="0 0 16 16" style={{"border":"1px", "border-color":"#343a40"}}>
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <p>+7(900)555-22-44</p>
                </Row>
                <Row className="text-center">
           
                    <svg width="20" height="20" fill="currentColor" className="bi bi-envelope mt-1" viewBox="0 0 20 20" style={{"border":"1px", "border-color":"#343a40"}}>
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg> 
                    <p>fitness_club@gmail.com</p>
              
                </Row>
                    </Card>
            </Col>
            <Col lg="7" className="mt-5">
                <MyMap/>

            </Col>
            </Row>
        </Container>
        );
    }
}

/*
<Form.Group controlId="formBasicEmail" className="m-3">
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>
                            We`ll never share your email with anyone else
                        </Form.Text>
                    </Form.Group >
                    <Form.Group controlId="formBasicPassword"className="m-3"variant="dark">
                        <Form.Control as="textarea" placeholder="Text" rows="3"/>
                        <Form.Check className="color-dark" variant="dark" type="checkbox" label="Check me out" />
                    </Form.Group>
                    <center><Button variant="outline-secondary" type="submit">Submit</Button></center>
                    </Card>*</Container>*/