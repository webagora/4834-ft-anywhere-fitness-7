const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Users = require("./../users/users-model")
const { validateCredentials, checkUserValid, checkUsernameTaken, validateRole } = require("./auth-middleware")
const tokenMaker = require("./token-builder")
const { BCRYPT_ROUNDS } = require("./../config")


router.post(
    "/register",
    validateCredentials,
    checkUsernameTaken,
    validateRole,
    async (req, res, next) => {
      let user = req.body;
  
      const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS);
  
      user.password = hash;
  
      try {
        const newUser = await Users.add(user);
        res.status(200).json({message: 'Account successfully created. Please login.', newUser: {...newUser}});
      } catch (err) {
        next(err);
      }
    }
  );

router.post("/login", validateCredentials, checkUserValid, (req, res) => {
    const user = req.userFromDb;
    res
      .status(200)
      .json({ message: `welcome, ${user.username}`, role: user.role_type, token: tokenMaker(user) });
  });

module.exports = router
