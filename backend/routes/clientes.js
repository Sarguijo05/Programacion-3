const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientesController.js");
router.get("/", clientesController.list);
router.post("/", clientesController.save);   
router.delete("/:num_clie", clientesController.delete);
router.get("/:num_clie", clientesController.edit);
router.post("/:num_clie", clientesController.update);

module.exports = router;
