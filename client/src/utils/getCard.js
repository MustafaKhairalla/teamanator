import API from "./API";

const GetCard = (select, id
) => {
    switch (select) {
        case "Business":
            API.getBusinessCardsByOwner(id)
                .then(data => {
                    // console.log(props.currentUser.userId);
                    // console.log(data)
                    return data;
                });;
            break;

        case "Education":
            API.getEducationCardsByOwner(id);
            break;

        case "Fitness":
            API.getFitnessCardsByOwner(id);
            break;

        case "Sport":
            API.getSportCardsByOwner(id);
            break;

    }
};


export default GetCard;

