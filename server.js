import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = 'mongodb://localhost:27017/classrank'; // database name is classrank
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define User schema and model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
  });
  
  const User = mongoose.model('User', userSchema, 'users'); // collection name is users

// Routes
app.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user', error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});