const express = require("express");
const router = express.Router();
const Users = require("./users-model");
const { restricted } = require('./../auth/auth-middleware')

router.get("/", restricted, async (req, res, next) => {
    try {
      const user = await Users.findById(req.decodedJwt.subject);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
