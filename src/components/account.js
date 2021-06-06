import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Container, Form, Button, Row, Col, Card} from "react-bootstrap";
import AuthService from "../services/auth.service";

export default class Account extends Component {
  constructor(props) {
    super(props);

  this.state = {
    redirect: null,
    userReady: false,
    currentUser: { username: "" }
  };
}

componentDidMount() {
  const currentUser = AuthService.getCurrentUser();

  if (!currentUser) this.setState({ redirect: "/home" });
  this.setState({ currentUser: currentUser, userReady: true })
}

render() {
  if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  }

  const { currentUser } = this.state;

return(
  <Container classname="p-15 m-20">
    <h1 className="text-dark text-center">Account</h1>
      <Row classname="mb-30">
          <Col className="col-4 mb-3">
              <Card className="d-flex flex-direction-column" style={{"box-shadow": "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)", 
              "background-clip": "border-box", "border": "0 solid rgba(0,0,0,.125)", "border-radius": ".25rem", "position": "relative",
              "flex-direction": "column", "min-width": "0"," word-wrap": "break-word"}}>
                  <Card.Body >
                      <div className="d-flex flex-column align-items-center text-center">
                          <svg  width="90" height="90" fill="currentColor" class="bi bi-person-circle bg-grey" viewBox="0 0 16 16">
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                          </svg>
                          <div className="mt-3">
                              <h4><strong>{currentUser.username}</strong></h4>
                              <p className="text-secondary mb-1"></p>
                              <p className="text-muted font-size-sm mb-1">{currentUser.roles && currentUser.roles.map((id_Role, index) => <li key={index}>{id_Role}</li>)}</p>
                          </div>
                      </div>
                  </Card.Body>
              </Card>
          </Col>
          <Col className="col-8">
              <Card className="mb-3" style={{"box-shadow": "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)", 
              "background-clip": "border-box", "border": "0 solid rgba(0,0,0,.125)", "border-radius": ".25rem", "position": "relative",
              "flex-direction": "column", "min-width": "0"," word-wrap": "break-word"}}>
                  <Card.Body>
                      <Row>
                          <Col className="col-3"><h6 className="mb-0">Full Name</h6></Col>
                          <Col className="col-9 text-secondary">{currentUser.fullname}</Col>
                      </Row>
                      <hr/>
                      <Row>
                          <Col className="col-3"> <h6 className="mb-0">Email</h6> </Col>
                          <Col className="col-9 text-secondary"> {currentUser.email} </Col>
                      </Row>
                      <hr/>
                      <Row>
                          <Col className="col-3"> <h6 className="mb-0">Phone</h6> </Col>
                          <Col className="col-9 text-secondary"> {currentUser.phone} </Col>
                      </Row>
                      <hr/>
                  </Card.Body>
              </Card>
          </Col>
      </Row>
  </Container>
)
}    }