const {
  dogTemperamentsController,
} = require("../controllers/dogTemperamentsController");

const temperamentsHandler = async (req, res) => {
  try {
    const temperaments = await dogTemperamentsController();
    res.status(200).json(temperaments);
  } catch (error) {
    // res.status(400).json("Error de temperamentsHandler");
    res.status(400).json({ error: error.message });
  }
};

module.exports = temperamentsHandler;
