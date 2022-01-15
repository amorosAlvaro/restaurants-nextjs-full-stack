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
      type: Object,
    },
  ],
});

let Dataset = mongoose.models.user || mongoose.model('user', userSchema);
export default Dataset;
