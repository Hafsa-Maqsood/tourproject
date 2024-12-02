import express from 'express';  // Use 'import' instead of 'require'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import User from './model/User.js'; // Adjust the path based on your project structure


// Initialize app and load environment variables
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// Booking Schema and Model
const bookingSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    userEmail: { type: String, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    guestSize: { type: Number, required: true },
    bookAt: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    location: { type: String, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);


// Check if user already has a booking
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({ booking: bookings[0] }); // Adjust based on your needs
    } catch (err) {
        console.error('Error fetching bookings:', err);
        res.status(500).json({ message: 'Failed to fetch bookings' });
    }
});


// Booking Route (POST request)
app.post('/api/bookings', async (req, res) => {
    const { userId, userEmail, fullName, phone, guestSize, bookAt, totalAmount, location } = req.body;

    try {
        // Check if the user already has a booking
        const existingBooking = await Booking.findOne({ userId });
        if (existingBooking) {
            return res.status(400).json({ message: 'User already has an active booking' });
        }

        const newBooking = new Booking({
            userId,
            userEmail,
            fullName,
            phone,
            guestSize,
            bookAt,
            totalAmount,
            location
        });

        const savedBooking = await newBooking.save();

        res.status(201).json({
            message: 'Booking created successfully',
            booking: savedBooking
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({
            message: 'Error creating booking',
            error
        });
    }
});

// Cancel Booking Route (DELETE)
app.delete('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Delete the booking from the database by its ID
        const booking = await Booking.findByIdAndDelete(id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking canceled successfully' });
    } catch (error) {
        console.error('Error canceling booking:', error);
        res.status(500).json({ message: 'Error canceling booking' });
    }
});

// Registration Route
app.post('/api/auth/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user using the existing schema
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If login is successful, return the user data
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Booking API!');
});

// Reset Password
app.post('/api/auth/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Validate request
    if (!email || !newPassword) {
      return res.status(400).json({ success: false, message: 'Email and new password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ success: true, message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
