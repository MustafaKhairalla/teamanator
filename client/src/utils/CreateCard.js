import API from "./API";

const CreateCard = (select, data) => {
    switch (select) {
        case "Business":
            API.createBusinessCard(data);
            break;

        case "Education":
            API.createEducationCard(data);
            break;

        case "Fitness":
            API.createFitnessCard(data);
            break;

        case "Sport":
            API.createSportCard(data);
            break;

    }
};

export default CreateCard;