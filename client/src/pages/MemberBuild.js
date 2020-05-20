import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const MemberBuild = () => {

    const [user, setUser] = useState([{}]); // going to database 
    const [userCount, setUserCount] = useState([{
        title: "",
        count: 0,
        isVisible: false
    }]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setUserCount([...userCount, {
            title: "User",
            count: userCount.length,
            isVisible: true

        }])
        console.log("button works")

    }

    return (
        <Container>

            <Row>
                <Col md={3}>
                    <h1>Step 2</h1>
                </Col>

                <Col md={2}>
                </Col>

                <Col md={7}>
                    <h2>Build your team</h2>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={3}>
                    <ul>

                        {userCount.map(u => (

                            <li>
                                {u.isVisible ? (
                                    <span>
                                        <strong>{u.title} {u.count}</strong>


                                        <img src="https://res.cloudinary.com/dddtjci2s/image/upload/v1589579232/check_mark_cze4om.png" style={{ width: "1.5rem", visibility: "visible", marginLeft: "0.5rem" }} alt="" />

                                    </span>
                                ) : (<h9></h9>)}

                            </li>
                        ))}


                    </ul>
                </Col>
                <Col md={7}>
                    <form class="ui form">
                        <div className="ui inverted segment">
                            <div className="ui inverted form">
                                <div className="inline field">
                                    <label >First Name</label>
                                    <input placeholder="First Name" type="text" />
                                </div>
                                <div className="inline field">
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" type="text" />
                                </div>
                                <div className="inline field">
                                    <label>Department</label>
                                    <input placeholder="Department" type="text" />
                                </div>
                                <div className="inline field">
                                    <label>Location</label>
                                    <input placeholder="Location" type="text" />
                                </div>
                                <div className="inline field">
                                    <label>Salary</label>
                                    <input placeholder="Salary" type="text" />
                                </div>


                                <button className="ui inverted red button">
                                    Clear
                             </button>
                                <button className="ui submit inverted green button" type="submit"
                                    onClick={handleFormSubmit}
                                >
                                    Add
                             </button>
                            </div>
                        </div>
                    </form>

                </Col>
            </Row>
            <br></br>
            <row>
                <button className="ui right floated green button">
                <Link to="/mydashboard">Finish</Link>
                 </button>
            </row>
        </Container>
    )
}

export default MemberBuild;