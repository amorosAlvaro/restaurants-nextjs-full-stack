import connectDB from '../../../config/connect';
import Users from '../../../models/userModel';
import bcrypt from 'bcrypt';
import createAcesToken from '../../../helpers/geToken';
import { isResSent } from 'next/dist/shared/lib/utils';

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
    const { userName, password } = req.body;

    const user = await Users.findOne({ userName });
    if (!user) {
      return res.status(400).json({ error: 'This user name does not exist.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    const access_token = createAcesToken({ id: isResSent._id });

    res
      .status(200)
      .json({ message: 'Login successful', access_token, userName });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
