const express = require("express");
const router = express.Router();

const productoController = require("../controllers/productoController.js");
router.get("/", productoController.list);
router.post("/", productoController.save);   
router.delete("/:num_prod", productoController.delete);
router.get("/:num_prod", productoController.edit);
router.post("/:num_prod", productoController.update);

module.exports = router;
