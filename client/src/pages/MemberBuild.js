import React, { useState } from "react";


import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import { Link } from "react-router-dom";

const MemberBuild = (props) => {

    const { location = {} } = props; // ask Pablo !!!
    const { template, setTemplate } = location // ask
    const [saving, setSaving] = useState(false);
    const [user, setUser] = useState({
        // template: "",
        user_id: "",
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "",
        field7: ""


    }); // going to database 

    console.log({ user, template })
    const [userCount, setUserCount] = useState([{
        title: "",
        count: 0,
        isVisible: false
    }]);

    async function saveToDatabase(data) {
        console.log("Title: " + template.title);
        console.log("users: ");
        console.log(template.users);

        var routeSelect = template.title; 
        await API.createFitnessCard(template.users);
        
        // setSaving(true)
        // const res = await axio.post ("api/save", data)
        // if ( res.data.sucess === true) history.psush
        // else show a message with an error


    }
    function handleInputChange(event) {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setUserCount([...userCount, {
            title: user.field1,
            // count: userCount.length,
            isVisible: true

        }])
        console.log("button works")
        user.user_id = template.users.length;
        // setUser({ ...user, user_id: template.users.length })
        // setTemplate({ ...template, users: [...template.users, user] })
        console.log('Template: ', template)
        template.users.push(user)
        setUser({

            field1: "",
            field2: "",
            field3: "",
            field4: "",
            field5: "",
            field6: "",
            field7: ""

        }
        )
        console.log({ e })


    }

    return (
        <Container>
            <br></br>
            <Row>
                <Col md={3}>
                    <h1>Step 2</h1>
                </Col>

                <Col md={2}>
                </Col>

                <Col md={7}>
                    <h2>Build your {template.config.title} team</h2>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={3}>
                    <div class="ui  inverted segment">
                        <h2 class="ui header">Your Team</h2>
                        <div class="ui clearing divider"></div>
                        <div>
                            <img style={{ width: '15rem' }} src={`${template.config.image}`} alt="newimg" />

                        </div>
                        <div>
                            <ul>

                                {userCount.map(u => (

                                    <li>
                                        {u.isVisible ? (
                                            <span>
                                                <strong>{u.title} </strong>


                                                <img src="https://res.cloudinary.com/dddtjci2s/image/upload/v1589579232/check_mark_cze4om.png" style={{ width: "1.5rem", visibility: "visible", marginLeft: "0.5rem" }} alt="" />

                                            </span>
                                        ) : (<h9></h9>)}

                                    </li>
                                ))}


                            </ul>

                        </div>
                    </div>


                </Col>
                <Col md={7}>
                    <div className="ui inverted segment">
                        <form className="ui  form " style={{ marginLeft: "100px" }}>
                            <div className="ui  inverted segment">
                                <div className="ui inverted form">

                                    <div className="twelve wide field">
                                        <label >{template.config.field[0]}</label>
                                        <input
                                            name="field1"
                                            value={user.field1}
                                            onChange={handleInputChange}
                                            placeholder={template.config.field[0]} type="text" />
                                    </div>
                                    <div className="twelve wide field">
                                        <label className="mr-2 ml-2">{template.config.field[1]}</label>
                                        <input
                                            name="field2"
                                            value={user.field2}
                                            onChange={handleInputChange}
                                            placeholder={template.config.field[1]} type="text" />
                                    </div>
                                    <div className="twelve wide field">
                                        <label>{template.config.field[2]}</label>
                                        <input
                                            name="field3"
                                            value={user.field3}
                                            onChange={handleInputChange}
                                            placeholder={template.config.field[2]} type="text" />
                                    </div>
                                    <div className="twelve wide field">
                                        <label>{template.config.field[3]}</label>
                                        <input
                                            name="field4"
                                            value={user.field5}
                                            onChange={handleInputChange}
                                            placeholder={template.config.field[3]} type="text" />
                                    </div>
                                    <div className="twelve wide field">
                                        <label>{template.config.field[4]}</label>
                                        <input
                                            name="field5"
                                            value={user.field5}
                                            onChange={handleInputChange}
                                            placeholder={template.config.field[4]} type="text" />
                                    </div>
                                    <div className="twelve wide field">
                                        <label>{template.config.field[5]}</label>
                                        <input
                                            name="field6"
                                            value={user.field6}
                                            onChange={handleInputChange}
                                            placeholder={template.config.field[5]} type="text" />
                                    </div>
                                    <div className="twelve wide field">
                                        <label>{template.config.field[6]}</label>
                                        <input
                                            name="field7"
                                            value={user.field7}
                                            onChange={handleInputChange}
                                            placeholder={template.config.field[6]} type="text" />
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
                    </div>


                </Col>
            </Row>
            <br></br>
            <row>
                <button
                    onClick={() => saveToDatabase(template)} //change to API call
                    className="ui right floated green button"><Link to="/mydashboard">Finish</Link>
                 </button>
            </row>
        </Container>
    )
}

export default MemberBuild;