import React, { Component } from 'react';
import {
    Card, Form, FormGroup, Button, Input, Label, ListGroupItem, CardTitle, CardText, CardBody
} from 'reactstrap';
// import EventCard from './EventCard';

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            card: "",
        }
}

    handleSubmit = () => {
        console.log(this.state);


        
        
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value})
    }
    handleBodyChange = (e) => {
        this.setState({ body: e.target.value})
    }

    render() {
        return (
            <Card>
                    <CardBody>
                        <CardTitle>Add an Event</CardTitle>
                        <Form>
                            <FormGroup>
                                <Input type="title" id="eventTitle" name="title" placeholder="Event Title" value={this.state.title} onChange={this.handleTitleChange}></Input>
                                <Input type="body" name="body" id="eventDescription" placeholder="Event Description" onChange={this.handleBodyChange}></Input>
                            </FormGroup>
                        </Form>
                        <Button type="submit" id="eventAdd" onClick={this.handleSubmit}>Add</Button>
                    </CardBody>
                    <div>
                        {/* <EventCard /> */}
                    </div>
                
                </Card>
        )
    }
};

export default Events;