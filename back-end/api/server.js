const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const Users = require("./users/users-model")
const classesRouter = require("./classes/classes-router")
const userRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router")
const { restricted } = require('./auth/auth-middleware')

// function getAllUsers() { return db('users') }

// async function insertUser(user) {
//   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//   // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
//   const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
//   return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/classes', classesRouter)
server.use('/api/user', userRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res, next) => {
    res.send('api is working')
})

server.get("/api/users", restricted, async (req, res, next) => {
    try {
      const users = await Users.findAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  });


// server.get('/api/users', async (req, res) => {
//   res.json(await getAllUsers())
// })

// server.get('/api/test', async (req, res) => {
//   res.json(await getAllUsers())
// })

// server.post('/api/users', async (req, res) => {
//   res.status(201).json(await insertUser(req.body))
// })

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      prodMessage: 'something went wrong',
      stack: err.stack,
    });
  });

module.exports = server
