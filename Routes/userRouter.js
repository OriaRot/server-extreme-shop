const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");


router.post("/signup", async (req, res) => {
  // console.log('im here');
  try {
    const result = await userLogic.signUp(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  // const user = { email: req.body.email, password: req.body.password };
  try {
      const result = await userLogic.signIn(req.body)
      console.log({result});
      res.status(200).send(result)
  } catch (err) {
    res.status(err.code).send(err.message);
  }
});

router.get("/find/:email?", async (req, res) => {
  const email = req.params.email;
  try {
    const result = email
      ? await userLogic.getUser(email)
      : await userLogic.getUser();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
