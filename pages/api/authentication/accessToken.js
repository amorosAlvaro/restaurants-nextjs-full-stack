import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../../../helpers/createAcesToken';

connectDB();

export default async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ error: 'Pleas login' });
    }

    const result = jwt.verify(token, process.env.SECRET);
    if (!result) {
      return res
        .status(400)
        .json({ error: 'Your token is incorrect, try to login again' });
    }

    const user = await Users.findById({ id: user._id });
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const access_token = createAccessToken({ id: user._id });

    res.json({
      access_token,
      userName: user.userName,
    });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};
