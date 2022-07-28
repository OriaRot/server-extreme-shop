const express = require("express");
const router = express.Router();
const productLogic = require("../BL/productLogic");

router.get("/all", async (req, res) => {
  try {
    const result = await productLogic.getPruducts();

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
