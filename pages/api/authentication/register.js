/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../config/connect';
import Users from '../../../models/userModel';
import validation from '../../../helpers/validation';
import bcrypt from 'bcrypt';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { userName, password, cf_password } = req.body;
    const errorMessage = validation(userName, password, cf_password);
    if (errorMessage) {
      return res.status(400).json({ errorMessage });
    }
    const passwordHash = await bcrypt.hash(password, 2);

    const newUser = new Users({
      userName,
      password: passwordHash,
    });
    await newUser.save();
    res.json({ message: 'Resister successful' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
