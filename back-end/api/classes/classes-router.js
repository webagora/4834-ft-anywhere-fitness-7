const express = require('express');
const router = express.Router();
const Classes = require('./classes-model');
const { restricted } = require('./../auth/auth-middleware');

router.get('/', async (req, res, next) => {
  try {
    const classes = await Classes.findAll();
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

router.get('/:class_id', async (req, res, next) => {
  try {
    const theClass = await Classes.findById(req.params.class_id);
    res.status(200).json(theClass);
  } catch (err) {
    next(err);
  }
});

router.get('/:user_id/attending', async (req, res, next) => {
  try {
    const classes = await Classes.findAttending(req.params.user_id);
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

router.get('/:user_id/teaching', async (req, res, next) => {
  try {
    const classes = await Classes.findTeaching(req.params.user_id);
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

router.post('/add', (req, res, next) => {
  const {
    class_name,
    class_duration,
    max_class_size,
    class_date,
    start_time,
    class_location,
    class_instructor,
    intensity_id,
    type_id,
  } = req.body;
  Classes.add({
    class_name,
    class_duration,
    max_class_size,
    class_date,
    start_time,
    class_location,
    class_instructor,
    intensity_id,
    type_id,
  })
    .then((regClass) => {
      res.status(201).json(regClass);
    })
    .catch(next);
});

router.post('/signup', async (req, res, next) => {
  try {
    const signup = await Classes.signup(req.body);
    res.status(200).json(signup);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', (req, res, next) => {
  Classes.update(req.params.id, req.body)
    .then(() => {
      return Classes.findById(req.params.id);
    })
    .then((classes) => {
      res.json(classes);
    })
    .catch(next);
});

router.delete('/:class_id', async (req, res, next ) => {
    try{
       const removed = await Classes.remove(req.params.class_id)
       res.status(200).json({message: `${removed} has been deleted successfully`})
    }
    catch(err) {
        next(err)
    }
})

module.exports = router;
