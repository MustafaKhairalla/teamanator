
import React, { useEffect } from "react";
import { HeaderStyle, LoginStyle } from '../style/index.js';
import Header from "../components/Header";
import { Col, Row, Input, Form, FormGroup, Container, Jumbotron, Label, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

import LoginContext from "../utils/LoginContext";


function LogIn(props) {
    const [user, setUser] = React.useState({
        username: "",
        password: "",
        userId: false
    });

    const [loginUser, setLoginUser] = React.useState({

    });
    function handleInputChange(event) {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value })
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        Axios.post("api/users/login", user)
            .then(res => {

                const token = res.data.sucess;
                console.log("token , userId:")
                console.log(token);
                if (token === false) {
                    console.log("Login Error!");
                } else {
                    setUser({ ...user, userId: token });
                    console.log(user);
                    props.setcurrentUser({ userId: token, user: res.data.user })
                    setLoginUser(res.data.user)

                }
            })
      
    }
 
    console.log({ user, loginUser });
    if (loginUser && loginUser.typeOfTeam) return (<Redirect to="/mydashboard" />)

    if (loginUser && loginUser._id) return (<Redirect to="/template" />)

    return (
    
        <LoginContext.Provider value={user.token}>
            <div className="app">

                <LoginStyle>
                    <Header></Header>
                    <br />
                    <br />
                    <br />
                    <Container id="loginContainer">
                        <div class="card" id="loginCard">
                            <Row>
                                <Col md={4}>
                                    <Form >
                                        <img className="img-register" src="https://img.icons8.com/ios/50/000000/login-rounded-right.png" />
                                        <br />
                                        <br />
                                        <h3 id="welcome-text">WELCOME BACK!</h3>
                                        <h4></h4>
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
                                                id="examplePassword" placeholder="password" />
                                        </FormGroup>
                                        <Button
                                            onClick={handleFormSubmit}>
                                            {/* <Link to="/template">LogIn</Link> */}
                                        Login
                                    </Button>
                                    </Form>
                                </Col>
                                <Col md={5}></Col>
                            </Row>
                        </div>
                    </Container>
                </LoginStyle>
            </div>
        </LoginContext.Provider>
    )
}

export default LogIn