import connectDB from '../../../config/connect';
import Users from '../../../models/userModel';
import bcrypt from 'bcrypt';
import createAccessToken from '../../../helpers/createAccessToken';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { userName, password, favorites } = req.body;

    const user = await Users.findOne({ userName });

    if (!user) {
      return res.status(400).json({ error: 'This user name does not exist.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    const access_token = createAccessToken({ id: user._id });
    console.log(favorites);

    res
      .status(200)
      .json({ message: 'Login successful', access_token, userName, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
