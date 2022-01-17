import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  minCharge: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  titlMC: {
    type: String,
    required: true,
  },
  url_menucat: {
    type: String,
    required: true,
  },
  type: [
    {
      type: String,
    },
  ],
});

let Dataset =
  mongoose.models.restaurant || mongoose.model('restaurant', restaurantSchema);
export default Dataset;
