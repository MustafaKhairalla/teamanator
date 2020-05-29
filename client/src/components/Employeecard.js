import {

    Card, Form, Button, ListGroup, FormGroup, Input, ListGroupItem, CardTitle, CardText, CardBody

} from 'reactstrap';
import React from 'react';
import EmployeeDetail from './EmployeeDetail';
import { Feed } from 'semantic-ui-react';

function Employeecard(props) {
    return (

        <Card className="scroll">
            <CardBody>
                <CardTitle>My Employees</CardTitle>
                <CardText>
<<<<<<< HEAD
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
                        {/* <ListGroupItem> <EmployeeDetail/> </ListGroupItem>
                        {props.employees.map(emp => (
                            <EmployeeDetail emp={emp} />
                        ))} */}
=======


                    {/* <ListGroup>
                        
                        {props.employees.map(employees => (
                            <EmployeeDetail employees={employees} />
                        ))}
>>>>>>> cc8561ff3eee0946775c1e13602c2b3d32c18b98
                        
                    </ListGroup> */}
                    <Card.Content>
                        <Feed>
                            {props.employees.map(employees => (
                                <EmployeeDetail employees={employees} />
                            ))}

                        </Feed>
                    </Card.Content>

                </CardText>
            </CardBody>
        </Card>
    )

};

export default Employeecard;