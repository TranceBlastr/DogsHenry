const { Dog, Temperament } = require("../db");

const postDogController = async (
  name,
  image,
  height,
  weight,
  lifeSpan,
  temperament
) => {
  try {
    if (!name || !image || !height || !weight || !lifeSpan || !temperament) {
      return res.status(400).json({ error: "Falta informacion obligatoria" });
    }
    const [createdDog, created] = await Dog.findOrCreate({
      where: { name },
      defaults: {
        name,
        image,
        height,
        weight,
        lifespan,
        temperament,
      },
    });
    // prettier-ignore
    if (!created) {
      return res.status(400).json({ error: "El perro ya existe en nuestra base de datos." });
    }

    const findTemperament = await Temperament.findAll({
      where: {
        name: temperament,
      },
    });

    await createdDog.addTemperament(findTemperament);

    return res.status(201).json("Perro creado con exito!");
  } catch (error) {
    throw new Error("Error al postear el perro");
  }
};
module.exports = postDogController;
