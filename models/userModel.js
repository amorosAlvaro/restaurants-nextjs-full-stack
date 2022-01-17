import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
    },
  ],
});

let Dataset = mongoose.models.user || mongoose.model('user', userSchema);
export default Dataset;
