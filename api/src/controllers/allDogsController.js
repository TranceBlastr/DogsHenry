const axios = require("axios");
const cleanDogs = require("../helpers/cleanDogs");

const allDogsController = async () => {
  try {
    const { data } = await axios.get("https://api.thedogapi.com/v1/breeds");
    // const { data } = await axios.get(API_URL);
    const dogs = cleanDogs(data);

    return dogs;
  } catch (error) {
    throw new Error("Error en allDogsController");
  }
};
module.exports = { allDogsController };
