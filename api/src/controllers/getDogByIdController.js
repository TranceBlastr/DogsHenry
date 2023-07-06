const axios = require("axios");
const cleanSingleDog = require("../helpers/cleanSingleDog");
const { API_URL } = process.env;

const getDogByIdController = async (id) => {
  try {
    if (id.includes("-")) {
      const dogInDB = await Dog.findAll({ where: { id: id } });
      return dogInDB;
    }
    const data = await axios.get(`${API_URL}/${id}`);
    const dogInApi = cleanSingleDog(data);
    return dogInApi;
  } catch (error) {
    throw new Error("Error en getDogByIdController");
  }
};
module.exports = getDogByIdController;
