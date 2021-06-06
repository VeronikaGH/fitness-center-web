import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import slide1 from "../assets/slide5.jpg";
import slide4 from "../assets/slide4.jpg";
import slide3 from "../assets/slide3.jpg";

export default class Slider extends Component{
    render(){
    return (
        <Carousel fade nextLabel="" prevLabel="">
            <Carousel.Item >
                <img className="d-block w-100" style={{"width":"auto"}}src={slide4} alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide3} style={{"width":"auto"}}alt="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide1} style={{"width":"auto"}}alt="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  } 
}