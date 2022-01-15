import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;

const uri = `mongodb+srv://${user}:${password}@cluster0.3n50x.mongodb.net/${name}?retryWrites=true&w=majority`;

async function mongoConnect(uriParam = uri) {
  try {
    const mongooseConnect = await mongoose.connect(uriParam);
    console.log('Connected to mongo');
    return mongooseConnect;
  } catch (error) {
    return process.exit(1);
  }
}

module.exports = { mongoConnect };
