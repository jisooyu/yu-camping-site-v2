const mongoose = require('mongoose');
const campSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    campName: {
      type: String,
      required: true,
    },
    reservation: {
      type: String,
    },
    description: {
      type: String,
    },
    camptype: {
      type: String,
    },
    homePageUrl: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    status: {
      type: String,
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Camp', campSchema);
