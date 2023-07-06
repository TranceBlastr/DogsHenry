const axios = require("axios");
const { Temperament } = require("../db");
const { cleanTemper } = require("../helpers/cleanTemper");
const { API_URL } = process.env;

const dogTemperamentsController = async () => {
  try {
    const temperInDB = await Temperament.findAll();
    if (temperInDB.length > 0) return temperInDB;

    const { data } = await axios.get(API_URL);
    const temperFromApi = await cleanTemper(data);

    return [...temperInDB, ...temperFromApi];
  } catch (error) {
    throw new Error("Error de dogTemperamentsController");
  }
};

module.exports = dogTemperamentsController;

/* busco en db, si no hay, hago la peticion
mapeo la info y guardo en db
devuelvo todo
*/
