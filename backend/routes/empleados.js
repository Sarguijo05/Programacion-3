const express = require("express");
const router = express.Router();

const empleadosController = require("../controllers/empleadosController.js");
router.get("/", empleadosController.list);
router.post("/", empleadosController.save);   
router.delete("/:idemp", empleadosController.delete);
router.get("/:idemp", empleadosController.edit);
router.post("/:idemp", empleadosController.update);

module.exports = router;
