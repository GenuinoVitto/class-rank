import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const app = express();
const port = process.env.PORT || 5000; 
const uri = process.env.MONGO_URI;
app.use(cors());
app.use(express.json());  

// MongoDB connection
mongoose.connect(uri)
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

const User = mongoose.model('User', userSchema, 'users');

// Registration route
app.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already registered' });
    } else {
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

router.post('/signout', (req, res) => {
  // Clear the user's session or token
  res.clearCookie('token'); // If using cookies to store the token
  res.json({ message: 'Signed out successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
