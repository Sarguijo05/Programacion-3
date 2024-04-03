const express = require("express");
const router = express.Router();

const formapagoController = require("../controllers/formapagoController.js");
router.get("/", formapagoController.list);
router.post("/", formapagoController.save);   
router.delete("/:idfpago", formapagoController.delete);
router.get("/:idfpago", formapagoController.edit);
router.post("/:idfpago", formapagoController.update);

module.exports = router;
