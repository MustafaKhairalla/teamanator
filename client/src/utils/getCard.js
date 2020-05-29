import API from "./API";

const GetCard = (select,
) => {
    switch (select) {
        case "Business":
            API.getBusinessCardsByOwner(id);
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

