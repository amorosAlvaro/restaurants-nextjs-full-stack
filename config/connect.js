import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;

const MONGODB_URL = `mongodb+srv://${user}:${password}@cluster0.3n50x.mongodb.net/${name}?retryWrites=true&w=majority`;

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected.');
    return;
  }
  mongoose.connect(
    MONGODB_URL,
    {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log('Connected to mongodb.');
    }
  );
};

export default connectDB;
