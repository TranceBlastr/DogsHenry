const dogPostHandler = (req, res) => {
  const { name, image, height, weight, lifeSpan, temperament } = req.body;
  try {
    postDogController(name, image, height, weight, lifeSpan, temperament);
    res.status(200).json("Perro creado con exito!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = dogPostHandler;
