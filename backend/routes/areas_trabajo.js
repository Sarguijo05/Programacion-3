const express = require("express");
const router = express.Router();

const areas_trabajoController = require("../controllers/areas_trabajoController.js");
router.get("/", areas_trabajoController.list);
router.post("/", areas_trabajoController.save);   
router.delete("/:idarea", areas_trabajoController.delete);
router.get("/:idarea", areas_trabajoController.edit);
router.post("/:idarea", areas_trabajoController.update);

module.exports = router;
