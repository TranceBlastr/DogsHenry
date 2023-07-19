const axios = require("axios");
const cleanSingleDog = require("../helpers/cleanSingleDog");
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");
const { API_KEY } = process.env;

const dogByNameController = async (name) => {
  const filteredName = name.replace(/-/g, " ");
  try {
    const dogInDB = await Dog.findAll({
      where: {
        name: { [Op.iLike]: `%${filteredName}%` },
      },
      include: Temperament,
    });
    if (dogInDB.length !== 0) return dogInDB;

    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds`);

    const dogInApi = data.find((element) => {
      return element.name.toLowerCase().includes(filteredName.toLowerCase());
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
