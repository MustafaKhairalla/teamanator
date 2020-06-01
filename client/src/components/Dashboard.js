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
    const [deleteMember, setDeleteMember] = useState(false)
    const [member, setMember] = useState({
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "",
        field7: "",
        image: "",
        typeOfTeam: ""
    })



    const handleClose = () => {
        setDeleteMember(false);
        setShow(false);
    };
    const handleShow = () => setShow(true);


    const handleDelete = (name) => {
        const filteredArray = dataBaseData.filter(member => member.field1 != name);
        console.log(filteredArray);
        setDataBaseData(filteredArray);
        setDeleteMember(true);
        setTimeout(() => {
            setShow(false)
            setDeleteMember(false);
        }, 1000)
    }

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
        console.log(typeOfTeam)


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
                                    <Events />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mr-0" >
                            <CardHolder>

                                {dataBaseData.map(e => {
                                    const { field1, field2, field3, field4, field5, field6, field7 } = e

                                    return (<NewEmployeeCard
                                        key={e._id}
                                        field1={field1}
                                        field2={field2}
                                        field3={field3}
                                        field4={field4}
                                        field5={field5}
                                        field6={field6}
                                        field7={field7}
                                        typeOfTeam={typeOfTeam}
                                        image={faker.image.avatar()}

                                        setMember={setMember}
                                        handleShow={handleShow}

                                    />)
                                })}

                                <Modal aria-labelledby="contained-modal-title-vcenter"
                                    centered show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            {member.field1}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body >
                                        <Container className="ui inverted segment">
                                            <Row >
                                                <Col md={4}>
                                                    <span >
                                                        <img src={member.image} alt={member.field1} />

                                                    </span>
                                                </Col>
                                                <Col md={8} >
                                                    <h6 > Name: {member.field1}</h6>
                                                    {
                                                        typeOfTeam === "Business" ? <>

                                                            <strong><h6 > Title: {member.field2}</h6></strong>
                                                            <h6 > Salary: {member.field3} </h6>
                                                            <h6 > Department:  {member.field4}</h6>
                                                            <h6 > Phone Number:  {member.field5}</h6>
                                                            <h6 > Email:  {member.field6}</h6>
                                                            <h6 > Address/ Location:  {member.field7}</h6>
                                                        </> :
                                                            null

                                                    }
                                                    {
                                                        typeOfTeam === "Sport" ? <>

                                                            <h6 > Age: {member.field2}</h6>
                                                            <h6 > Devision: {member.field3} </h6>
                                                            <h6 > Position: {member.field4}</h6>
                                                            <h6 > Phone Number: {member.field5}</h6>
                                                            <h6 > Email:  {member.field6}</h6>
                                                            <h6 > Address:  {member.field7}</h6>
                                                        </> :
                                                            null
                                                    }
                                                    {
                                                        typeOfTeam === "Education" ? <>

                                                            <h6 > Program: {member.field2}</h6>
                                                            <h6 > Tools/ Languages :{member.field3} </h6>
                                                            <h6 > Education Level: {member.field4}</h6>
                                                            <h6 > GPA: {member.field5}</h6>
                                                            <h6 > Phone Number:  {member.field6}</h6>
                                                            <h6 > Email:  {member.field7}</h6>
                                                        </> :
                                                            null
                                                    }
                                                    {
                                                        typeOfTeam === "Fitness" ? <>

                                                            <h6 > Age: {member.field2}</h6>
                                                            <h6 > Weight :{member.field3} </h6>
                                                            <h6 > Goal: {member.field4}</h6>
                                                            <h6 > Notes: {member.field5}</h6>
                                                            <h6 > Phone Number:  {member.field6}</h6>
                                                            <h6 > Email:  {member.field7}</h6>
                                                        </> :
                                                            null
                                                    }

                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Container>
                                            <div className="alert alert-danger mr-2 ml-2" role="alert" style={{ opacity: deleteMember ? 1 : 0 }}>
                                                This member has been deleted
                                            </div>
                                        </Container>
                                        <Button className="ui inverted green button" onClick={handleClose}>
                                            Close
                        </Button>
                                        <Button className="ui inverted red button" variant="danger" onClick={() => {
                                            // handleFire(employee.email)
                                            handleDelete(member.field1)

                                        }
                                        }>
                                            Delete Member
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