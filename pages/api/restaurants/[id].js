import connectDB from '../../../config/connect';
import Restaurant from '../../../models/restaurantModel';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getRestaurantById(req, res);
      break;
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.query;

    const restaurant = await Restaurant.findById(id);
    if (!restaurant)
      return res.status(400).json({ err: 'This restaurant does not exist.' });

    res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
