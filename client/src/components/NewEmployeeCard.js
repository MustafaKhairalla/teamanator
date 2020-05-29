import React from "react";
import faker from "faker";

const NewEmployeeCard = (props) => {

    // const users=[
    //     {
    //       id: 1,
    //       name: "SpongeBob",
    //       title: "Fry Cook",
    //      location: "A Pineapple Under the Sea"
    //     },
    //     {
    //         id: 2,
    //         name: "SpongeBob",
    //         title: "Fry Cook",
    //        location: "A Pineapple Under the Sea"
    //     },
    //     {
    //         id: 3,
    //         name: "SpongeBob",
    //         title: "Fry Cook",
    //        location: "A Pineapple Under the Sea"
    //     }
    //   ]

    return (
        <div className="teal card">
            <div className="content">
                <img alt="avatar" className="right floated mini ui image" src={faker.image.avatar()} />
                <div className="header">Name</div>
                {/* <div className="meta">
                    {/* <span>{props.department}</span><br></br> */}
                {/* <span>title</span> */}

                {/* </div>  */}

                <div className="description">

                    <i className="icon-envelope"></i>
                    {props.name}


                    <i className="phone icon"></i>
                phone 555

            </div>
            </div>

            <div className="ui secondary inverted segment">
                <button className="ui inverted olive button" onClick={() => {
                    // props.setEmployee({
                    //     name: props.name,
                    //     title:props.title,
                    //     location: props.location,
                    //     image: faker.image.avatar()

                    // })
                    // props.handleShow()

                }}>Show more info</button>

            </div>
        </div >

    )
}

export default NewEmployeeCard;