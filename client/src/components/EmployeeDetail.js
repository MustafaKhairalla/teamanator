
import React from 'react';
// import '../style/employeedetail.css';
import { useState } from 'react';
import {
    Card, Form, Button, ListGroup, FormGroup, Input, ListGroupItem, CardTitle, CardText, CardBody
  } from 'reactstrap';
import { Modal } from 'react-bootstrap';

function EmployeeDetail(props){
    const [show, setShow] = useState(false);

    const handleHideDetail = () => setShow(false)
    const handleShowDetail = () => setShow(true)


        return (
            <ListGroupItem>
                <Button value={props.employees} onClick={handleShowDetail}>
                <p>{props.employees.name}</p>
                </Button>

                <Modal show={show} onHide={handleHideDetail}>
                <h1>{}</h1>

                </Modal>
            </ListGroupItem>
        );
    };

export default EmployeeDetail;