const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Camp = require('../models/campModel');

// @desc    Get user camps
// @route   GET /api/camps
// @access  Private
const getCamps = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // const camps = await Camp.find({ user: req.user.id });
  const camps = await Camp.find();

  res.status(200).json(camps);
});

// @desc    Get user camp
// @route   GET /api/camps/:id
// @access  Private
const getCamp = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const camp = await Camp.findById(req.params.id);

  if (!camp) {
    res.status(404);
    throw new Error('Camp not found');
  }

  if (camp.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  res.status(200).json(camp);
});

// @desc    Create new camp
// @route   POST /api/camps
// @access  Private
const createCamp = asyncHandler(async (req, res) => {
  const {
    campName,
    reservation,
    description,
    camptype,
    homePageUrl,
    imageUrl,
    campstatus,
  } = req.body;

  if (!campName) {
    res.status(400);
    throw new Error('Please add camp name');
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const campData = await Camp.create({
    user: req.user.id,
    campName,
    reservation,
    description,
    camptype,
    homePageUrl,
    imageUrl,
    campstatus,
  });

  res.status(201).json(campData);
});

module.exports = {
  getCamps,
  getCamp,
  createCamp,
};
