import API from "./API";

const GetCard = (select) => {
    switch (select) {
        case bsuiness:
            API.getBusinessCardsByOwner(id);
            break;

        case education:
            API.getEducationCardsByOwner(id);
            break;

        case fitness:
            API.getFitnessCardsByOwner(id);
            break;

        case sport:
            API.getSportCardsByOwner(id);
            break;

    }
};

export default GetCard;

