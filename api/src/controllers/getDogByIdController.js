const axios = require("axios");
const cleanSingleDog = require("../helpers/cleanSingleDog");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");
const cleanDogFromDB = require("../helpers/cleanDogFromDB");

const getDogByIdController = async (id) => {
  const idNumber = Number(id);

  try {
    if (id.includes("-")) {
      // Si el id contiene un guión, significa que es un uuid y lo buscamos en la base de datos
      const dogInDB = await Dog.findOne({
        where: { id: id },
        include: Temperament,
      });

      if (!dogInDB) {
        throw new Error("Perro no encontrado en la base de datos");
      }

      // Usamos la función mapTemperaments para obtener el objeto con los temperamentos ajustados
      const dogWithTemperaments = cleanDogFromDB(dogInDB);
      return dogWithTemperaments;
    } else {
      // Si el id no contiene un guión, significa que es un id numérico y lo buscamos en la API externa
      const { data } = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      );

      const dogInApi = data.find((element) => element.id === idNumber);
      if (dogInApi) {
        const cleanedDog = cleanSingleDog(dogInApi);
        return cleanedDog;
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error en getDogByIdController");
  }
};

module.exports = { getDogByIdController };
