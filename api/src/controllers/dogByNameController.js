const axios = require("axios");
const cleanSingleDog = require("../helpers/cleanSingleDog");
const { Dog } = require("../db");

const dogByNameController = async (name) => {
  const filteredName = name.replace(/-/g, " ");
  try {
    const dogInDB = await Dog.findOne({ where: { name: filteredName } });
    if (dogInDB !== null) return dogInDB;

    const { data } = await axios.get("https://api.thedogapi.com/v1/breeds");
    const dogInApi = data.find((element) => {
      return element.name.toLowerCase() === filteredName.toLowerCase();
    });
    if (dogInApi !== undefined) {
      const cleanedDog = cleanSingleDog(dogInApi);
      return cleanedDog;
    }
  } catch (error) {
    throw new Error("Error en dogByNameController/ perro no encontrado");
  }
};
module.exports = { dogByNameController };
