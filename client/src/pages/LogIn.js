 import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import {Container,Row, Jumbotron, Button, Form, Input, FormGroup, Label} from "reactstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function LogIn () { 
    return (
            <div className = "app">
                <Header></Header>
                    <Container>
                        <Jumbotron fluid>
                            <Row>
                                <Form className ="text-center">
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="email" />
                                    </FormGroup>
                                    <Button  onClick><Link to="/template">LogIn</Link></Button>
                                </Form>
                            </Row>
                        </Jumbotron>
                    </Container>
                <Footer></Footer>
            </div>

)
}

export default LogIn