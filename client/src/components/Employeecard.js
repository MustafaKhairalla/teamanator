import {
  Card, ListGroup, ListGroupItem, CardTitle, CardText, CardBody
} from 'reactstrap';
import React from 'react';
import EmployeeDetail from './EmployeeDetail';

function Employeecard() {
    return (

        <Card className="scroll">
            <CardBody>
                <CardTitle>My Employees</CardTitle>
                <CardText>
                    <ListGroup>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                    </ListGroup>
                </CardText>
            </CardBody>
        </Card>
    )
                
};

export default Employeecard;