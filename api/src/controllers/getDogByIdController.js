const axios = require("axios");
const cleanSingleDog = require("../helpers/cleanSingleDog");

const getDogByIdController = async (id) => {
  const idNumber = Number(id);
  try {
    if (id.includes("-")) {
      const dogInDB = await Dog.findAll({ where: { id: idNumber } });
      return dogInDB;
    }
    const { data } = await axios.get("https://api.thedogapi.com/v1/breeds");

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
