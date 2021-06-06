import React, { Component } from "react";
import {Container, Nav, CardDeck, Card, Button, Row, Col, Tab, Tabs, Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create a season ticket
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
  <Form.Group >
    <Form.Control type="name" className="m-1" placeholder="Name" />
    <Form.Control type="name" className="m-1" placeholder="Description" />
    <Form.Control type="name" className="m-1" placeholder="Deadline" />
    <Form.Control type="name" className="m-1" placeholder="Price" />
  </Form.Group>
  <center><Button variant="primary" type="submit">
    Add data
  </Button></center>
</Form>
        </Modal.Body>
      </Modal>
    );
  }
export default function Admin() {
    
const [modalShow, setModalShow] = React.useState(false);
   return (
     <Container className="col-md-12 mb-10">
                 <h1 className="text-dark text-center">Admin Content</h1>
                 <Tab.Container id="left-tabs-example"  defaultActiveKey="first">
                    <Row>
                        <Col sm={2} >
                            <Nav variant="pills"className="flex-column mt-2" >
                                <Nav.Item >
                                    <Nav.Link eventKey="first"> Season tickets </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Users </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                <h3>Season tickets</h3>
                                <table className="table table-grey">
                                    <thead>
                                        <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Deadline</th>
                                        <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Standard</td>
                                            <td>Unlimited daily club membership</td>
                                            <td>1 month</td>
                                            <td>800</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Standard 2</td>
                                            <td>Unlimited daily club membership</td>
                                            <td>3 month</td>
                                            <td>1200</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>All inclusive</td>
                                            <td>Unlimited club access all day</td>
                                            <td>2 month</td>
                                            <td>1345</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Standard 3</td>
                                            <td>Unlimited daily club membership</td>
                                            <td>6 month</td>
                                            <td>3200</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    <Button variant="success" className="m-2 mb-20" onClick={() => setModalShow(true)}>create</Button>
                                    <Button variant="success" className="m-2" onClick={() => setModalShow(true)}> delete</Button>
                                    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
       
                                

                                </Tab.Pane>
 

                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="second" >
                                <h3>USERS</h3>
                                <table className="table table-grey">
                                    <thead>
                                        <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>admin1</td>
                                            <td>Main Admin</td>
                                            <td>admin@mail.ru</td>
                                            <td>88888888888</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>veronika</td>
                                            <td>Oksina Veronika</td>
                                            <td>veronika_oksina@mail.ru</td>
                                            <td>89005886223</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>dima</td>
                                            <td>Ivanov Dmitriy</td>
                                            <td>dima@gmail.com</td>
                                            <td>89066699985</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </Tab.Pane>
 

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

     </Container>
   );
 }


/*
                <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>
    </table>



















    
<Container>
<Tab.Container id="left-tabs-example"  defaultActiveKey="first">
    <Row>
        <Col sm={2} >
            <Nav variant="pills"className="flex-column mt-2" >
                <Nav.Item >
                    <Nav.Link eventKey="first"> Users </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second"> Season Tickets </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third"> Halls </Nav.Link>
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
    
            </Tab.Content>
        </Col>
    </Row>
</Tab.Container>
</Container>
*/










/*
  <Row>
            <Card style={{"width":"40%", "border-color":"#c3c3c3", "background":"#f7f7f7", "border-radius": "15px",  "box-shadow": "0px 10px 10px rgb(0 0 0 / 30%)"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Season Tickets</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <center><Button variant="primary" href={"/seasontickets"}>Enter</Button></center>
            </Card.Body>
            </Card>
            <Card style={{"width":"40%", "border-color":"#c3c3c3", "background":"#f7f7f7", "border-radius": "15px",  "box-shadow": "0px 10px 10px rgb(0 0 0 / 30%)"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Users</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <center><Button variant="primary">Enter</Button></center>
            </Card.Body>
            </Card>
        </Row>
        */

/*
export const all = async () => {
  return new Promise((resolve, reject) => {
    Connection.query("SELECT * FROM availability", (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

export default {
  all
};
export default class Admin extends Component {
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
     <Container className="col-md-12">
                 <h1 className="text-primary text-center">Current Availability</h1>
                 <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Queue</th>
          <th scope="col">CallDate</th>
          <th scope="col">TimeStart</th>
          <th scope="col">SecsFromMidnight</th>
          <th scope="col">TimeEnd</th>
          <th scope="col">EndSeconds</th>
          <th scope="col">TimeSlotCapacity</th>
          <th scope="col">Available</th>
          <th scope="col">Pending</th>
          <th scope="col">CallsCommitted</th>
        </tr>
      </thead>
      <tbody>
        {this.state.availabilities.map(availability => {
          return (
            <tr>
              <td>{availability.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
      
     </Container>
   );
 }
}
export interface IAppState {
    availabilities: Array<{
      id: string;
      queue: string;
      call_date: string;
      time_start: string;
      start_seconds_from_midnight: string;
      time_end: string;
      end_seconds_from_midnight: string;
      timeslot_capacity: string;
      available: string;
      pending: string;
      calls_committed: string;
    }>;
  }
  */