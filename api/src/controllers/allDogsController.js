const axios = require("axios");
const cleanDogs = require("../helpers/cleanDogs");
const { Dog } = require("../db");
const { API_KEY } = process.env;

const allDogsController = async () => {
  try {
    const dogsInDB = await Dog.findAll();
    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    const dogsInApi = cleanDogs(data);
    return [...dogsInDB, ...dogsInApi];
  } catch (error) {
    throw new Error("Error en allDogsController");
  }
};
module.exports = { allDogsController };
