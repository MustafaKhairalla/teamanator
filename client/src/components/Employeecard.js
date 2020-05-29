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


                    {/* <ListGroup>
                        
                        {props.employees.map(employees => (
                            <EmployeeDetail employees={employees} />
                        ))}
                        
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