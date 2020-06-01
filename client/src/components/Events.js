import React, { Component, useState, useEffect } from 'react';
import {
    Card, Form, FormGroup, Button, Input, Label, ListGroupItem, CardTitle, CardText, CardBody
} from 'reactstrap';

import Axios from "axios";

// import EventCard from './EventCard';

// class Events extends Component {

//     render() {
//         return (
//             <Card>
//                 <CardBody>
//                     <CardTitle>Upcoming Events</CardTitle>


//                 </CardBody>
//                 <div>
//                     {/* <EventCard /> */}
//                 </div>

//             </Card>
//         )
//     }
// };


const Events = (props) => {
    const eventProps = props.props.userId
    const [sucess, setSucess] = React.useState(false);
    const [err, setError] = React.useState({});
    const [notes, setNotes] = React.useState({
        owner: "",
        note: ""
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        
        setNotes({...notes, [name]: value}); 

    }

    const handleFormSubmit = async (e) => {
        setNotes({...notes, owner: eventProps})
        e.preventDefault();
        console.log(notes)

        Axios.post("/api/event/", notes)
            .then(res => {
                console.log(res); 
                if(err) setError(err);
                if(sucess) setSucess(true);
            }).catch((err) => {
                console.log("Note failed to create"); 
                console.log(err);
                setError(err); 
            })
    }
    // console.log("event props: " , eventProps)
    // setNotes({...notes, owner: eventProps}); 
    console.log("Notes: ", notes);
    return (
        <Card>
            <CardBody>
                <CardTitle>Upcoming Events</CardTitle>
                <div className="form-group">
                    <label className="control-label col-sm-2" for="eventNote">Event:</label>
                    <div className="col-sm-10">
                        <input value={notes.note} onChange={handleInputChange} name="note" type="text" className="form-control" id="fname" placeholder="Enter New Event" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10">
                        <button type="submit" id="register-submit" className="btn btn-default" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>

            </CardBody>
            <div>
                {/* <EventCard /> */}
            </div>

        </Card>
    )

}
export default Events;