import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import {HeaderStyle, LoginStyle} from '../style/index.js';
import Header from "../components/Header";

import { Col} from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

import LoginContext from "../utils/LoginContext";


function LogIn(props) {
    const [user, setUser] = React.useState({
            username: "",
            password: "",
            userId: false
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
            if (token === false){ 
                console.log("Login Error!");
            } else {
                setUser({...user, userId: token});
                console.log(user);
                props.setUser({...user, userId: token})
               
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
    console.log(user);
    if(user.userId    ) return (<Redirect to="/template"/>)
    return (
        <div className="app">
            	<HeaderStyle>
                    <Header />
		        </HeaderStyle>
                <LoginStyle>
                <div id="card-register" className="container contact-register">
	            <div className="row">
		            <div className="col-md-10 col3">
                        <Col md={3}>
                            <div className="contact-info">
                                <img className="img-register" src="https://img.icons8.com/ios/50/000000/login-rounded-right.png"/>
                                    <h3 id="welcome-text">WELCOME BACK!</h3>
                            </div>
                        </Col>
			            <Col md = {9}>
                            <div className="contact-form">
                            <div className="form-group">
                                <label className="control-label col-sm-5" for="email">Email:</label>
                                <div className="col-sm-10">
                                <input name="username" value={user.email} onChange={handleInputChange} id="exampleEmail" type="email" className="form-control" id="email" placeholder="Enter email" ></input>
                                </div>
                            </div>
                            <div className="form-group">
                                    <label className="control-label col-sm-5" for="password">Password:</label>
                                    <div className="col-sm-10">
                                    <input name="password" value={user.password} onChange={handleInputChange} id="examplePassword" placeholder="emailype=" className="form-control" id="password" placeholder="Enter password" name="password"></input>
                                    </div>
                                </div>	
                            </div>
                            <div className="form-group">        
                                <div className="col-sm-10">
                                    <button type="submit" id="register-submit" className="btn btn-default"  onClick={handleFormSubmit} >Submit</button>
                                </div>
                            </div>
                        </Col>
                    </div>	            
			    </div>
            </div>
         </LoginStyle>
    </div>

    )
}

export default LogIn