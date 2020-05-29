import API from "./API";

const CreateCard = (select) => {
    switch (select) {
        case bsuiness:
            API.createBusinessCard(id);
            break;

        case education:
            API.createEducationCard(id);
            break;

        case fitness:
            API.createFitnessCard(id);
            break;

        case sport:
            API.createSportCard(id);
            break;

    }
};

export default CreateCard;