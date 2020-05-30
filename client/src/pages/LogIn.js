import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Col, Row, Input, Form, FormGroup, Container, Jumbotron, Label, Button } from "reactstrap";
import { HeaderStyle, LoginStyle } from '../style/index.js';
import Header from "../components/Header";

// import { Col } from "reactstrap";
import { Redirect } from "react-router-dom";
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
                console.log(token);
                if (token === false) {
                    console.log("Login Error!");
                } else {

                    console.log(user);



                    props.setcurrentUser({ userId: token, user: res.data.user })
                    setLoginUser(res.data.user)

                }
            })
        // try {
        //     const token = await Axios.post("api/users/login", user);
        //     console.log(token.data)
        //     // setUser({ ...user, loginId: token.sucess });
        //     // return (<Redirect to={{pathname: "/template"}}/>);
        //     return (<Link to="/template"/>)
        // }   
        // catch (err) {
        //     console.log(err);
        //     return err;
        // }


        // console.log(user);
        //    props.setState({ userId: token.data})
    }
    // useEffect(()=>{

    // })
    console.log({ user, loginUser });
    if (loginUser && loginUser.typeOfTeam) return (<Redirect to="/mydashboard" />)
    if (loginUser && loginUser.userId) return (<Redirect to="/template" />)
    return (

        <LoginContext.Provider value={user.token}>
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
                                    onClick={handleFormSubmit}>
                                    {/* <Link to="/template">LogIn</Link> */}
                                    Login
                                </Button>
                            </Form>
                        </Row>
                    </Jumbotron>
                </Container>


            </div>
        </LoginContext.Provider  >


    )
}

export default LogIn