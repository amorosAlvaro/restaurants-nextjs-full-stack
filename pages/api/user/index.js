import connectDB from '../../../config/connect';
import Users from '../../../models/userModel';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'PATCH':
      await uploadFavorites(req, res);
      break;
  }
};

const uploadFavorites = async (req, res) => {
  console.log('controller');
  try {
    const result = await auth(req, res);
    const restaurant = req.body._id;
    console.log('result in controller:', result);
    console.log('req.body in controller:', req.body);

    const newUser = await Users.findOneAndUpdate(
      { _id: result.id },
      {
        $push: {
          favorites: {
            $each: [restaurant],
            $position: -1,
          },
        },
      }
    );

    res.json({
      message: 'Update Success!',
      user: {
        newUser,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
