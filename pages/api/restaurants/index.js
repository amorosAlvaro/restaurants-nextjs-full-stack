import connectDB from '../../../config/connect';
import Restaurant from '../../../models/restaurantModel';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getRestaurants(req, res);
      break;
  }
};

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.json({
      status: 'success',
      result: restaurants.length,
      restaurants,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
