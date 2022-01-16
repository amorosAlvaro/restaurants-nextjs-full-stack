import connectDB from '../../../utils/connectDB';
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
  try {
    const result = await auth(req, res);
    const { favorite } = req.body;

    const newUser = await Users.findOneAndUpdate(
      { _id: result.id },
      {
        $push: {
          favorites: {
            $each: [favorite],
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
