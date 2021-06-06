import React, { Component } from "react";
import Slider from "../components/slider.component";
import FlipCards from "../components/flip-cards.component";
import UserService from "../services/user.service";

export default class Home extends Component {
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
        <div className="container">
            <h1 className="text-dark text-center">Home</h1>
            <Slider/>
            <FlipCards/>
        </div>
        );
    }
}

/*
<header className="jumbotron">
    {this.state.content}
</header>
*/