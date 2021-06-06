import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar, Nav, FormControl, Container, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo1.png";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home";
import Footer from "./components/footer";
import About from "./components/about";
import Contacts from "./components/contacts";
import Account from "./components/account";
import Shop from "./components/shop";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import Admin from "./components/admin";
import AddTicket from "./components/admin";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      showUserBoard: true,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showUserBoard: user.roles.includes("ROLE_USER")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showUserBoard, showAdminBoard } = this.state;

    return (
      <div>
        <Navbar className="justify-content-between expand-lg navbar-dark bg-dark " collapseOnSelect>
            <Container className="">
                <Navbar.Brand href="/" className="col">
                    <img src={logo} height="40" width="45" className="d-inline-block p-1" alt="Logo"/> 
                    <text>Fitness Club</text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto col d-flex justify-content-around ">
                        <Nav.Link href="/" > Home </Nav.Link> 
                        <Nav.Link href="/about"> About us </Nav.Link>
                        <Nav.Link href="/contacts"> Contacts </Nav.Link>
                        {showAdminBoard && (
                            <Nav.Link href={"/admin"}> Admin </Nav.Link>   
                        )}
                    </Nav>   
 
                    {currentUser ? (
                        <Nav className="ml-auto col d-flex  justify-content-end align-items-end ">
                          
                            <Button variant="outline-warning" className="m-2" href={"/account"} >Account</Button>
                            <Nav.Link href="/login" className="m-2" onClick={this.logOut}> LogOut </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className=" ml-auto col d-flex  justify-content-end align-items-end">
                            <Nav.Link href={"/login"} className="nav-link">Log in </Nav.Link>
                            <Nav.Link href={"/register"} className="nav-link"> Sign Up </Nav.Link>
                        </Nav>
            )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <Container className="mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path='/account' component={Account} />

            <Route path="/admin" component={Admin}/>
          </Switch>
        </Container>
        
        <Footer/>
      </div>
    );
  }
}

export default App;

/*
                            <Button variant="outline-warning" className="mt-2 mb-2" href="/account">
                              <Nav.Link href={"/profile"} className="nav-link" color="warning">Account</Nav.Link>
                            </Button>



                   <Nav className="col d-flex  justify-content-end align-items-end">
                        <Button variant="outline-warning" className="m-2" href="/login"onClick={login}>Log in</Button>
                        <Button variant="outline-warning" className="m-2" href="/account" onClick={account}>Account</Button>
                    </Nav>
*/
/*

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

<Route path="/mod" component={BoardModerator} />
*/
/*
   <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>



            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />

            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
      */