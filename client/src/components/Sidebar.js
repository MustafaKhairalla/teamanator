import React, { useState, useContext} from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { Button as SemButton, Header, Image, Modal as SemModal } from 'semantic-ui-react'
import { HeaderStyle } from '../style/index.js';
import DashCalendar from './DashCalendar';
import LoginContext from "../utils/LoginContext";


function Sidebar(props) {
    const login = useContext(LoginContext);
    console.log(props.name.firstName); 
    const getInfo = props.currentUser;
    const [users, setUsers] = useState({
        user_id: "",
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "",
        field7: ""
    });

    const [events, setEvents] = useState({
        title: "",
        date: "",
        time: "",
        location: ""
    })

    const [show, setShow] = useState(false);

    const handleCloseEmployee = () => setShow(false);
    const handleShowEmployee = () => setShow(true);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUsers({ ...users, [name]: value })
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        // to pass template from MemberBuild.js
        // update template and save to database


    }

    return (
        <HeaderStyle>
<<<<<<< HEAD
            <section id="slide-out" className="invisible-top">
                <ul id="side-content">
                    <h5 id="dashboardTitle" className="text-center">My Dashboard</h5>
                    <img id="profile-img" src="../images/EmployeeCardImage.jpg" alt="profile" />
                    <hr />
                    <h5 id="welcome-side">WELCOME, {props.mainName} </h5>
                    <br />
                    <SemButton id="SemButton" fluid color="blue" compact onClick={handleShowEmployee} block>Add New Employee</SemButton>
=======
        <section id="slide-out" className="invisible-top">
            <ul id="side-content">
                <h5 id="dashboardTitle"className="text-center">My Dashboard</h5>
                <img id="profile-img" src="../images/EmployeeCardImage.jpg" alt="profile" />
                <hr />
                <h5 id="welcome-side">Welcome, {props.name.firstName} {props.name.lastName}</h5>
                <br />
                <SemButton id="SemButton" fluid color="blue" compact onClick={handleShowEmployee} block>Add New Employee</SemButton>

                <SemButton id="SemButton" fluid color="blue" compact block>Remove Employee</SemButton>

                <SemModal trigger={<SemButton id="SemButton" fluid compact color="blue" class="ui button"block>Add Upcoming Event</SemButton>}>
                    {/* <SemModal.Header>Add an Event</SemModal.Header> */}
                    <SemModal.Description>
                        <Header>Add an Event</Header>
                        <Form.Group>
>>>>>>> f85047e292c66051721e7eedbfe165666bfe91c7

                    <SemButton id="SemButton" fluid color="blue" compact block>Remove Employee</SemButton>

                    <SemModal trigger={<SemButton id="SemButton" fluid compact color="blue" class="ui button" block>Add Upcoming Event</SemButton>}>
                        {/* <SemModal.Header>Add an Event</SemModal.Header> */}
                        <SemModal.Description>
                            <Header>Add an Event</Header>
                            <Form.Group>

                            </Form.Group>

                        </SemModal.Description>
                    </SemModal>

                    <SemButton id="SemButton" compact fluid color="red" block >Sign Out</SemButton>
                    <hr />
                    <br />
                    <DashCalendar />
                </ul>

                <Modal show={show} onHide={handleCloseEmployee}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Row>
                                <Form.Label column="sm" lg={2}>
                                    Name
                        </Form.Label>
                                <Col>
                                    <Form.Control
                                        name="field1"
                                        value={users.field1}
                                        onChange={handleInputChange}
                                        size="sm"
                                        type="text"
                                        placeholder="Enter Name" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column="sm" lg={2}>
                                    Title
                        </Form.Label>
                                <Col>
                                    <Form.Control
                                        name="field2"
                                        value={users.field2}
                                        onChange={handleInputChange}
                                        size="sm"
                                        type="text"
                                        placeholder="Enter Title / Position" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column="sm" lg={2}>
                                    Salary
                        </Form.Label>
                                <Col>
                                    <Form.Control
                                        name="salary"
                                        value={users.field3}
                                        onChange={handleInputChange}
                                        size="sm"
                                        type="text"
                                        placeholder="Enter Salary" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column="sm" lg={2}>
                                    Department
                        </Form.Label>
                                <Col>
                                    <Form.Control
                                        name="department"
                                        value={users.field4}
                                        onChange={handleInputChange}
                                        size="sm"
                                        type="text"
                                        placeholder="Enter Department Location" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column="sm" lg={2}>
                                    Phone Number
                        </Form.Label>
                                <Col>
                                    <Form.Control
                                        name="phone"
                                        value={users.field5}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Enter Best Phone Number" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column="sm" lg={2}>
                                    Email
                        </Form.Label>
                                <Col>
                                    <Form.Control
                                        name="email"
                                        value={users.field6}
                                        onChange={handleInputChange}
                                        size="sm"
                                        type="text"
                                        placeholder="Enter Email" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column="sm" lg={2}>
                                    Address / Location
                        </Form.Label>
                                <Col>
                                    <Form.Control
                                        name="address"
                                        value={users.field7}
                                        onChange={handleInputChange}
                                        size="sm"
                                        type="text"
                                        placeholder="Enter Employee's Location" />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseEmployee}>
                            Close
            </Button>
                        <Button variant="secondary" onClick={handleFormSubmit}>
                            Save Changes
            </Button>
                    </Modal.Footer>
                </Modal>





            </section>
        </HeaderStyle>
    )
};

export default Sidebar;