
import React from 'react';
// import '../style/employeedetail.css';
import { useState } from 'react';
import {
    ListGroup,  ListGroupItem
  } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import { Button, Card, Image } from 'semantic-ui-react'

function EmployeeDetail(props){
    const [show, setShow] = useState(false);

    const handleHideDetail = () => setShow(false)
    const handleShowDetail = () => setShow(true)


        return (
            <ListGroupItem>
                <Button value={props.employees} onClick={handleShowDetail}>
                <p>{props.employees.name}</p>
                </Button>

                <Modal id="employee-detail-pop" show={show} onHide={handleHideDetail}>
                    {/* <Card> */}
                        <Card.Content>
                            <Card.Header><h1>{props.employees.name}</h1></Card.Header>
                            <Card.Meta><h3>{props.employees.department}</h3></Card.Meta>
                            <Card.Meta><h4>{props.employees.title}</h4></Card.Meta>
                            <Card.Meta><h4>Salary: {props.employees.salary}</h4></Card.Meta>
                            <Card.Meta><h4>{props.employees.phone}</h4></Card.Meta>
                            <Card.Meta><h4>{props.employees.email}</h4></Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button onClick={handleHideDetail} basic color='green'>
                                Close
                            </Button>
                            <Button basic color='red'>
                                Remove Employee
                            </Button>
                            </div>
                        </Card.Content>
                    {/* </Card> */}

                </Modal>
            </ListGroupItem>
        );
    };

export default EmployeeDetail;