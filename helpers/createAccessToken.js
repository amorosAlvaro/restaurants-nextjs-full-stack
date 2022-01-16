import jwt from 'jsonwebtoken';

const createAccessToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET);
  return token;
};

export default createAccessToken;
