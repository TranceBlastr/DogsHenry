const { Dog, Temperament } = require("../db");

const postDogController = async (
  name,
  image,
  height,
  weight,
  lifeSpan,
  temperament,
  res
) => {
  try {
    console.log(name);
    console.log(image);
    console.log(height);
    console.log(weight);
    console.log(lifeSpan);
    console.log(temperament);
    if (!name || !image || !height || !weight || !lifeSpan || !temperament) {
      return res.status(400).json({ error: "Falta informacion obligatoria" });
    }
    console.log(1);
    const [createdDog, created] = await Dog.findOrCreate({
      where: { name },
      defaults: {
        name,
        image,
        height,
        weight,
        lifeSpan,
      },
    });
    console.log(2);
    //prettier-ignore
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
    console.log(error);
    // throw new Error("Error al postear el perro");
    throw new Error({ error: error.message });
  }
};
module.exports = { postDogController };
