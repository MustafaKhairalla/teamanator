 import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import { Container, Row, Jumbotron, Button, Form, Input, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

function LogIn(props) {
    const [user, setUser] = React.useState({

    });

    function handleInputChange(event) {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value })
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const token = await Axios.post("api/users/login", user)
        console.log(token.data)
        //    props.setState({ userId: token.data})
    }

    return (
        <div className="app">
            <Navbar></Navbar>
            <Container>
                <Jumbotron fluid>
                    <Row>
                        <Form className="text-center">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="username"
                                    value={user.email}
                                    onChange={handleInputChange}
                                    id="exampleEmail" placeholder="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password"
                                    value={user.password}
                                    onChange={handleInputChange}
                                    id="examplePassword" placeholder="email" />
                            </FormGroup>
                            <Button
                                onClick={handleFormSubmit}
                            ><Link to="/template">LogIn</Link></Button>
                        </Form>
                    </Row>
                </Jumbotron>
            </Container>

        </div>

    )
}

export default LogIn