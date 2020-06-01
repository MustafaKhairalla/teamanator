import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import faker from "faker";
import API from "../utils/API";
import LoginContext from "../utils/LoginContext";
import GetCard from "../utils/getCard";




import { DashboardStyle } from '../style/index';
import Employeecard from './Employeecard';
import Todo from './Todo';
import DashCalendar from './DashCalendar';
import Header from './Header';
import Events from './Events';
import { Row, Col, Container, Button } from 'reactstrap';
import Footer from './Footer';
import Sidebar from './Sidebar';

import CardHolder from "./CardHolder";
import NewEmployeeCard from "./NewEmployeeCard";
import { Redirect } from 'react-router-dom';


function Dashboard(props) {

    const login = useContext(LoginContext);
    //console.log("userId:" + props.currentUser.userId);
    console.log(props.currentUser)

    const [show, setShow] = useState(false);
    const [dataBaseData, setDataBaseData] = useState([]);
    


    const users = [
        {
            id: 1,
            name: "SpongeBob",
            title: "Fry Cook",
            location: "A Pineapple Under the Sea"
        },
        {
            id: 2,
            name: "SpongeBob",
            title: "Fry Cook",
            location: "A Pineapple Under the Sea"
        },
        {
            id: 3,
            name: "SpongeBob",
            title: "Fry Cook",
            location: "A Pineapple Under the Sea"
        }
    ]

    // const [users, setUsers] = useState([{

    // }])

    const handleClose = () => {
        // setFiredMatch(false);
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const { user = {} } = props.currentUser;
    const { typeOfTeam = '' } = user
    console.log("---------")
    console.log({ typeOfTeam, user })
    useEffect(async () => {
        // console.log("use effect runs")
        if (!props.currentUser || !props.currentUser.userId) return


        console.log(typeOfTeam)
        const gettingData = await GetCard(typeOfTeam, props.currentUser.userId);
        if (gettingData && gettingData.data) setDataBaseData(gettingData.data);

        //   const data = await API.getBusinessCardsByOwner(props.currentUser.userId)



        console.log(gettingData)


    }, [typeOfTeam])


    console.log(dataBaseData)
    if (!props.currentUser || !props.currentUser.userId) return <Redirect to="/login" />
    return (
        <DashboardStyle>
            <Header />


            <Sidebar name={props.currentUser.user} />

            <div className="container-main">
                <Container>
                    <Row>
                        <Col>
                            <Todo />
                            <br />
                            <Row>
                                <Col>
                                    <Events props={props.currentUser}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mr-0" >
                            <CardHolder>

                                {dataBaseData.map(e => {


                                    const { Name, phoneNumber, email } = e

                                    return (<NewEmployeeCard
                                        key={e._id}
                                        name={Name}
                                        phoneNumber={phoneNumber}
                                        email={email}
                                        image={faker.image.avatar()}
                                        // location={e.location}

                                        handleShow={handleShow}

                                    />)
                                })}

                                <Modal aria-labelledby="contained-modal-title-vcenter"
                                    centered show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className="ui yellow">{users.name}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row >
                                                <Col md={4}>
                                                    <span >
                                                        <img src={faker.image.avatar()} alt={users.name} />

                                                    </span>
                                                </Col>
                                                <Col md={8}>
                                                    <h6 > Location: {users.location}</h6>
                                                    {/* <h6 > Email: {employee.email}</h6> */}
                                                    <h6 > Mobile: </h6>
                                                    <h6 > Department: </h6>
                                                    <h6 > Salary:  $ }</h6>
                                                    <h6 > Title:  {users.title}</h6>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Container>
                                            {/* <div className="alert alert-danger mr-2 ml-2" role="alert" style={{ opacity: firedMatch ? 1 : 0 }}>
                                                This employee has been fired
                                            </div> */}
                                        </Container>
                                        <Button className="ui inverted green button" onClick={handleClose}>
                                            Close
                        </Button>
                                        <Button className="ui inverted red button" variant="danger" onClick={() => {
                                            // handleFire(employee.email)
                                            // console.log(employee.email)
                                        }
                                        }>
                                            Fire Employee
                        </Button>

                                    </Modal.Footer>
                                </Modal>







                            </CardHolder>

                        </Col>
                    </Row>
                </Container>

                {/* <Container>



                    <Col style={{ backgroundColor: "#3f3f3f", margin: "20px" }}>
                        <CardHolder>
                            {users.map(e => (
                                <NewEmployeeCard
                                    key={e.id}
                                    name={e.name}
                                    title={e.title}
                                    location={e.location}

                                />
                            ))}
                            {/* <Employeecard /> */}
                {/* </CardHolder> */}

                {/* </Col> */}



            </div >
            <Footer />
        </DashboardStyle >

    )
};

export default Dashboard;