import React from "react";
import faker from "faker";

const NewEmployeeCard = (props) => {

    return (
        <div className="teal card">
            <div className="content">
                <img alt="avatar" className="right floated mini ui image" src={props.image} />
                <div className="header">{props.name}</div>

                <div className="description">

                    <i className="icon-envelope"></i>
                    {props.phoneNumber}


                    <i className="phone icon"></i>
                    {props.email}

                </div>
            </div>

            <div className="ui blue inverted segment">
                <button className="ui inverted white button" onClick={() => {
                    // props.setEmployee({
                    //     name: props.name,
                    //     title:props.title,
                    //     location: props.location,
                    //     image: faker.image.avatar()

                    // })
                    props.handleShow()

                }}>Show more info</button>

            </div>
        </div >

    )
}

export default NewEmployeeCard;