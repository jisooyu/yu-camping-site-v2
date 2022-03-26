const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Camp = require('../models/campModel');
const fetchGoCampingData = require('../goCampingAPI/fetchData');

const testGet = asyncHandler(async (req, res) => {
  const response = await fetchGoCampingData();
  console.log(response.data.response.body.items);
  res.status(200).send(response.data.response.body.items);
});

// @desc    Get user camps
// @route   GET /api/camps
// @access  Private
const getGoCamping = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const camps = await Camp.find({ user: req.user.id });

  res.status(200).json(camps);
});

// @desc    Create Go Camping
// @route   POST /api/goCamping
// @access  Private
const createGoCamping = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const response = await fetchGoCampingData();
  const data = response.data.response.body.items.item;

  if (!data) {
    res.status(400);
    throw new Error('Data not found');
  }

  const {
    facltNm,
    homepage,
    induty,
    resveUrl,
    intro,
    manageSttus,
    firstImageUrl,
  } = data[0];

  const goCampingData = await Camp.create({
    campName: facltNm,
    reservation: resveUrl,
    description: intro,
    user: req.user.id,
    camptype: induty,
    homePageUrl: homepage,
    imageUrl: firstImageUrl,
    campstatus: manageSttus,
  });
  res.status(201).json(goCampingData);
});
module.exports = {
  getGoCamping,
  createGoCamping,
  testGet,
};
