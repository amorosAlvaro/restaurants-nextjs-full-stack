import mongoose from 'mongoose';

const { Schema } = mongoose;

export default mongoose.model(
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
