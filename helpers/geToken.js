import jwt from 'jsonwebtoken';

const createAcesToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET);
};

export default createAcesToken;
