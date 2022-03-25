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
      required: [true, 'Please enter a camp name'],
    },
    campEmail: {
      type: String,
      required: [true, 'Please enter a camp email to contact'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
    },
    camptype: {
      type: String,
      required: true,
      enum: ['tentCamping', 'motorCamping', 'glamping', 'others'],
    },
    url: {
      type: String,
      required: [true, 'Please enter a camp url for information'],
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

module.exports = mongoose.model('Camp', campSchema);
