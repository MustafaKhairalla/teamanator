import React from "react";
import NewEmployeeCard from "../components/NewEmployeeCard";

const GetCardDiv = async (select, data, handleShow
) => {
    switch (select) {
        case "Bussines":
            const { Name, title } = data
            return (<NewEmployeeCard
                key={data._id}
                name={Name}
                title={title}
                // location={e.location}

                handleShow={handleShow}

            />)
            break;



    }
    return null;
};


export default GetCardDiv;

