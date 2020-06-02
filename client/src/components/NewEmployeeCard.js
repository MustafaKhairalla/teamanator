import React from "react";
import faker from "faker";

const NewEmployeeCard = (props) => {

    return (
        <div className="teal card ">
            <div className="content ui inverted segment">
                <img alt="avatar" className="right floated mini ui image" src={props.image} />
                <div className="header">{props.field1}</div>

                <div className="description">

                    <i className="icon-envelope mr-1"></i>
                    {props.field6}
                    <i className="phone icon ml-1 mr-1"></i>
                    {props.field7}

                </div>
            </div>

            <div style={{ backgroundColor: "#3f3f3f" }} className="ui segment">
                <button className="ui inverted blue button" onClick={() => {
                    props.setMember({
                        field1: props.field1,
                        field2: props.field2,
                        field3: props.field3,
                        field4: props.field4,
                        field5: props.field5,
                        field6: props.field6,
                        field7: props.field7,
                        image: props.image,
                        typeOfTeam: props.typeOfTeam

                    })
                    props.handleShow()

                }}>Show more info</button>

            </div>
        </div >

    )
}

export default NewEmployeeCard;