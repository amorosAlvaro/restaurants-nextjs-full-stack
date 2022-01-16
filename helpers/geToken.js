import jwt from 'jsonwebtoken';

const createAcesToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET);
  return token;
};

export default createAcesToken;
