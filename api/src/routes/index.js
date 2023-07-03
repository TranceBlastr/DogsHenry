const { Router } = require("express");
const {
  dogsHandler,
  dogByIdHandler,
  dogPostHandler,
  temperamentsHandler,
} = require("../handlers");

const router = Router();

router.get("/dogs", dogsHandler);

router.get("/dogs/:id", dogByIdHandler);

router.post("/dogs", dogPostHandler);

router.get("/temperaments", temperamentsHandler);

module.exports = router;
