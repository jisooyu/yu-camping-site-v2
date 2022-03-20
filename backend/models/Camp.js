const mongoose = require('mongoose');
const CampSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    camp: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    camptype: {
      type: String,
    },
    url: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Camp', CampSchema);
