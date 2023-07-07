const {
  getDogByIdController,
} = require("../controllers/getDogByIdController.js");

const dogsByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    dog = await getDogByIdController(id);
    res.status(200).json(dog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = dogsByIdHandler;
