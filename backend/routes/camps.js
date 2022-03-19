const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const Camp = require('../models/Camp');

const fetchData = require('../campingsite/fetchData');
const { route } = require('./users');

// get camp data
router.get('/', async (req, res) => {
  try {
    const response = await fetchData();
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

// create a new camp
router.post('/', async (req, res) => {
  const { camp, description, url } = req.body;

  if (!camp || !description || !url) {
    res.status(400);
    throw new Error('Please add the camp name, the introduction, and the URL');
  }
  // Get user using the id in the JWT
  const user = await Camp.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const campData = await Camp.create({
    camp,
    description,
    url,
    user: req.user.id,
    status: 'new',
  });
  res.status(201).json(campData);
});

// fetch the data in the public portal data and save them in mongo db
router.post('/init', auth, async (req, res) => {
  try {
    const response = await fetchData();
    const camps = response.data.response.body.items.item;
    console.log('response.data', response.data);
    Camp.collection.insertMany(camps);
    console.log('Multiple documents are inserted');
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
