/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../config/connect';
import Users from '../../../models/userModel';
import validation from '../../../helpers/validation';
import bcrypt from 'bcrypt';

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

    res.status(200).json({ message: 'Resister successful' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
