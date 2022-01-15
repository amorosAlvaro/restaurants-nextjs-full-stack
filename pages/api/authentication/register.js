/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import validation from '../../../helpers/validation';
import bcrypt from 'bcrypt';

connectDB();

const addUser = async (req, res) => {
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
    const passwordHash = await bcrypt.hash(password);

    const newUser = new Users({
      userName,
      password: passwordHash,
    });

    await newUser.save;
    res.json({ message: 'Resister successful' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default addUser;
