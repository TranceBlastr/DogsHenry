const axios = require("axios");
const cleanSingleDog = require("../helpers/cleanSingleDog");
const { API_KEY } = process.env;
const { Dog } = require("../db");

const getDogByIdController = async (id) => {
  const idNumber = Number(id);

  try {
    if (id.includes("-")) {
      const dogInDB = await Dog.findOne({ where: { id: id } });
      if (dogInDB.length === 0) {
        throw new Error("Perro no encontrado en la base de datos");
      }
      return dogInDB;
    }
    const { data } = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    const dogInApi = data.find((element) => element.id === idNumber);
    if (dogInApi) {
      const cleanedDog = cleanSingleDog(dogInApi);
      return cleanedDog;
    }
  } catch (error) {
    throw new Error("Error en getDogByIdController");
  }
};
module.exports = { getDogByIdController };
