import {
  Card, Form, Button, ListGroup, FormGroup, Input, ListGroupItem, CardTitle, CardText, CardBody
} from 'reactstrap';
import React from 'react';
import EmployeeDetail from './EmployeeDetail';

function Employeecard(props) {
    return (

        <Card className="scroll">
            <CardBody>
                <CardTitle>My Employees</CardTitle>
                <CardText>
                    {/* <Form>
                        <FormGroup>
                            <Input type="title" id="eventTitle" name="title" placeholder="Event Title"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="body" name="body" id="eventDescription" placeholder="Event Description"></Input>
                        </FormGroup>
                    </Form>
                        <Button type="submit" id="eventAdd">Add</Button> */}
                    <ListGroup>
                        {/* <ListGroupItem> <EmployeeDetail/> </ListGroupItem> */}
                        {props.employees.map(emp => (
                            <EmployeeDetail emp={emp} />
                        ))}
                        
                    </ListGroup>
                </CardText>
            </CardBody>
        </Card>
    )
                
};

export default Employeecard;