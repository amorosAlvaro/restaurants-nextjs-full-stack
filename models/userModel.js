const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = mongoose.model(
  'User',
  Schema({
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
      },
    ],
  })
);
