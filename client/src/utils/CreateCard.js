import API from "./API";


const CreateCard = (select, data) => {
    console.log('Created Card action', select)
    switch (select) {
        case "Business":
            API.createBusinessCard(data);
            break;
        case "Bussines":
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