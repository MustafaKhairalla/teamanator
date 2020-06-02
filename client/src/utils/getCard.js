import API from "./API";

const GetCard = async (select, id
) => {
    switch (select) {

        case "Business":
            return await API.getBusinessCardsByOwner(id)

            break;
        case "Bussines":
            return await API.getBusinessCardsByOwner(id)

            break;
        case "Education":
            return await API.getEducationCardsByOwner(id);
            break;

        case "Fitness":
            return await API.getFitnessCardsByOwner(id);
            break;

        case "Sport":
            return await API.getSportCardsByOwner(id);
            break;

    }
};


export default GetCard;

