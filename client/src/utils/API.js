import axios from "axios";

export default {
    // Get all users
    getUsers: function () {
        return axios.get("api/users");
    },

    // Handle business cards
    getAllBusinessCards: function () {
        return axios.get("api/business")
    },

    getBusinessCardsByOwner: function (id) {

    },

    createBusinessCard: function (businessData) {
        return axios.post("api/business", businessData);
    },

    DeleteBusinessCardsById: function (id) {
        return axios.delete("api/business", + id)
    },


    // handle education cards ------------------------------------------

    getAllEducationCards: function () {
        return axios.get("api/education")
    },

    getEducationCardsByOwner: function () {

    },

    createEducationCard: function (educationData) {
        return axios.post("api/education", educationData);
    },

    DeleteEducationCardsById: function (id) {
        return axios.delete("api/education", + id)
    },

    // Handle fintess cards --------------------------------

    getAllFitnessCards: function () {
        return axios.get("api/fitness")
    },

    getFitnessCardsByOwner: function () {

    },

    createFitnessCard: function (fitnessData) {
        return axios.post("api/fitness", fitnessData);
    },

    DeleteFitnessCardsById: function (id) {
        return axios.delete("api/fitness", + id)
    },

    //handle sports cards---------------------------------

    getAllSportCards: function () {
        return axios.get("api/sport")
    },

    getSportCardsByOwner: function () {

    },

    createSportCard: function (sportData) {
        return axios.post("api/sport", sportData);
    },

    DeleteSportCardsById: function (id) {
        return axios.delete("api/sport", + id)
    },

    //update user typeOfteam: "business"
    UpdateUserTeamType: function (id) {
        return axios.put("api/type", + id, body)
    }


} // End of Export function 


//API.UpdateuserTeamType: (`{$id}` , TypeOfTeam: `{$title}`)