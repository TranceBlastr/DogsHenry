const axios = require("axios");
const { API_URL } = process.env;
const { cleanDogs } = require("../helpers/cleanDogs");

const allDogsController = async () => {
  try {
    const { data } = await axios.get(API_URL);
    const dogs = cleanDogs(data);

    return dogs;
  } catch (error) {
    throw new Error("Error en allDogsController");
  }
};
module.exports = allDogsController;
